// hooks/useRegistroVoluntario.js
import { useState, useEffect, useCallback } from "react";
import { useRegionComuna } from "./useRegionComuna";
// import { registrarVoluntario } from "../services/voluntarioService";

export function useRegistroVoluntario() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    edad: "",
    region: "",
    comuna: "",
    documento: null,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");

  const { comunas, showComuna } = useRegionComuna(formData.region);

  const updateField = useCallback((field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }, [errors]);

  const validateForm = () => {
    if (
      !formData.nombre ||
      !formData.telefono ||
      !formData.edad ||
      !formData.region ||
      (showComuna && !formData.comuna) ||
      !formData.documento
    ) {
      setGeneralError("Debes completar todos los campos obligatorios.");
      return false;
    }
    setGeneralError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return false;

    setIsLoading(true);
    try {
      const form = new FormData();
      for (const key in formData) {
        form.append(key, formData[key]);
      }

      await registrarVoluntario(form);
      return true;
    } catch (error) {
      console.error("❌ Error al registrar voluntario:", error);
      setGeneralError("Hubo un error al registrar. Intenta nuevamente.");
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    errors,
    comunas,
    showComuna,
    isLoading,
    generalError,
    updateField,
    handleSubmit,
    setGeneralError,
  };
}
