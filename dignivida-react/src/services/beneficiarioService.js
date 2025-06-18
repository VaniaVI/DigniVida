import api from './api';

export const registrarBeneficiario = async (datos) => {
  return await api.post("/beneficiarios", datos); // sin FormData
};


export const obtenerBeneficiarios = async () => {
  const response = await api.get('/beneficiarios');
  return response.data;
};
