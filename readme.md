# Uber Authentication & Authorization Project

This repository contains a robust authentication and authorization system for an Uber-like application, supporting both **Users** and **Captains** (drivers). The project is split into two main directories:

- [Frontend/](Frontend/) — React + Vite UI for registration, login, and protected routes.
- [Backend/](Backend/) — Node.js + Express REST API with JWT, bcrypt, and security best practices.

---

## Features

- **User & Captain Registration**: Secure signup forms with validation.
- **Login & Logout**: JWT-based authentication, token blacklisting for logout.
- **Protected Routes**: Only authenticated users/captains can access certain pages.
- **Password Security**: Passwords are hashed using bcrypt.
- **Token Security**: JWT tokens are used for stateless authentication.
- **Validation**: Input validation using express-validator.
- **Good Looking UI**: Responsive, modern design using Tailwind CSS.

---

## Technologies Used

- **Frontend**: React, React Router, Axios, Tailwind CSS, Vite
- **Backend**: Node.js, Express, MongoDB (Mongoose), JWT, bcrypt, express-validator, cookie-parser, CORS

---

## Project Structure

```
Uber/
├── Backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── model/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   ├── server.js
│   └── package.json
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── index.css
│   └── package.json
└── readme.md
```

---

## Backend Overview

- **User Endpoints**: `/users/register`, `/users/login`, `/users/profile`, `/users/logout`
- **Captain Endpoints**: `/captains/register`, `/captains/login`, `/captains/profile`, `/captains/logout`
- **Security**: Passwords are hashed before storing. JWT tokens are issued on login and checked for protected routes. Blacklisted tokens prevent reuse after logout.
- **Validation**: All input is validated for length, format, and required fields.

See [Backend/readme.md](Backend/readme.md) for detailed API documentation.

---

## Frontend Overview

- **Pages**: Registration, Login, Home, Logout for both Users and Captains.
- **Context Providers**: Global state for user and captain authentication.
- **Protected Routes**: Only accessible with a valid JWT token.
- **UI**: Clean, responsive forms and navigation using Tailwind CSS.

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/deepshresthaa/Uber.git
cd Uber
```

### 2. Setup Backend

- Install dependencies:
  ```sh
  cd Backend
  npm install
  ```
- Create a `.env` file with:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```
- Start the server:
  ```sh
  node server.js
  ```

### 3. Setup Frontend

- Install dependencies:
  ```sh
  cd ../Frontend
  npm install
  ```
- Create a `.env` file with:
  ```
  VITE_BASE_URL=http://localhost:4000
  ```
- Start the development server:
  ```sh
  npm run dev
  ```

---

## Security Highlights

- **JWT**: Used for stateless authentication, signed with a secret.
- **bcrypt**: Passwords are securely hashed before storing.
- **Token Blacklisting**: Prevents reuse of JWTs after logout.
- **Validation**: All user input is validated to prevent common attacks.
- **CORS & Cookies**: Configured for secure cross-origin requests.

---
