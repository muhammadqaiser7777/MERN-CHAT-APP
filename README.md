<h1 align="center">💬 MERN Chat App</h1>

<p align="center">
  A real-time chat application built with MongoDB, Express, React, and Node.js.<br/>
  Includes authentication, group and private chats, JWT security, and more.
</p>

<div align="center">
  <img src="https://img.shields.io/badge/Backend-Node.js-green" />
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" />
  <img src="https://img.shields.io/badge/WebSocket-Socket.IO-ff69b4" />
  <img src="https://img.shields.io/badge/Status-In%20Progress-yellow" />
</div>

---

## 📸 Overview

This MERN-based real-time chat app supports user registration, authentication, one-on-one messaging, group conversations, and more. It uses JWT for authentication and Socket.IO for real-time messaging.

---

## 🌟 Features

* 📝 User Signup & Login (with JWT)
* 💬 Real-time one-to-one messaging
* 👥 Group chat creation and management
* 🔐 Token-based route protection
* 📂 MongoDB for user and message storage
* ⚡ Real-time updates using Socket.IO
* 🧾 RESTful API for user and chat operations

---

## 🛠️ Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React, Axios, Context API, Tailwind |
| Backend  | Node.js, Express.js                 |
| Database | MongoDB, Mongoose                   |
| Auth     | JWT (JSON Web Tokens)               |
| Realtime | Socket.IO                           |

---

## ⚙️ Setup Instructions

### 📁 Clone the Repository

```bash
git clone https://github.com/muhammadqaiser7777/MERN-CHAT-APP.git
cd MERN-CHAT-APP
```

### 🖙 Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Fill in your actual values in the .env file
npm start
```

### 🌐 Frontend Setup

```bash
cd client
npm install
npm start
# Visit: http://localhost:3000
```

---

## 🧾 .env Configuration

### server/.env.example

```env
PORT=5000
MONGO_DB_URI=your-mongo-uri
JWT_SECRET=your-secret-key
NODE_ENV=development
```

---

## 🧠 Core API Routes

### 🔐 Authentication

| Endpoint  | Method | Description          |
| --------- | ------ | -------------------- |
| /api/auth | POST   | Register/Login users |

### 👤 Users

| Endpoint        | Method | Description                  |
| --------------- | ------ | ---------------------------- |
| /api/users/me   | GET    | Get current user (protected) |
| /api/users/\:id | GET    | Get user by ID               |

### 💬 Chats

| Endpoint                | Method | Description       |
| ----------------------- | ------ | ----------------- |
| /api/chats              | POST   | Create new chat   |
| /api/chats/\:id         | GET    | Get chat details  |
| /api/chats/group        | POST   | Create group chat |
| /api/chats/group/add    | PUT    | Add user to group |
| /api/chats/group/rename | PUT    | Rename group chat |

### 📩 Messages

| Endpoint               | Method | Description              |
| ---------------------- | ------ | ------------------------ |
| /api/messages          | POST   | Send message in chat     |
| /api/messages/\:chatId | GET    | Get all messages in chat |

---

## 🔀 Real-Time Features

* 🔌 Socket.IO connects users to rooms
* 📡 Events: `new-message`, `typing`, `stop-typing`
* 👥 Broadcast messages to chat participants in real-time

---

## ✨ Roadmap

* [ ] Media file sharing (images/videos)
* [ ] Message read indicators
* [ ] Notifications panel
* [ ] Dark mode support
* [ ] Docker & deployment with Render/Vercel

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Muhammad Qaiser**
📧 [YourEmail@example.com](mailto:qaiserakram7777@gmail.com)
🔗 GitHub: [@muhammadqaiser7777](https://github.com/muhammadqaiser7777)

---

## ❤️ Contributions

Pull requests are welcome! For major changes, open an issue first to discuss what you'd like to modify.

---
