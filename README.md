<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=220&section=header&text=LOGIN%2FREGISTER%20APP&fontSize=70&fontColor=FFD700&fontAlignY=42&desc=🔐%20Secure%20MERN%20Authentication%20%C2%B7%20JWT%20%2B%20Bcrypt%20%C2%B7%20Production-Ready&descAlignY=62&descColor=DCDCDC&animation=fadeIn" width="100%"/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Share+Tech+Mono&weight=700&size=20&duration=2800&pause=900&color=FFD700&center=true&vCenter=true&width=760&lines=%F0%9F%94%90+Enterprise-Grade+Auth+%26+Authorization;%F0%9F%9B%A1%EF%B8%8F+JWT+%2B+Bcrypt+%C2%B7+Stateless+Sessions;%F0%9F%A7%B1+Clean+MVC+Architecture;%F0%9F%92%BB+MERN+Stack+%C2%B7+Client+%2B+Server+Monorepo;%F0%9F%8F%86+%231+GitHub+Committer+in+Colombia)](https://git.io/typing-svg)

<br/>

<p align="center">
  <a href="https://github.com/NietoDeveloper">
    <img src="https://img.shields.io/badge/Engineer-Manuel%20Nieto-blue?style=for-the-badge&logo=github"/>
  </a>
  <a href="https://committers.top/colombia#NietoDeveloper">
    <img src="https://img.shields.io/badge/Committers.top-%231%20Colombia-gold?style=for-the-badge"/>
  </a>
  <a href="https://github.com/NietoDeveloper">
    <img src="https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge&logo=react"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge"/>
  </a>
</p>

</div>

---

## 📋 Overview

An enterprise-grade, highly secure **User Authentication & Authorization System** built with the modern MERN stack (MongoDB, Express.js, React, Node.js). Engineered with clean architecture principles, robust security protocols, and a production-ready folder structure to deliver seamless user onboarding and session management.

Developed by **Manuel Nieto** (**NietoDeveloper**), ranked **#1 in Colombia** and **#3 in Latin America** on `committers.top`. This application serves as a foundational micro-module demonstrating high-performance backend design and responsive frontend integration.

---

## 🏗️ Repository Architecture

```text
LoginRegister/
├── loginregisterbackend/    # RESTful API, database models, and authentication controllers
└── loginregisterfront/      # Modern React single-page application (SPA) UI
```

---

## 🔄 Authentication Flow

```mermaid
flowchart LR
    A([👤 User]) -->|Register / Login| B[React Client]
    B -->|POST credentials| C[Express API]
    C -->|Validate & Sanitize| D{Bcrypt Check}
    D -->|Valid| E[Issue JWT]
    D -->|Invalid| F[401 · Unauthorized]
    E -->|Signed Token| G[(MongoDB\nUsers Collection)]
    E -->|Session Active| H([✅ Authenticated Dashboard])

    style A fill:#FFD700,color:#000,stroke:#FFD700
    style E fill:#47A248,color:#fff,stroke:#47A248
    style F fill:#FF0000,color:#fff
    style H fill:#000,color:#FFD700,stroke:#FFD700
```

---

## 🚀 Key Features

- **Secure Authentication:** Password hashing using bcrypt and stateless session verification via JSON Web Tokens (JWT).
- **Robust Input Validation:** Strict payload sanitization and error handling across both client and server layers.
- **Scalable Architecture:** Separated concerns following industrial MVC patterns for the backend and component-driven architecture for the frontend.
- **Modern Developer Experience:** Configured with fast bundling, modern ECMAScript standards, and strict typing readiness.

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technologies |
|:------|:-------------|
| 🎨 **Frontend** | React, JavaScript (ES6+), HTML5, CSS3, Modern UI Components |
| ⚙️ **Backend** | Node.js, Express.js, RESTful APIs |
| 🗄️ **Database** | MongoDB, Mongoose ODM |
| 🔐 **Security & DevOps** | JWT, Bcrypt, CORS, Dotenv, Git |

</div>

---

## 👨‍💻 Author

**Manuel Nieto (NietoDeveloper)**
Role: Full-Stack Software Engineer & Systems Architect
Location: Bogotá, Colombia
Rankings: #1 in Colombia & #3 in Latin America (committers.top)
Portfolio: [manuelnieto.netlify.app](https://manuelnieto.netlify.app)
GitHub: [@NietoDeveloper](https://github.com/NietoDeveloper)

---

## 📄 License

This project is open-source and available under the **MIT License**.

<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,2,2,5,30&height=130&section=footer&animation=fadeIn" width="100%"/>

</div>
