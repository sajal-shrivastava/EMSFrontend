import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import EmployeeRegistration from './components/EmployeRegistration';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import EditEmployeeComponent from './components/EditEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<EmployeeRegistration />} />
       <Route path="/display" element={<DisplayEmployee />} />
       <Route path="/edit/:id" element={<EditEmployee />} />
    </Routes>
  );
}

export default App;
