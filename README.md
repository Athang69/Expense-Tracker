# Expense Tracker

A full-stack personal finance app to track income and expenses, visualize spending, and export reports.

## Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Recharts, React Router
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT Auth, Multer

## Features

- User authentication (register/login with JWT)
- Add, view, and delete income & expense entries
- Dashboard with charts and financial summary
- Profile picture upload
- Export data to Excel (.xlsx)

## Getting Started

### Prerequisites
- Node.js
- MongoDB instance (local or Atlas)

### Backend

```bash
cd backend
npm install
```

Create a `.env` file (see `.env.example`), then:

```bash
npm run dev
```

### Frontend

```bash
cd frontend/expense-tracker
npm install
npm run dev
```

App runs at `http://localhost:5173`, API at `http://localhost:8000` (or your configured port).

## Project Structure

```
expense-tracker/
├── backend/        # Express API, models, controllers, routes
└── frontend/       # React app (Vite)
```
