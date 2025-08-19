import React from 'react';
import { createEmployee } from '../service/employeeService';

export default function EmployeeRegistration() {
    const [employeeDetails, setEmployeeDetails] = React.useState({
        emplId: '',
        firstName: '',
        lastName: '',
        location: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeDetails({
            ...employeeDetails,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Employee Registered:', employeeDetails);
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
    <div>
      <h1>Employee Registration</h1>
      <form onSubmit={handleSubmit}> 
        <label>
          ID:
          <input onChange = {handleChange} value={employeeDetails.emplId} type="number" name="emplId" />
        </label>
        <br />
        <label>
          First Name:
          <input onChange = {handleChange} value={employeeDetails.firstName}  type="text" name="firstName" />
        </label>
        <br />
        <label>
         Last Name:
          <input onChange = {handleChange} value={employeeDetails.lastName}  type="text" name="lastName" />
        </label>
        <br />
        <label>
          Location
          <input  onChange = {handleChange} value={employeeDetails.location} type="text" name="location" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <button onClick={handleBack}>Back to home</button>
    </div>
  );
}

