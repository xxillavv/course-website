# 🎓 CourseX

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

**CoursesX** is a modern web application built with **React + TypeScript** that allows users to browse, filter, and track online courses. It is the perfect tool for students or anyone looking to organize their learning journey.

---

## ⚡ Features

✅ **Course Catalog:** Browse a comprehensive list of courses with details (title, author, description, rating).
✅ **Search & Filter:** Easily find courses by keywords, or filter them by category and difficulty level.
✅ **Course Details:** Dedicated pages for every course featuring full descriptions and curriculum.
✅ **Favorites:** Add courses to your "Favorites" list for quick access (persisted via LocalStorage).
✅ **Responsive Design:** Fully optimized interface for both mobile devices and desktops.

---

## 🛠 Tech Stack

This project is built using modern web technologies:

- **Core:** React, TypeScript
- **Routing:** React Router DOM
- **State Management:** useContext, useState, useReducer
- **Styling:** CSS Modules / Tailwind CSS
- **Data Persistence:** LocalStorage API
- **HTTP Client:** Axios (Optional/Ready for API integration)

---

## 💻 Getting Started

Follow these steps to set up the project locally:

**1. Clone the repository:**

```
git clone [https://github.com/xxillavv/courseshub.git](https://github.com/xxillavv/courseshub.git)
cd courseshub
```

**2. Install dependencies:**

```
npm install
```

**3. Start the development server:**

```
npm run dev
```

Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal).

**📂 Project Structure:**

src/
├── 📂 assets/ # Media assets (Images, Icons)
├── 📂 components/ # Reusable UI components (Card, Header, Footer...)
├── 📂 pages/ # Application pages (Home, CourseDetail, Favorites...)
├── 📂 types/ # TypeScript interfaces and types
├── 📜 App.tsx # Main application component
├── 📜 data.ts # Static mock data for courses
├── 📜 main.tsx # Entry point
└── 📜 index.css # Global styles

**🚀 Roadmap & Future Improvements**
[ ] Connect to a real backend API for live course data

[ ] Implement user authentication and profiles

[ ] Add course ratings and user review system

[ ] Add Dark/Light theme toggle

[ ] Write Unit tests for core components

**✨ Author**
Vladyslav Paniv

GitHub: [xxillavv](https://github.com/xxillavv)
LinkedIn: [Vladyslav Paniv](https://www.linkedin.com/in/vladyslav-paniv-041674391/)
