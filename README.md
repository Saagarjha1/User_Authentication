
# 🛡️ User Authentication

A simple and secure REST API for user registration and login using **Node.js**, **Express**, **MongoDB**, and **JWT**.

This project enables:
- ✅ User Signup
- ✅ User Login with JWT token response
- ✅ Secure access to protected routes via token-based authentication

---

## 🚀 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose)
- **Authentication**: bcrypt for password hashing, JWT for session tokens
- **Environment Management**: dotenv

---

## 📁 Project Structure

```
/user-authentication
│
├── /models          # User schema
├── /routes          # Auth routes (signup, login)
├── /middleware      # JWT verification middleware
├── .env             # Environment variables
├── db.js            # DB connection
├── server.js        # App entry point
└── README.md
```

---

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/user-authentication.git
cd user-authentication
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_jwt_secret
```

### 4. Start the server

```bash
npm start
```

Server will run at:  
`http://localhost:3000`

---

## 📌 API Endpoints

### ✅ POST `/api/signup`

Registers a new user.

**Request Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "username": "john_doe",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "response": {
    "username": "john_doe",
    "name": "John Doe",
    "password": "<hashed_password>",
    "email": "john@example.com",
    "_id": "685b90c83441419e1bc308b1",
    "__v": 0
  },
  "token": "<jwt_token>"
}
```

---

### ✅ POST `/api/login`

Logs in an existing user and returns a token.

**Request Body:**
```json
{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "token": "<jwt_token>"
}
```

---

## 🔐 Token Authentication

Use the token in headers to access protected routes:

```http
Authorization: Bearer <token>
```

---

## 🧪 Testing the API

You can test this API using:

- 📬 Postman
- 🔁 curl
- 🧑‍💻 Custom frontend integration

---

## 📄 License

MIT License

---

## 📬 Contact

For questions or contributions:
- Email: [sagarjha0999@gmail.com](mailto:sagarjha0999@gmail.com)
