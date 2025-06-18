import { useState, useEffect, useCallback } from "react";
import { useRegionComuna } from "./useRegionComuna";
import { registrarBeneficiario } from "../services/beneficiarioService";

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

  // ✅ Actualizar campos
  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }, [errors]);

  // ✅ Validaciones
  const validateForm = useCallback(() => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Correo inválido";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Debe tener mayúscula, minúscula, número y carácter especial";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{9}$/.test(formData.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "Debe tener 9 dígitos exactos";
    }

    const edad = Number(formData.edad);
    if (!formData.edad) {
      newErrors.edad = "La edad es obligatoria";
    } else if (edad < 60) {
      newErrors.edad = "Debes tener al menos 60 años";
    }

    if (!formData.sexo) newErrors.sexo = "Selecciona tu género";
    if (!formData.discapacidad) newErrors.discapacidad = "Este campo es obligatorio";
    if (formData.discapacidad === "Y" && !formData.descripcionDiscapacidad.trim()) {
      newErrors.descripcionDiscapacidad = "Describe tu condición";
    }
    if (!formData.region) newErrors.region = "Selecciona tu región";
    if (showComuna && !formData.comuna) newErrors.comuna = "Selecciona tu comuna";
    if (!formData.terminos) newErrors.terminos = "Debes aceptar los términos";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, showComuna]);

  // ✅ Mostrar campo "¿Cuál?" si tiene discapacidad
  useEffect(() => {
    setShowDescripcion(formData.discapacidad === "Y");
    if (formData.discapacidad !== "Y") {
      setFormData((prev) => ({ ...prev, descripcionDiscapacidad: "" }));
    }
  }, [formData.discapacidad]);

// En tu useRegistroBeneficiario
const handleSubmit = useCallback(
  async (e) => {
    e.preventDefault();

    if (!validateForm()) return false;

    setIsLoading(true);
    try {
      const response = await registrarBeneficiario(formData);
      console.log("✅ Respuesta del backend:", response);
      return true;
    } catch (error) {
      console.error("❌ Error detallado:", error);

      // Mostrar el error exacto si lo hay
      if (error.response && error.response.data && error.response.data.error) {
        setGeneralError(error.response.data.error); // Esto muestra el mensaje del backend
      } else {
        setGeneralError("Error al registrar. Intenta nuevamente.");
      }

      return false;
    } finally {
      setIsLoading(false);
    }
  },
  [formData, validateForm]
);



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
