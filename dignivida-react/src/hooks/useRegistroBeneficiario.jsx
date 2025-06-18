// ✅ 1. useRegistroBeneficiario.jsx (hook)
import { useState, useEffect, useCallback, useContext } from "react";
import { useRegionComuna } from "./useRegionComuna";
import { registrarBeneficiario } from "../services/beneficiarioService";
import { AuthContext } from "../context/AuthContext";


export function useRegistroBeneficiario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    edad: "",
    sexo: "",
    discapacidad: "",
    descripcionDiscapacidad: "",
    region: "",
    comuna: "",
    terminos: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showDescripcion, setShowDescripcion] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const { comunas, showComuna } = useRegionComuna(formData.region);
  const { login } = useContext(AuthContext);


  const updateField = useCallback((field, value) => {
    if (field === "edad") value = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  }, [errors]);


  const validateForm = useCallback(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.nombre || formData.nombre.trim().length < 3)
      newErrors.nombre = "El nombre debe tener al menos 3 letras";
    if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Correo inválido";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    const telefono = formData.telefono.replace(/\s/g, "");
    if (!telefono) newErrors.telefono = "El teléfono es obligatorio";
    else if (!/^\d{9}$/.test(telefono)) newErrors.telefono = "Debe tener 9 dígitos";
    const edad = Number(formData.edad);
    if (!formData.edad || isNaN(edad)) newErrors.edad = "La edad es obligatoria";
    else if (edad < 60) newErrors.edad = "Debes tener al menos 60 años";
    if (!formData.sexo) newErrors.sexo = "Selecciona tu género";
    if (!formData.discapacidad) newErrors.discapacidad = "Este campo es obligatorio";
    if (formData.discapacidad === "Y" && !formData.descripcionDiscapacidad.trim())
      newErrors.descripcionDiscapacidad = "Describe tu condición";
    if (!formData.region) newErrors.region = "Selecciona tu región";
    if (showComuna && !formData.comuna) newErrors.comuna = "Selecciona tu comuna";
    if (!formData.terminos) newErrors.terminos = "Debes aceptar los términos";
    setErrors(newErrors);
    console.log("❗ Errores detectados:", newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, showComuna]);

  useEffect(() => {
    setShowDescripcion(formData.discapacidad === "Y");
    if (formData.discapacidad !== "Y") {
      setFormData((prev) => ({ ...prev, descripcionDiscapacidad: "" }));
    }
  }, [formData.discapacidad]);


const handleSubmit = useCallback(async (e) => {
  e.preventDefault();
  console.log("🧪 Inicia handleSubmit");
  console.log("🧾 Datos antes de validar:", formData);

  if (!validateForm()) {
    console.log("❌ Validación falló");
    return false;
  }

  const cleanFormData = {
    ...formData,
    telefono: formData.telefono.replace(/\s/g, ""),
    edad: parseInt(formData.edad, 10),
  };

  setIsLoading(true);
  try {
    const response = await registrarBeneficiario(cleanFormData);
    console.log("✅ Respuesta backend:", response);

    const rol = await login(cleanFormData.email, cleanFormData.password);
    console.log("✅ Logueado como:", rol);

    return true;
  } catch (error) {
    console.error("❌ Error al registrar:", error);
    setGeneralError(error.response?.data?.error || "Error al registrar");
    return false;
  } finally {
    setIsLoading(false);
  }
}, [formData, validateForm, login]);
  


  return {
    formData,
    errors,
    comunas,
    isLoading,
    generalError,
    showDescripcion,
    showComuna,
    updateField,
    handleSubmit,
    validateForm,
    getErrorMessage: (field) => errors[field] || "",
    hasError: (field) => !!errors[field],
  };
}
