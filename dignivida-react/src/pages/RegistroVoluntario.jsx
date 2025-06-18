import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
    hasError,
    getErrorMessage,
  } = useRegistroVoluntario();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const success = await handleSubmit(e);
    if (success) {
      // Guardar el nombre completo en localStorage para usarlo luego
      if (formData.nombre) {
        localStorage.setItem("nombreUsuario", formData.nombre);
      }
      navigate("/verificacionsms");
    } else {
      alert("Error al registrar. Intenta nuevamente.");
      console.error("❌ Error al registrar voluntario:");
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container">
          <h2 className="auth-title">Registro de Voluntario</h2>
          <p className="auth-subtitle">Crea tu cuenta para ofrecer acompañamiento</p>

          <form className="auth-form" onSubmit={onSubmit} autoComplete="off">
            {generalError && <div className="form-general-error">{generalError}</div>}

            {/* Campos básicos */}
            {[
              { id: "nombre", label: "Nombre Completo", type: "text" },
              { id: "email", label: "Correo Electrónico", type: "email" },
              { id: "password", label: "Contraseña", type: "password" },
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
                  value={formData[id] || ""}
                  onChange={(e) => updateField(id, e.target.value)}
                  required
                />
                {hasError(id) && <span className="form-error">{getErrorMessage(id)}</span>}
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
                {[
                  "arica-y-parinacota", "tarapaca", "antofagasta", "atacama", "coquimbo", "valparaiso",
                  "ohiggins", "maule", "nuble", "biobio", "araucania", "los-rios", "los-lagos", "aysen",
                  "magallanes", "metropolitana",
                ].map((region) => (
                  <option key={region} value={region}>
                    {region.replace(/-/g, " ")}
                  </option>
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
                    <option key={comuna} value={comuna}>
                      {comuna}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Documento */}
            <div className="form-group">
              <label htmlFor="documento" className="file-upload-label" tabIndex={0}>
                <span className="file-upload-icon" role="img" aria-label="Cámara">📷</span>
                <span>{fileName}</span>
              </label>
              <input
                type="file"
                id="documento"
                name="documento"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <small className="form-hint">Sube una foto clara de tu documento</small>
            </div>


            {/* Términos */}
            <div className="form-group form-checkbox">
              <label htmlFor="terminos" style={{marginBottom: 0, cursor: "pointer"}}>
                <input
                  type="checkbox"
                  id="terminos"
                  name="terminos"
                  checked={formData.terminos}
                  onChange={(e) => updateField("terminos", e.target.checked)}
                  required
                  style={{marginRight: "0.5em"}}
                />
                Acepto los <Link to='/terminosYCondiciones'>Términos y Condiciones</Link> y la <Link to='/politicasDePrivacidad'>Política de Privacidad</Link>
              </label>
              {hasError("terminos") && (
                <span style={{ color: "red", display: "block" }}>{getErrorMessage("terminos")}</span>
              )}
            </div>

            {/* Botón de envío */}
            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Registrarme"}
            </button>
          </form>

          <div className="auth-footer">
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroVoluntario;
