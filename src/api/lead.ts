import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

axios.defaults.withCredentials = true;

export const getLeads = (data: any) => axios.post(`${API_URL}/api/v1/leads`, data);
