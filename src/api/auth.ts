import axios from 'axios';

type RegisterUser = {
  fullName: string;
  email: string;
  password: string;
};

type LoginUser = {
  email: string;
  password: string;
};

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export const registerUser = (data: RegisterUser) => axios.post(`${API_URL}/api/v1/users/register`, data);

export const loginUser = (data:LoginUser) => axios.post(`${API_URL}/api/v1/users/login`, data);

export const logoutUser = () => axios.post(`${API_URL}/api/v1/users/logout`);

export const getCurrentUser = () => 
  axios.get(`${API_URL}/api/v1/users/current-user`, { withCredentials: true });