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
<<<<<<< HEAD
            )}

            {/* Nombre */}
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={(e) => updateField("nombre", e.target.value)}
                required
                aria-describedby={hasError("nombre") ? "nombre-error" : undefined}
                autoComplete="name"
              />
              {hasError("nombre") && (
                <span
                  id="nombre-error"
                  className="form-error"
                >
                  {getErrorMessage("nombre")}
                </span>
              )}
            </div>

            {/* Correo electrónico */}
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={(e) => updateField("email", e.target.value)}
                required
                aria-describedby={hasError("email") ? "email-error" : undefined}
                autoComplete="email"
              />
              {hasError("email") && (
                <span
                  id="email-error"
                  className="form-error"
                >
                  {getErrorMessage("email")}
                </span>
              )}
            </div>

            {/* Contraseña */}
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password || ""}
                onChange={(e) => updateField("password", e.target.value)}
                required
                aria-describedby={hasError("password") ? "password-error" : undefined}
                autoComplete="new-password"
              />
              {hasError("password") && (
                <span
                  id="password-error"
                  className="form-error"
                >
                  {getErrorMessage("password")}
                </span>
              )}
            </div>

            {/* Teléfono */}
            <div className="form-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                placeholder="9 1234 5678"
                value={formData.telefono}
                onChange={(e) => updateField("telefono", e.target.value)}
                pattern="^9\d{8}$"
                title="Debe tener el formato 9XXXXXXXX"
                required
                aria-describedby={hasError("telefono") ? "telefono-error" : undefined}
                autoComplete="tel"
              />
              {hasError("telefono") && (
                <span
                  id="telefono-error"
                  className="form-error"
                >
                  {getErrorMessage("telefono")}
                </span>
              )}
            </div>

            {/* Edad */}
            <div className="form-group">
              <label htmlFor="edad2">Edad</label>
              <input
                type="number"
                id="edad2"
                name="edad2"
                placeholder="Ingresa tu edad"
                value={formData.edad2}
                onChange={(e) => updateField("edad2", e.target.value)}
                required
                min="18"
                aria-describedby={hasError("edad2") ? "edad2-error" : undefined}
                autoComplete="off"
              />
              {hasError("edad2") && (
                <span
                  id="edad2-error"
                  className="form-error"
                >
                  {getErrorMessage("edad2")}
                </span>
              )}
            </div>
=======
            ))}
>>>>>>> feature/api

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
<<<<<<< HEAD
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


            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              <Link to="/verificacionsms" style={{color:'white'}}>{isLoading ? "Registrando..." : "Registrarme"}</Link>
=======
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                checked={formData.terminos}
                onChange={(e) => updateField("terminos", e.target.checked)}
                required
              />
              <label htmlFor="terminos">
                Acepto los <Link to="/terminosYCondiciones">Términos y Condiciones</Link> y la <Link to="/politicasDePrivacidad">Política de Privacidad</Link>
              </label>
              {hasError("terminos") && (
                <span className="form-error">{getErrorMessage("terminos")}</span>
              )}
            </div>

            {/* Botón de envío */}
            <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
              {isLoading ? "Registrando..." : "Registrarme"}
>>>>>>> feature/api
            </button>
          </form>

          <div className="auth-footer">
<<<<<<< HEAD
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
            </p>
=======
            <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
>>>>>>> feature/api
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroVoluntario;
