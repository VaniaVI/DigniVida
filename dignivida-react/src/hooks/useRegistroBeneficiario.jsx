import { useState, useEffect, useCallback } from "react";
import { useRegionComuna } from "./useRegionComuna"; // 👈 importar hook separado
import { registrarBeneficiario } from '../services/beneficiarioService';


export function useRegistroBeneficiario() {
  const [formData, setFormData] = useState({
    nombre: "",
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

  // 🧠 Hook que maneja comunas y lógica de región
  const { comunas, showComuna } = useRegionComuna(formData.region);

  // 👉 Actualizar campos del formulario
  const updateField = useCallback(
    (field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }));

      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    },
    [errors]
  );

  // ✅ Validaciones
  const validateForm = useCallback(() => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es requerido";
    } else if (!/^\d{9}$/.test(formData.telefono.replace(/\s/g, ""))) {
      newErrors.telefono = "El número debe tener exactamente 9 dígitos";
    }

    const edad = Number.parseInt(formData.edad);
    if (!formData.edad) {
      newErrors.edad = "La edad es requerida";
    } else if (edad < 60) {
      newErrors.edad = "Debes tener al menos 60 años";
    }

    if (!formData.sexo) newErrors.sexo = "Selecciona tu género";
    if (!formData.discapacidad) newErrors.discapacidad = "Este campo es requerido";

    if (formData.discapacidad === "Y" && !formData.descripcionDiscapacidad.trim()) {
      newErrors.descripcionDiscapacidad = "Describe tu condición especial";
    }

    if (!formData.region) newErrors.region = "Selecciona tu región";
    if (!formData.comuna) newErrors.comuna = "Selecciona tu comuna";

    if (!formData.terminos) {
      newErrors.terminos = "Debes aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // 🔁 Envío del formulario
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!validateForm()) return false;

      setIsLoading(true);
      try {
        const datos = {
          ...formData,
          rol: "beneficiario", // si tu backend espera un rol
        };

        await registrarBeneficiario(datos); // llamada a backend
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

  // 🧠 Mostrar campo descripción discapacidad
  useEffect(() => {
    setShowDescripcion(formData.discapacidad === "Y");
    if (formData.discapacidad !== "Y") {
      setFormData((prev) => ({ ...prev, descripcionDiscapacidad: "" }));
    }
  }, [formData.discapacidad]);

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