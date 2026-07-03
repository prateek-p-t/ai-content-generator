# 🚀 AI Content Generator

AI-powered SaaS application that generates high-quality blogs, LinkedIn posts, marketing copy, social media captions, and other content using Google's Gemini AI.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Gemini AI](https://img.shields.io/badge/Google-Gemini-orange)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 🌐 Live Demo

### Frontend

https://ai-content-generator-sand-five.vercel.app/

### Backend API

https://ai-content-generator-d23o.onrender.com

---

## 📌 Overview

AI Content Generator is a full-stack SaaS application that enables users to create AI-generated content in seconds. The platform integrates Google Gemini AI with a modern Next.js frontend and a secure Express.js backend to provide a seamless content generation experience.

Users can:

* Generate AI-powered content
* Create and manage accounts
* View generation history
* Track usage statistics
* Access content from a personalized dashboard

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT Authentication
* Secure Password Hashing with Bcrypt

### 🤖 AI Content Generation

* Powered by Google Gemini AI
* Generate blogs and articles
* Create LinkedIn posts
* Marketing copy generation
* Social media content creation

### 📊 Dashboard

* User profile management
* Content generation history
* Search generated content
* Copy generated content instantly
* Usage tracking

### ☁ Cloud Infrastructure

* MongoDB Atlas Database
* Vercel Frontend Deployment
* Render Backend Deployment

---

## 🛠 Tech Stack

### Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Axios
* React Hook Form
* Zod Validation

### Backend

* Node.js
* Express.js
* TypeScript
* JWT Authentication
* Bcrypt.js

### Database

* MongoDB Atlas
* Mongoose ODM

### AI

* Google Gemini API

### Deployment

* Vercel
* Render

---

## 🏗 Architecture

```text
Frontend (Next.js)
        │
        ▼
Backend API (Express.js)
        │
        ▼
MongoDB Atlas
        │
        ▼
Google Gemini AI
```

---

## 📂 Project Structure

```text
AI-Content-Generater/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── server.ts
│   │
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/prateek-p-t/ai-content-generator.git

cd ai-content-generator
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:3000
```

---

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs at:

```bash
http://localhost:5000
```

---

## 🔑 Environment Variables

### Backend (.env)

```env
PORT=5000

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Production

```env
NEXT_PUBLIC_API_URL=https://your-render-backend-url.onrender.com
```


## 🔒 Security Features

* JWT Authentication
* Password Hashing using Bcrypt
* Environment Variables for Sensitive Data
* Protected API Routes
* MongoDB Atlas Security
* Input Validation
* Error Handling

---

## 📈 Highlights

* Built a full-stack SaaS application using Next.js, Express.js, MongoDB, and Gemini AI.
* Implemented secure authentication with JWT and password hashing.
* Integrated Google Gemini AI for dynamic content generation.
* Designed and deployed a production-ready application.
* Developed dashboard, profile management, and content history features.
* Successfully deployed frontend and backend using Vercel and Render.

---

## 🎯 Future Enhancements

* AI Image Generation
* Content Templates Marketplace
* Team Collaboration
* PDF/DOCX Export
* Advanced Analytics Dashboard
* Subscription Plans
* Multi-language Content Generation

---

## 👨‍💻 Author

### Prateek Tiwari

GitHub:
https://github.com/prateek-p-t

LinkedIn:
https://www.linkedin.com/in/prateek-tk/

---

## ⭐ Support

If you found this project helpful, please consider giving it a star.

```bash
⭐ Star this repository
```

It helps support future development and encourages more open-source projects.
