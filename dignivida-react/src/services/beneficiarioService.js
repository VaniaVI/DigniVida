import api from './api';

export const registrarBeneficiario = async (datos) => {
  try {
    const response = await api.post("/beneficiarios", datos);
    return response.data;
  } catch (error) {
    console.error("❌ Error al registrar beneficiario:", error.response?.data || error.message);
    throw error;
  }
};


export const obtenerBeneficiarios = async () => {
  const response = await api.get('/beneficiarios');
  return response.data;
};
