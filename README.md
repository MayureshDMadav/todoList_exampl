# 📝 To-Do List App

A simple yet functional To-Do List web application built using **Node.js**, **Express**, **EJS**, and **MongoDB (via Mongoose)**. This project allows users to **create**, **edit**, **delete**, and **update** their to-do tasks in a user-friendly interface.

---

## 📌 Features

- ✅ Create new to-do tasks
- 🖊️ Edit existing tasks
- 🗑️ Delete tasks
- 🔄 Mark tasks as completed or pending
- 📅 Dynamic rendering using EJS templates
- 💾 Persistent storage using MongoDB

---

## 🛠️ Tech Stack

| Tech       | Description                        |
|------------|------------------------------------|
| **Node.js** | JavaScript runtime environment     |
| **Express** | Web framework for Node.js          |
| **EJS**     | Embedded JavaScript templating     |
| **MongoDB** | NoSQL database for storing tasks   |
| **Mongoose**| ODM for MongoDB                    |
| **HTML/CSS**| Frontend templating                |

---

## 📂 Folder Structure

```
todolist/
├── models/
│ └── connect.js 
├── views/
│ └── index.ejs # Main UI
├── public/
│ └── styles.css
| └── script.js 
├── server.js # Express routing
├── package.json # Project dependencies
```
---

## ⚙️ Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/todolist.git
cd todolist
```
2. **Create a .env file with your connection link

```bash
DB_URL = "Your DB URL"
```
3. CMD to install dependencies
   
```bash
npm install
npm start
```
4. Open Browser and Run

```bash
http://localhost:3000
```

## Current Reference App
Deploy Link: https://todolist-6ktz.onrender.com
