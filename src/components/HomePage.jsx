import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/register')}>Register Employee</button>
      <button onClick={() => navigate('/display')}>Display Employee</button>
    </>
  );
}