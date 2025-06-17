// ✅ Limpieza, modularidad y mejores prácticas
import React from "react";
import { Link } from "react-router-dom";
import { useRegistroVoluntario } from "../hooks/useRegistroVoluntario";

function RegistroVoluntario() {
  const {
    formData,
    comunas,
    showComuna,
    isLoading,
    updateField,
    handleSubmit,
    generalError,
    fileName,
    handleFileChange,
  } = useRegistroVoluntario();

  const onSubmit = async (e) => {
    const success = await handleSubmit(e);
    if (success) {
      console.log("Registro exitoso");
      // window.location.href = "/verificacionsms";
    } else {
      alert("Error al registrar. Intenta nuevamente.");
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container">
          <h2 className="auth-title">Registro de Voluntario</h2>
          <p className="auth-subtitle">
            Crea tu cuenta para ofrecer acompañamiento
          </p>

          <form className="auth-form" onSubmit={onSubmit} autoComplete="off">
            {generalError && (
              <div className="form-general-error">{generalError}</div>
            )}

            {/* Campos estándar */}
            {[
              { id: "nombre", label: "Nombre Completo", type: "text" },
              { id: "telefono", label: "Teléfono", type: "tel", placeholder: "9 1234 5678" },
              { id: "edad", label: "Edad", type: "number", placeholder: "Ingresa tu edad" },
            ].map(({ id, label, type, placeholder }) => (
              <div className="form-group" key={id}>
                <label htmlFor={id}>{label}</label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder || ""}
                  value={formData[id]}
                  onChange={(e) => updateField(id, e.target.value)}
                  required
                />
              </div>
            ))}

            {/* Región */}
            <div className="form-group">
              <label htmlFor="region">Región</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={(e) => updateField("region", e.target.value)}
                required
              >
                <option value="">Selecciona tu región</option>
                {["arica-y-parinacota",
                 "tarapaca", 
                 "antofagasta", 
                 "atacama", 
                 "coquimbo", 
                 "valparaiso", 
                 "ohiggins",
                 "maule", 
                 "nuble", 
                 "biobio", 
                 "araucania", 
                 "los-rios", 
                 "los-lagos", 
                 "aysen", 
                 "magallanes", 
                 "metropolitana"].map((region) => (
                  <option key={region} value={region}>{region.replace(/-/g, " ")}</option>
                ))}
              </select>
            </div>

            {/* Comuna */}
            {showComuna && (
              <div className="form-group">
                <label htmlFor="comuna">Comuna</label>
                <select
                  id="comuna"
                  name="comuna"
                  value={formData.comuna}
                  onChange={(e) => updateField("comuna", e.target.value)}
                  required
                >
                  <option value="">Selecciona tu comuna</option>
                  {comunas.map((comuna) => (
                    <option key={comuna} value={comuna}>{comuna}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Documento */}
            <div className="form-group">
              <label htmlFor="documento">Subir Documento (DNI/RUT)</label>
              <div className="file-upload">
                <input
                  type="file"
                  id="documento"
                  name="documento"
                  accept="image/*"
                  required
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label htmlFor="documento" className="file-upload-label" tabIndex={0}>
                  <span className="file-upload-icon" role="img" aria-label="Cámara">📷</span>
                  <span className="file-upload-text">Seleccionar o tomar foto</span>
                </label>
                <div className="file-name">{fileName}</div>
              </div>
              <small className="form-hint">Sube una foto clara de tu documento de identidad</small>
            </div>

            {/* Términos */}
            <div className="form-group form-checkbox">
              <input type="checkbox" id="terminos" name="terminos" required />
              <label htmlFor="terminos">
                Acepto los <Link to="/terminosYCondiciones">Términos y Condiciones</Link> y la <Link to="/politicasDePrivacidad">Política de Privacidad</Link>
              </label>
            </div>

            {/* Botón */}
            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              <Link to="/verificacionSMSbene" style={{color:'white'}}>{isLoading ? "Registrando..." : "Registrarme"}</Link>
            </button>
          </form>

          <div className="auth-footer">
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroVoluntario;
