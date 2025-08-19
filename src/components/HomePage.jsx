import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Employee Management System</h1>
      <p>Please choose an option:</p>
      <button onClick={() => navigate('/register')} style={{ marginRight: '10px' }}>Register Employee</button>
      <button onClick={() => navigate('/display')}>Display Employee</button>
    </>
  );
}