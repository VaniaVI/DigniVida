import api from './api';

export async function registrarBeneficiario(data) {
  return await api.post("/beneficiarios", data); 
}


export const obtenerBeneficiarios = async () => {
  const response = await api.get('/beneficiarios');
  return response.data;
};
