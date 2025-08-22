import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';

import { Button } from 'primereact/button';
        

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Card title="Welcome to Employee Management System" subTitle="Please choose an option" style={{ width: '80%', margin: '100px', textAlign: 'center' }}> 
     
      <Button onClick={() => navigate('/register')} style={{ marginRight: '10px' }}>Register Employee</Button>
      <Button onClick={() => navigate('/display')}>Display Employee</Button>
    </Card>
  );
}