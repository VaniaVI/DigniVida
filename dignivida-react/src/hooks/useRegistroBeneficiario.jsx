import { useState, useEffect, useCallback } from "react";
import { useRegionComuna } from "./useRegionComuna"; // Hook separado para regiones y comunas

export function useRegistroBeneficiario() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    edad: "",
    edad2: "",
    sexo: "",
    discapacidad: "",
    descripcionDiscapacidad: "",
    region: "",
    comuna: "",
    terminos: false,
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showDescripcion, setShowDescripcion] = useState(false);

  // Hook que maneja comunas y lógica de región
  const { comunas, showComuna } = useRegionComuna(formData.region);

  // Actualizar campos del formulario
  const updateField = useCallback(
    (field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    },
    [errors]
  );

  // Validaciones
  const validateForm = useCallback(() => {
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
    } else if (!/^\d{9}$/.test(formData.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "El número debe tener exactamente 9 dígitos";
    }

    // Edad principal
    const edad = Number.parseInt(formData.edad, 10);
    if (!formData.edad) {
      newErrors.edad = "La edad es obligatoria";
    } else if (edad < 60) {
      newErrors.edad = "Debes tener al menos 60 años";
    }

    // Edad2 adicional
    const edad2 = Number.parseInt(formData.edad2, 10);
    if (!formData.edad2) {
      newErrors.edad2 = "La edad es obligatoria";
    } else if (edad2 < 18) {
      newErrors.edad2 = "Debes tener al menos 60 años";
    }

    if (!formData.sexo) newErrors.sexo = "Selecciona tu género";
    if (!formData.discapacidad) newErrors.discapacidad = "Este campo es obligatorio";

    if (formData.discapacidad === "Y" && !formData.descripcionDiscapacidad.trim()) {
      newErrors.descripcionDiscapacidad = "Por favor describe tu condición";
    }

    if (!formData.region) newErrors.region = "Selecciona tu región";
    if (showComuna && !formData.comuna) newErrors.comuna = "Selecciona tu comuna";

    if (!formData.terminos) {
      newErrors.terminos = "Debes aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, showComuna]);

  // Mostrar campo descripción discapacidad
  useEffect(() => {
    setShowDescripcion(formData.discapacidad === "Y");
    if (formData.discapacidad !== "Y") {
      setFormData((prev) => ({ ...prev, descripcionDiscapacidad: "" }));
    }
  }, [formData.discapacidad]);

  // Envío del formulario
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) return false;

      setIsLoading(true);
      try {
        // Aquí iría tu lógica de envío, por ejemplo:
        // await registrarBeneficiario(formData);
        return true;
      } catch (error) {
        console.error("❌ Error al registrar beneficiario:", error);
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
    showDescripcion,
    showComuna,
    updateField,
    handleSubmit,
    validateForm,
    getErrorMessage: (field) => errors[field] || "",
    hasError: (field) => !!errors[field],
  };
}
