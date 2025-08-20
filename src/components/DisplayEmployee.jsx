import React, { useEffect, useState } from 'react';
import { getEmployeesPaginated, deleteEmployee } from '../service/employeeService';
import { useNavigate } from 'react-router-dom';

const DisplayEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const[uniqueLocations, setUniqueLocations] = useState(new Set());
const [selectLocation, setSelectLocation] = useState('');
const[filteredEmployees, setFilteredEmployees] = useState([]);
const [page, setPage] = useState(0); 
const [size, setSize] = useState(5);
const [totalPages, setTotalPages] = useState(1);
const navigate = useNavigate();
  
const fetchEmployees = async (pageNum = page, pageSize = size) => {
  try {
    const response = await getEmployeesPaginated(pageNum, pageSize);
    const employeesData = response.data.content;
    setUniqueLocations(new Set(employeesData.map(emp => emp.location.toUpperCase())));
    setEmployees(employeesData); 
    setFilteredEmployees(employeesData);
    setTotalPages(response.data.totalPages);
  } catch (err) {
    alert('Failed to fetch employees');
  }
};

  useEffect(() => {
    fetchEmployees(page, size);
  }, [page, size]);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setSelectLocation(selectedLocation);
    if (selectedLocation) {
      const filtered = employees.filter(emp => emp.location.toLowerCase() === selectedLocation.toLowerCase());
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

    const handlePageChange = (newPage) => {
      setPage(newPage);
      fetchEmployees(newPage, size);
    };
  
  return (
    <>
    <h2>Employee List</h2>
    <div>
      <select onChange={handleLocationChange} value={selectLocation}>
        <option value="">Select Location</option>
        {[...uniqueLocations].map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
    </div>
     <div>
      
      
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.emplId}>
              <td>{emp.emplId}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.location}</td>
                <td>
                    <button onClick={() => handleEdit(emp.emplId)} style={{ marginRight: '10px' }}>Edit</button>
                    <button onClick={() => handleDelete(emp.emplId)}>Delete</button>  
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div>
  <button onClick={() => handlePageChange(page - 1)} disabled={page === 0}>Previous</button>
  <span> Page {page + 1} of {totalPages} </span>
  <button onClick={() => handlePageChange(page + 1)} disabled={page + 1 >= totalPages}>Next</button>
</div>
    </>
  );
};

export default DisplayEmployee;
