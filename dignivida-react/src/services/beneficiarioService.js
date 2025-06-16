import api from './api';

export const registrarBeneficiario = async (datos) => {
  const response = await api.post('/beneficiarios', datos);
  return response.data;
};

export const obtenerBeneficiarios = async () => {
  const response = await api.get('/beneficiarios');
  return response.data;
};
