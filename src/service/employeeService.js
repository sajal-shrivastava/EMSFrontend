
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/employee';


export const createEmployee = async (employeeData) => {
  return axios.post(BASE_URL, employeeData);
};

export const getEmployees = async () => {
  return axios.get(BASE_URL);
};

export const getEmployeeById = async (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

export const updateEmployee = async (employeeData) => {
  return axios.put(BASE_URL, employeeData);
};

export const deleteEmployee = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
