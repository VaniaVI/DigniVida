import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api', // puerto donde corre tu backend
  withCredentials: false // cambia a true si usas cookies en login
});

// Interceptor para token (para login protegido más adelante)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
