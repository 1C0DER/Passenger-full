# 🚀 Passenger Delivery Management System

A full-stack web application for managing deliveries, users, and administrative operations.  
Built with a modern JavaScript/TypeScript stack, featuring authentication, role-based access control, and rate limiting.

---

## Tech Stack

### Frontend
- Next.js (App Router)
- React (TypeScript)
- Tailwind CSS

### Backend
- Node.js
- Express.js (TypeScript)
- MongoDB (Mongoose)

### Security & Middleware
- JWT Authentication
- Role-Based Authorization (Admin/User)
- Express Rate Limiting
- CORS Configuration

---

## Features

### Authentication
- User sign-in with JWT token
- Password hashing using bcrypt
- Protected routes using middleware

### Authorization
- Role-based access control:
  - Admin routes (e.g. manage users, deliveries)
  - User-level access restrictions

### Deliveries Management
- Fetch deliveries from database
- Pagination support (planned/in-progress)
- Status updates (Delivered / In Transit / Pending)

### Admin Controls
- View all users
- Update user details
- Delete users with reason logging

### Security
- Rate limiting on auth routes
- Global request throttling
- Token validation middleware

---
## ⚙️ Setup Instructions

### 1. Clone the repository

git clone https://github.com/yourusername/passenger-app.git
cd passenger-app

---

### 2. Backend Setup

cd backend
npm install
npm run dev

Server runs on:
http://localhost:5000

---

### 3. Frontend Setup

cd frontend
npm install
npm run dev

Frontend runs on:
http://localhost:3000

---

## 👨‍💻 Author

Built as a full-stack project to demonstrate:
- Backend architecture
- API security
- Frontend integration
- Real-world CRUD operations
