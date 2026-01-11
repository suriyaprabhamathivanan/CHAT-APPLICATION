**CHAT - APPLICATION**

COMPANY: CODTECH IT SOLUTIONS

NAME: M.SURIYA PRABHA

INTERN ID: CTIS0483

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH



**Real-Time Chat Application**


**Project Overview**

This project is a real-time chat application developed using Node.js, Express.js, Socket.IO, and MongoDB.

The application enables multiple users to register, authenticate securely, and exchange messages instantly in real time.

The system demonstrates WebSocket-based communication, persistent data storage, and real-time event handling, making it a strong example of a modern web application architecture.



 **Objectives**

1.To design and develop a real-time messaging system

2.To understand WebSocket communication using Socket.IO

3.To implement secure authentication using password hashing

4.To persist chat data using MongoDB

5.To build a scalable client-server architecture

6.To gain hands-on experience with full-stack development.


**Key Features**

**1. Authentication & Security**

User registration and login system

Passwords encrypted using bcryptjs

Secure backend validation

No plain-text password storage

**2. Real-Time Communication**

Instant message delivery using Socket.IO

Multiple users can chat simultaneously

Real-time event broadcasting

**3. Database Integration**

MongoDB used for persistent storage

Messages saved with timestamps

User data stored securely

MongoDB Compass support for visual inspection

**4. Frontend Interface**

Simple and responsive UI

Live chat updates without page reload

Easy to use for beginners

 **Tech Stack**

**1.Frontend**

HTML

CSS

JavaScript

Socket.IO Client

**2.Backend**

Node.js

Express.js

Socket.IO

Mongoose

bcryptjs

**3.Database**

MongoDB (Community Server)

MongoDB Compass (GUI)


**System Architecture**

Client (Browser)
   ⇅  WebSocket (Socket.IO)
Server (Node.js + Express)
   ⇅
MongoDB Database

Client communicates with server using WebSockets

Server handles authentication, messaging, and data persistence

MongoDB stores users and chat messages


**Project Structure**

```
task2_chat/
│
├── public/
│   ├── auth.html        # User Login & Registration Page
│   ├── index.html       # Chat Interface
│   ├── style.css        # Application Styling
│   └── client.js        # Client-side Socket Logic
│
├── models/
│   ├── User.js          # User Schema
│   └── Message.js       # Message Schema
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

**Install Project Dependencies**

**Navigate to the project folder:**

npm install

**Start MongoDB Service**

net start MongoDB

**Run the Server**

node server.js

**Expected output:**

MongoDB Connected

Server running on http://localhost:3000

**Launch the Application**

Open browser and visit:

http://localhost:3000/auth.html

Multi-User Testing


**To simulate real-world usage:**

Open two different browsers

Each browser represents a different user session.

Messages are exchanged instantly in real time.


**Database Visualization (MongoDB Compass)**

Open MongoDB Compass

Connect to:

mongodb://localhost:27017


Select database:

chatapp


View collections:

users → Registered users

messages → Chat history


**Data Security Measures**

Passwords encrypted using bcrypt hashing

MongoDB prevents SQL injection risks

Backend validation for all requests

Secure socket communication


**Conclusion**

This project successfully demonstrates the implementation of a real-time chat system using modern web technologies.

It highlights the integration of frontend, backend, WebSocket communication, and database persistence, making it a strong foundation for advanced messaging applications.


**OUTPUT:**

<img width="1919" height="1004" alt="Image" src="https://github.com/user-attachments/assets/f66bda82-3d69-4794-b5b0-c06a58e875b7" />

<img width="1919" height="1008" alt="Image" src="https://github.com/user-attachments/assets/ee7885be-6c86-4c11-8381-72c0f3f5ab94" />













