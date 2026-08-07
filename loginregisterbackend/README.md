<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=200&section=header&text=LOGIN%2FREGISTER%20%E2%80%94%20BACKEND&fontSize=52&fontColor=FFD700&fontAlignY=42&desc=⚡%20Node.js%20%2B%20Express%20REST%20API%20%C2%B7%20MongoDB%20%C2%B7%20JWT%20Secured&descAlignY=62&descColor=DCDCDC&animation=fadeIn" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&weight=700&size=18&duration=2800&pause=900&color=FFD700&center=true&vCenter=true&width=740&lines=%E2%9A%A1+High-Performance+RESTful+API;%F0%9F%94%92+Bcrypt+Password+Hashing;%F0%9F%8E%9F%EF%B8%8F+JWT+Token-Based+Authentication;%F0%9F%97%84%EF%B8%8F+MongoDB+%2B+Mongoose+Data+Modeling)](https://git.io/typing-svg)

<br/>

<p align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge&logo=node.js"/>
  </a>
  <a href="https://expressjs.com/">
    <img src="https://img.shields.io/badge/Framework-Express.js-lightgrey?style=for-the-badge&logo=express"/>
  </a>
  <a href="https://www.mongodb.com/">
    <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge&logo=mongodb"/>
  </a>
</p>

</div>

---

## 📋 Overview

The backend service for the **Login/Register App**. Built with **Node.js** and **Express.js**, it exposes a high-performance RESTful API connected to **MongoDB** via Mongoose. It handles secure user registration, credential validation, password encryption, and token-based authentication.

---

## 🗂️ Directory Structure

```text
loginregisterbackend/
├── models/         # Mongoose schemas and data models (e.g., User model)
├── .env            # Environment configuration (not tracked in VCS)
├── package.json    # Project dependencies and scripts
└── server.js       # Application entry point and middleware configuration
```

---

## ⚙️ Core Modules & Features

- **RESTful Endpoints:** Predictable routes for user signup, signin, and token validation.
- **Data Modeling:** Strict schema definition using Mongoose with automated timestamping and unique constraints on identifiers.
- **Security Middleware:** CORS enablement, JSON body parsing, and secure environment variable management via dotenv.
- **Password Hashing:** Cryptographic salting and hashing protocols ensuring user credentials remain secure at rest.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (Local or Atlas cluster)

### Installation & Execution

**Step 1 — Navigate to the backend directory**

```bash
cd loginregisterbackend
```

**Step 2 — Install dependencies**

```bash
npm install
```

**Step 3 — Create a `.env` file** in the root of `loginregisterbackend` with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

**Step 4 — Run the server in development mode**

```bash
npm run dev
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technologies |
|:------|:-------------|
| 🏃 **Runtime** | Node.js |
| ⚙️ **Framework** | Express.js |
| 🗄️ **Database ODM** | Mongoose / MongoDB |
| 🔐 **Security** | Bcryptjs, JSON Web Tokens (JWT), CORS |

</div>

---

## 👨‍💻 Author

Built with precision by **Manuel Nieto (NietoDeveloper)** — Full-Stack Software Engineer & Systems Architect.

<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=120&section=footer&animation=fadeIn" width="100%"/>

</div>
