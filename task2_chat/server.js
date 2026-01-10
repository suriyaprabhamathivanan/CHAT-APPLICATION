const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Server } = require("socket.io");

const User = require("./models/User");
const Message = require("./models/Message");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/chatapp")
  .then(() => console.log("MongoDB Connected"));

/* -------- AUTH API -------- */

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  try {
    await User.create({ username, password: hash });
    res.json({ success: true });
  } catch {
    res.json({ success: false, message: "User exists" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.json({ success: false });

  const ok = await bcrypt.compare(password, user.password);
  res.json({ success: ok });
});

/* -------- SOCKET CHAT -------- */

const users = {};

io.on("connection", (socket) => {

  socket.on("joinRoom", async ({ username, room }) => {
    users[socket.id] = { username, room };
    socket.join(room);

    const msgs = await Message.find({ room });
    socket.emit("loadMessages", msgs);
  });

  socket.on("sendMessage", async ({ text }) => {
    const user = users[socket.id];
    if (!user) return;

    const msg = await Message.create({
      username: user.username,
      text,
      room: user.room
    });

    io.to(user.room).emit("receiveMessage", msg);
  });

  socket.on("disconnect", () => delete users[socket.id]);
});

server.listen(3000, () =>
  console.log("http://localhost:3000")
);
