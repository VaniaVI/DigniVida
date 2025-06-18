import { Link, useNavigate } from "react-router-dom"
import { useRegistroBeneficiario } from "../hooks/useRegistroBeneficiario"

function RegistroBeneficiarioReact() {
  const {
    formData,
    comunas,
    isLoading,
    generalError,
    showDescripcion,
    showComuna,
    updateField,
    handleSubmit,
    getErrorMessage,
    hasError
  } = useRegistroBeneficiario()

    const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault(); 
    const success = await handleSubmit(e)
    if (success) {
      // Aquí puedes redirigir o mostrar mensaje de éxito
      console.log("Registro exitoso");
      navigate("/verificacionsms");
    } else {
      alert("Error al registrar. Intenta nuevamente.")
      console.error("❌ Error al registrar beneficiario")
    }
  }

  return (
    <div className="Registrobenereact">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <h2 className="auth-title">Registro de beneficiario</h2>
            <p className="auth-subtitle">Crea tu cuenta para solicitar acompañamiento</p>

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
                  {hasError(id) && (
                    <span className="form-error">⚠️ {getErrorMessage(id)}</span>
                  )}
                </div>
              ))}


              {/* Género */}
              <div className="form-group">
                <label htmlFor="sexo">Selecciona tu género</label>
                <select
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={(e) => updateField("sexo", e.target.value)}
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="M">Masculino</option>
                  <option value="F">Femenino</option>
                  <option value="?">Prefiero no decirlo</option>
                </select>
                {hasError("sexo") && <span style={{ color: "red", display: "block" }}>{getErrorMessage("sexo")}</span>}
              </div>

              {/* Discapacidad */}
              <div className="form-group">
                <label htmlFor="discapacidad">¿Tienes alguna condición especial?</label>
                <select
                  id="discapacidad"
                  name="discapacidad"
                  value={formData.discapacidad}
                  onChange={(e) => updateField("discapacidad", e.target.value)}
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="Y">Sí</option>
                  <option value="N">No</option>
                </select>
                {hasError("discapacidad") && (
                  <span style={{ color: "red", display: "block" }}>{getErrorMessage("discapacidad")}</span>
                )}

                {showDescripcion && (
                  <div style={{ display: "block", marginTop: "10px" }}>
                    <input
                      type="text"
                      id="descripcion"
                      name="descripcion"
                      placeholder="¿Cuál?"
                      value={formData.descripcionDiscapacidad}
                      onChange={(e) => updateField("descripcionDiscapacidad", e.target.value)}
                    />
                    {hasError("descripcionDiscapacidad") && (
                      <span style={{ color: "red", display: "block" }}>
                        {getErrorMessage("descripcionDiscapacidad")}
                      </span>
                    )}
                  </div>
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
                  <span style={{ color: "red", display: "block" }}>{getErrorMessage("region")}</span>
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
                  >
                    <option value="">Selecciona tu comuna</option>
                    {comunas.map((comuna) => (
                      <option key={comuna} value={comuna}>
                        {comuna}
                      </option>
                    ))}
                  </select>
                  {hasError("comuna") && (
                    <span style={{ color: "red", display: "block" }}>{getErrorMessage("comuna")}</span>
                  )}
                </div>
              )}

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
              <p>
                ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegistroBeneficiarioReact;
