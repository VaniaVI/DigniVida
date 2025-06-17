import { useState } from "react";

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
  const [comunas, setComunas] = useState([]);
  const [showDescripcion, setShowDescripcion] = useState(false);
  const [showComuna, setShowComuna] = useState(false);

  function updateField(field, value) {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    if (field === "discapacidad") setShowDescripcion(value === "Y");
    if (field === "region") setShowComuna(value !== "");
  }

  function validate() {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }

    // Validación de email
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El correo electrónico debe ser válido y contener un @";
    }

    // Validación de password
    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(formData.password)
    ) {
      newErrors.password =
        "La contraseña debe tener al menos 8 caracteres, incluyendo mayúscula, minúscula, número y un carácter especial";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    }

    if (!formData.edad) {
      newErrors.edad = "La edad es obligatoria";
    } else if (parseInt(formData.edad, 10) < 60) {
      newErrors.edad = "Debes tener al menos 60 años";
    }

    if (!formData.sexo) {
      newErrors.sexo = "El género es obligatorio";
    }

    if (!formData.discapacidad) {
      newErrors.discapacidad = "Este campo es obligatorio";
    }

    if (formData.discapacidad === "Y" && !formData.descripcionDiscapacidad.trim()) {
      newErrors.descripcionDiscapacidad = "Por favor describe tu condición";
    }

    if (!formData.region) {
      newErrors.region = "La región es obligatoria";
    }

    if (showComuna && !formData.comuna) {
      newErrors.comuna = "La comuna es obligatoria";
    }

    if (!formData.terminos) {
      newErrors.terminos = "Debes aceptar los términos y condiciones";
    }

    return newErrors;
  }

  function getErrorMessage(field) {
    return errors[field] || "";
  }

  function hasError(field) {
    return !!errors[field];
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return false;
    }

    setIsLoading(true);
    // Simulación de envío (reemplaza por tu lógica real)
    await new Promise(res => setTimeout(res, 1000));
    setIsLoading(false);
    return true;
  }

  return {
    formData,
    comunas,
    isLoading,
    showDescripcion,
    showComuna,
    updateField,
    handleSubmit,
    getErrorMessage,
    hasError,
  };
}
