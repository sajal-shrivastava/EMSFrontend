import React from 'react';
import { createEmployee } from '../service/employeeService';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
        

export default function EmployeeRegistration() {
    const [employeeDetails, setEmployeeDetails] = React.useState({
        emplId: '',
        firstName: '',
        lastName: '',
        location: ''
    });
    const handleChange = (e) => {
      console.log('Input changed:', e.target.name, e.target.value);
        const [name, value] = [e.target.name, e.target.value];
        setEmployeeDetails({
            ...employeeDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createEmployee(employeeDetails)
            .then(response => {
                alert('Employee created successfully:');
                setEmployeeDetails({
            emplId: '',
            firstName: '',
            lastName: '',
            location: ''
        });
            })
            .catch(error => {
              if(error.response && error.response.status === 400) {
                alert('Employee with this ID already exists');
              } else {    
                alert('There was an error creating the employee');
              }
            });
    };

    const handleBack = () => {
        window.history.back();
    };

  return (
    <Card title="Employee Registration" style={{ width: '50%', margin: '0 auto', marginTop: '50px', padding: '20px' }}>
      <form onSubmit={handleSubmit}> 
          <InputNumber name="emplId" value={employeeDetails.emplId} onValueChange={handleChange} placeholder="Enter Employee ID" className="w-full"  style={{marginBottom : '25px'}}/>
          <InputText name="firstName" value={employeeDetails.firstName}  onChange={handleChange} placeholder="Enter First Name" className="w-full" style={{marginBottom : '25px'}} />
          <InputText name="lastName"  value={employeeDetails.lastName} onChange={handleChange} placeholder="Enter Last Name" className="w-full" style={{marginBottom : '25px'}}/>
          <InputText name="location"  value={employeeDetails.location} onChange={handleChange} placeholder="Enter Location" className="w-full" style={{marginBottom : '25px'}}/>
        <button type="submit" className="p-button p-component p-mb-2" style={{marginBottom : '25px'}}>Register</button>
      </form>
      <button onClick={handleBack} className="p-button p-button-secondary ">Back to home</button>
    </Card>
  );
}

