
import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../service/employeeService';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

import { Dropdown } from 'primereact/dropdown';
        

const DisplayEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]); // array of { label, value }
  const [selectLocation, setSelectLocation] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
const navigate = useNavigate();
  
  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      const employeesData = response.data;
      // Get unique locations and map to { label, value }
      const locationsArr = Array.from(new Set(employeesData.map(emp => emp.location.toUpperCase())))
        .map(loc => ({ label: loc, value: loc }));
      setUniqueLocations(locationsArr);
      setEmployees(employeesData);
      setFilteredEmployees(employeesData);
    } catch (err) {
      alert('Failed to fetch employees');
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleLocationChange = (e) => {
    const selectedLocation = e.value;
    setSelectLocation(selectedLocation);
    if (selectedLocation) {
      const filtered = employees.filter(emp => emp.location.toUpperCase() === selectedLocation);
      setFilteredEmployees(filtered);
    } else {
      setFilteredEmployees(employees);
    }
  };

  const handleDelete = (id) => {
       deleteEmployee(id)
        .then(() => {
          alert('Employee deleted successfully');
          fetchEmployees();
        })
        .catch(() => {
          alert('Failed to delete employee');
        });
    }

    const handleEdit = (id) => {
       navigate(`/edit/${id}`);
    }

  
  return (
    <Card title="Employee List" style={{ width: '80%', margin: '50px', padding: '20px' }}>
    <div style={{display:'flex', justifyContent:'flex-end', alignItems:'right', marginBottom:'20px'}}>
      <Dropdown value={selectLocation} onChange={handleLocationChange} options={uniqueLocations} optionLabel="label" optionValue="value"
      placeholder="Select a location" />
    </div>
     <div>
      <DataTable value={filteredEmployees} tableStyle={{ minWidth: '50rem' }}>
                <Column field="emplId" header="Emp ID"></Column>
                <Column field="firstName" header="First Name"></Column>
                <Column field="lastName" header="Last Name"></Column>
                <Column field="location" header="Location"></Column>
                <Column header="Action" body={(rowData) => (
                    <>
                        <Button onClick={() => handleEdit(rowData.emplId)} style={{ marginRight: '10px' }}>Edit</Button>
                        <Button onClick={() => handleDelete(rowData.emplId)}>Delete</Button>  
                    </>
                )}></Column>
      </DataTable>
    </div>
    </Card>
  );
};

export default DisplayEmployee;
