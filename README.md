# Task Manager Web Application

![Task Manager Banner](https://via.placeholder.com/1200x400?text=Task+Manager)  

A full-stack **Task Management Web Application** built with **MERN stack** (MongoDB, Express.js, React, Node.js). This project allows users to **create, update, delete, and manage tasks** with priorities, due dates, and status tracking.  

---

## 🌐 Live Demo

[View Live on Netlify](YOUR_FRONTEND_NETLIFY_LINK_HERE)

---

## 🛠 Tech Stack

**Frontend:**  
- React.js  
- Tailwind CSS  
- Framer Motion (for animations)  
- React Hot Toast (for notifications)  
- Axios (for API requests)  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Atlas)  
- Mongoose  
- JWT Authentication  

**Other Tools:**  
- VS Code  
- Postman (for testing API)  
- Render (for backend hosting)  

---

## 📦 Features

- User authentication (Register/Login) with JWT token.  
- Create tasks with **title, description, priority, and due date**.  
- Update task status (**Pending / Completed**) with confirmation.  
- Edit tasks (navigate to `/edit-task` page).  
- Delete tasks with confirmation modal.  
- Filter tasks by priority and status.  
- Responsive dashboard for desktop and mobile.  
- Fully animated UI with Framer Motion.  
- Notifications with React Hot Toast.  

---

## 🔑 Environment Variables

### Backend `.env`
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY


### Frontend `.env`
VITE_API_URL=YOUR_BACKEND_URL


---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone YOUR_REPOSITORY_LINK
cd task-manager
```
2️⃣ Backend Setup
```
cd backend
npm install
npm run dev
Backend will run on http://localhost:5000 (or your configured PORT).
```
3️⃣ Frontend Setup
```
cd frontend
npm install
npm run dev
Frontend will run on http://localhost:5173 (or your Vite configured port).
```
📂 Project Structure
```
task-manager/
│
├─ backend/
│   ├─ models/
│   │   └─ task.model.js
│   ├─ routes/
│   │   └─ task.routes.js
│   ├─ middleware/
│   │   └─ auth.js
│   ├─ server.js
│   └─ .env
│
├─ frontend/
│   ├─ src/
│   │   ├─ pages/
│   │   │   ├─ Home.jsx
│   │   │   ├─ Dashboard.jsx
│   │   │   ├─ Task.jsx
│   │   │   └─ Edittask.jsx
│   │   ├─ components/
│   │   │   ├─ Header.jsx
│   │   │   ├─ Footer.jsx
│   │   │   └─ AddTaskButton.jsx
│   │   ├─ App.jsx
│   │   └─ main.jsx
│   └─ package.json
│
└─ README.md
```
⚙️ API Endpoints
| Method | Endpoint                | Description                      |
| ------ | ----------------------- | -------------------------------- |
| POST   | `/api/users/register`   | Register a new user              |
| POST   | `/api/users/login`      | User login and get JWT token     |
| GET    | `/api/tasks`            | Get all tasks for logged-in user |
| POST   | `/api/tasks`            | Create a new task                |
| PATCH  | `/api/tasks/:id`        | Update a task                    |
| PATCH  | `/api/tasks/:id/toggle` | Toggle task status               |
| DELETE | `/api/tasks/:id`        | Delete a task                    |

🧑‍💻 Developer

Prince Bhatt

LinkedIn: 

GitHub: Your GitHub URL

Portfolio: Your Portfolio URL

Email: your.email@example.com

📄 License

This project is licensed under the MIT License - see the LICENSE
 file for details.

✨ Acknowledgements

Inspired by real-world task management applications

Built as part of a Job Interview Task Project

Tailwind CSS & Framer Motion for modern responsive design

React Hot Toast for notifications
