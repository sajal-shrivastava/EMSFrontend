
import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployeeById, updateEmployee } from '../service/employeeService';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
     const [employeeDetails, setEmployeeDetails] = React.useState({
          emplId: '',
          firstName: '',
          lastName: '',
          location: ''
      });

     const fetchEmployees = async () => {
          try {
            const response = await getEmployeeById(id);
            setEmployeeDetails(response.data);
            console.log('Employee details fetched:', response.data);
          } catch (err) {
            alert('Failed to fetch employees');
          } 
        };

        useEffect(() => {
          fetchEmployees();
        }, [id]);
     
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
        updateEmployee(employeeDetails)
            .then(response => {
                alert('Employee updated successfully');
                navigate('/display');
            })
            .catch(error => {
                alert('There was an error updating the employee');
            });
    };
  
    return (
      <div>
        <h1>Employee Registration</h1>
        <form onSubmit={handleSubmit}> 
          <label>
            ID:
            <input value={employeeDetails.emplId} type="number" name="emplId" readOnly/>
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
          <button type="submit">Update</button>
        </form>
      </div>
    )
}