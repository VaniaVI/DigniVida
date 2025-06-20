    import { useState, useCallback,  useContext } from "react";
    import { useRegionComuna } from "./useRegionComuna";
    import { registrarVoluntario } from "../services/voluntarioService";
    import { AuthContext } from "../context/AuthContext";

    export function useRegistroVoluntario() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        telefono: "",
        edad: "",
        region: "",
        comuna: "",
        documento: null,
        terminos: false,
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [generalError, setGeneralError] = useState("");
    const { comunas, showComuna } = useRegionComuna(formData.region);
    const { login } = useContext(AuthContext);

    const updateField = useCallback((field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
        }
    }, [errors]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";
        if (!formData.email) newErrors.email = "El correo es obligatorio";
        if (!formData.password) newErrors.password = "La contraseña es obligatoria";
        if (!formData.telefono) newErrors.telefono = "El teléfono es obligatorio";
        if (!formData.edad){ newErrors.edad = "La edad es obligatoria";
            } else if (formData.edad < 18) {
            newErrors.formData.edad = "Debes tener al menos 18 años";
            }
        
        if (!formData.region) newErrors.region = "La región es obligatoria";
        if (showComuna && !formData.comuna) newErrors.comuna = "La comuna es obligatoria";
        if (!formData.documento) newErrors.documento = "Debes subir un documento";
        if (!formData.terminos) newErrors.terminos = "Debes aceptar los términos";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) {
        setGeneralError("Por favor corrige los errores antes de continuar");
        return false;
        }
        setGeneralError("");
        return true;
    };

    const [fileName, setFileName] = useState("Ningún archivo seleccionado");

    const handleFileChange = (e) => {
      if (e.target.files.length > 0) {
        setFileName(e.target.files[0].name);
        updateField("documento", e.target.files[0]);
      } else {
        setFileName("Ningún archivo seleccionado");
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("➡️ Entra al handleSubmit");
    
      if (!validateForm()) return false;
    
      setIsLoading(true);
      try {
        const form = new FormData();
        for (const key in formData) {
          form.append(key, formData[key]);
        }
    
        await registrarVoluntario(form); // ✅ Registro exitoso
    
        // 🔐 Login automático (con email y password)
        const rol = await login(formData.email, formData.password);
        console.log("🔐 Login exitoso, rol:", rol);
    
        return true;
      } catch (error) {
        console.error("❌ Error al registrar voluntario:", error?.response?.data || error.message || error);
        setGeneralError("Error al registrar. Intenta nuevamente.");
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
        fileName,
        handleFileChange,
        setGeneralError,
        getErrorMessage: (field) => errors[field] || "",
        hasError: (field) => !!errors[field],
    };
    
}