import React from "react";
import { Link } from "react-router-dom";
import { useRegistroBeneficiario } from "../hooks/useRegistroBeneficiario";

function RegistroVoluntario() {
  const {
    formData,
    comunas,
    showComuna,
    isLoading,
    updateField,
    handleSubmit,
    getErrorMessage,
    hasError,
  } = useRegistroBeneficiario();

  const [fileName, setFileName] = React.useState("Ningún archivo seleccionado");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [generalError, setGeneralError] = React.useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      updateField("documento", e.target.files[0]);
    } else {
      setFileName("Ningún archivo seleccionado");
    }
  };

  const validateAllFields = () => {
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.password ||
      !formData.telefono ||
      !formData.edad ||
      !formData.region ||
      (showComuna && !formData.comuna) ||
      !formData.documento ||
      !document.getElementById("terminos").checked
    ) {
      setGeneralError("Debes completar todos los campos obligatorios antes de continuar.");
      return false;
    }
    setGeneralError("");
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateAllFields()) {
      return;
    }
    setIsSubmitting(true);
    const success = await handleSubmit(e);
    setIsSubmitting(false);
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
              <div className="form-general-error">
                {generalError}
              </div>
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
              <label htmlFor="edad">Edad</label>
              <input
                type="number"
                id="edad"
                name="edad"
                placeholder="Ingresa tu edad"
                value={formData.edad}
                onChange={(e) => updateField("edad", e.target.value)}
                required
                min="60"
                aria-describedby={hasError("edad") ? "edad-error" : undefined}
                autoComplete="off"
              />
              {hasError("edad") && (
                <span
                  id="edad-error"
                  className="form-error"
                >
                  {getErrorMessage("edad")}
                </span>
              )}
            </div>

            {/* Región */}
            <div className="form-group">
              <label htmlFor="region">Región</label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={(e) => updateField("region", e.target.value)}
                required
                aria-describedby={hasError("region") ? "region-error" : undefined}
              >
                <option value="">Selecciona tu región</option>
                <option value="arica-y-parinacota">Arica y Parinacota</option>
                <option value="tarapaca">Tarapacá</option>
                <option value="antofagasta">Antofagasta</option>
                <option value="atacama">Atacama</option>
                <option value="coquimbo">Coquimbo</option>
                <option value="valparaiso">Valparaíso</option>
                <option value="ohiggins">Libertador Bernardo O'Higgins</option>
                <option value="maule">Maule</option>
                <option value="nuble">Ñuble</option>
                <option value="biobio">Biobío</option>
                <option value="araucania">La Araucanía</option>
                <option value="los-rios">Los Ríos</option>
                <option value="los-lagos">Los Lagos</option>
                <option value="aysen">Aysén</option>
                <option value="magallanes">Magallanes</option>
                <option value="metropolitana">Metropolitana de Santiago</option>
              </select>
              {hasError("region") && (
                <span
                  id="region-error"
                  className="form-error"
                >
                  {getErrorMessage("region")}
                </span>
              )}
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
                  aria-describedby={hasError("comuna") ? "comuna-error" : undefined}
                >
                  <option value="">Selecciona tu comuna</option>
                  {comunas.map((comuna) => (
                    <option key={comuna} value={comuna}>
                      {comuna}
                    </option>
                  ))}
                </select>
                {hasError("comuna") && (
                  <span
                    id="comuna-error"
                    className="form-error"
                  >
                    {getErrorMessage("comuna")}
                  </span>
                )}
              </div>
            )}

            {/* Documento con fotico */}
            <div className="form-group">
              <label htmlFor="documento" className="file-upload-label" tabIndex={0}>
                <span className="file-upload-icon" role="img" aria-label="Cámara">
                  📷
                </span>
                <span>
                  {fileName}
                </span>
                <input
                  type="file"
                  id="documento"
                  name="documento"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  required
                  aria-describedby={hasError("documento") ? "documento-error" : undefined}
                />
              </label>
              {hasError("documento") && (
                <span
                  id="documento-error"
                  className="form-error"
                >
                  {getErrorMessage("documento")}
                </span>
              )}
            </div>

            {/* Términos */}
            <div className="form-group form-checkbox">
              <input
                type="checkbox"
                id="terminos"
                name="terminos"
                checked={formData.terminos}
                onChange={(e) => updateField("terminos", e.target.checked)}
                required
              />
              <label htmlFor="terminos">
                Acepto los <Link to='/terminosYCondiciones'>Términos y Condiciones</Link> y la <Link to='/politicasDePrivacidad'>Política de Privacidad</Link>
              </label>
              {hasError("terminos") && (
                <span className="form-error">
                  {getErrorMessage("terminos")}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading ? "Registrando..." : "Registrarme"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistroVoluntario;
