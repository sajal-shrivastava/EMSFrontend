import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/employee';


export const createEmployee = async (employeeData) => {
  return axios.post(BASE_URL, employeeData);
};

export const getEmployees = async () => {
  return axios.get(BASE_URL);
};

export const getEmployeesPaginated = async (page, size, location) => {
  console.log(`Fetching employees for page: ${page}, size: ${size}, location: ${location}`);
  if (location !== undefined && location !== '') {
    return axios.get(`${BASE_URL}/page?page=${page}&size=${size}&location=${location}`);
  }
  return axios.get(`${BASE_URL}/page?page=${page}&size=${size}`);
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

export const getUniqueLocations = async () => {
  return axios.get(`${BASE_URL}/locations`);
}
