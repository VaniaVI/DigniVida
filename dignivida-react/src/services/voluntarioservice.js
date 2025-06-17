import api from './api';

export const registrarVoluntario = async (formData) => {
  const response = await api.post('/voluntarios', formData, {
    headers: {
      'Content-Type': 'multipart/form-data' // 👈 Muy importante si estás enviando un archivo
    }
  });
  return response.data;
};
export const obtenerVoluntarios = async () => {
  const response = await api.get('/voluntarios');
  return response.data;
};