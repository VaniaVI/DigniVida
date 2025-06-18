import api from './api';

export const registrarBeneficiario = (datos) => {
  return api.post("/beneficiarios", datos);
};

export const obtenerBeneficiarios = async () => {
  const response = await api.get('/beneficiarios');
  return response.data;
};
