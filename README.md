# Employee Management System Frontend

This is a React-based frontend for the Employee Management System (EMS). It allows users to register, display, edit, and manage employee records. The app communicates with a backend API for CRUD operations.

## Features
- Register new employees
- Display all employees
- Edit employee details
- Delete employees
- Navigation using React Router

## Tech Stack
- React (with Vite)
- React Router DOM
- Axios
- JavaScript (ES6+)

## Setup & Run
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## API Configuration
- The frontend expects the backend API to be running at `http://localhost:8080/api/employee`.
- Update the base URL in `src/service/employeeService.js` if your backend runs elsewhere.

## Available Scripts
- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run preview` — Preview the production build

