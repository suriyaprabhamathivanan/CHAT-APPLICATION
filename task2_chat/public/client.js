const socket = io();
const user = localStorage.getItem("user");

if (!user) location.href = "/auth.html";
welcome.innerText = "Welcome " + user;

function join() {
  socket.emit("joinRoom", { username: user, room: room.value });
}

function send() {
  socket.emit("sendMessage", { text: message.value });
  message.value = "";
}

socket.on("loadMessages", msgs => {
  messages.innerHTML = "";
  msgs.forEach(show);
});

socket.on("receiveMessage", show);

function show(m) {
  const d = document.createElement("div");
  d.innerHTML = `<b>${m.username}</b>: ${m.text}`;
  messages.appendChild(d);
}
