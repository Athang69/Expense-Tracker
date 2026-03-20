<div align="center">

# 💸 Expense Tracker

### A full-stack personal finance app to track income & expenses with interactive dashboards

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://expense-tracker-lemon-eta-39.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)](https://expense-tracker-a6yf.onrender.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

> ⚡ **Note:** Backend is hosted on Render's free tier — first load may take ~30 seconds to spin up.

</div>

---

## 📸 Preview

> _Add a demo GIF here — record your screen using Loom or any screen recorder, convert at [ezgif.com](https://ezgif.com/video-to-gif), and drop the file in the repo._

---

## ✨ Features

- 🔐 **JWT Authentication** — Secure register/login with bcrypt password hashing
- 💰 **Income & Expense Tracking** — Add, view, and delete financial entries
- 📊 **Interactive Dashboard** — Visual charts and financial summaries using Recharts
- 🖼️ **Profile Picture Upload** — Multer-powered image upload support
- 📥 **Export to Excel** — Download your financial data as `.xlsx`
- 📱 **Responsive UI** — Works across desktop and mobile

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS, Recharts, React Router |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose ODM) |
| Auth | JWT, Bcrypt |
| File Upload | Multer |
| Deployment | Vercel (frontend), Render (backend) |

---

## 🏗️ Project Structure

```
expense-tracker/
├── backend/
│   ├── controllers/       # Route handlers (auth, transactions)
│   ├── models/            # Mongoose schemas (User, Transaction)
│   ├── routes/            # Express route definitions
│   ├── middleware/         # JWT auth middleware
│   └── server.js          # Entry point
│
└── frontend/
    └── expense-tracker/
        ├── src/
        │   ├── components/    # Reusable UI components
        │   ├── pages/         # Dashboard, Login, Register
        │   └── context/       # Auth & data context
        └── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### 1. Clone the repo

```bash
git clone https://github.com/Athang69/Expense-Tracker.git
cd Expense-Tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file based on `.env.example`:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

```bash
npm run dev
```

Backend runs at `http://localhost:8000`

### 3. Frontend Setup

```bash
cd frontend/expense-tracker
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login & receive JWT |
| GET | `/api/v1/auth/getUser` | Get current user profile |

### Transactions
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/income/addIncome` | Add income entry |
| GET | `/api/v1/income/getIncome` | Get all income |
| DELETE | `/api/v1/income/:id` | Delete income entry |
| POST | `/api/v1/expense/addExpense` | Add expense entry |
| GET | `/api/v1/expense/getExpense` | Get all expenses |
| DELETE | `/api/v1/expense/:id` | Delete expense entry |

---

## 📄 .env.example

```env
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/expense-tracker
JWT_SECRET=your_super_secret_key
```

---

## 👨‍💻 Author

**Athang Kali** — [GitHub](https://github.com/Athang69) · [LinkedIn](https://linkedin.com/in/athangkali) · [Portfolio](https://yourportfolio.com)
