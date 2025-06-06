import { Link } from "react-router-dom"
import { Element } from 'react-scroll';
import { useRegistroBeneficiario } from "../hooks/useRegistroBeneficiario"

function RegistroBeneficiarioReact() {
  const {
    formData,
    comunas,
    isLoading,
    showDescripcion,
    showComuna,
    updateField,
    handleSubmit,
    getErrorMessage,
    hasError,
  } = useRegistroBeneficiario()

  const onSubmit = async (e) => {
    const success = await handleSubmit(e)
    if (success) {
      // Aquí puedes redirigir o mostrar mensaje de éxito
      console.log("Registro exitoso");
      
      // Si quieres redirigir automáticamente, descomenta la siguiente línea:
      // window.location.href = "/verificacionsms"
    } else {
      alert("Error al registrar. Intenta nuevamente.")
    }
  }

  return (
    <div className="Registrobenereact">
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <h2 className="auth-title">Registro de beneficiario</h2>
            <p className="auth-subtitle">Crea tu cuenta para solicitar acompañamiento</p>

            <form className="auth-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={(e) => updateField("nombre", e.target.value)}
                  required
                />
                {hasError("nombre") && (
                  <span style={{ color: "red", display: "block" }}>{getErrorMessage("nombre")}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="text"
                  id="telefono"
                  name="telefono"
                  placeholder="+56 9 XXXX XXXX"
                  value={formData.telefono}
                  onChange={(e) => updateField("telefono", e.target.value)}
                  required
                />
                {hasError("telefono") && (
                  <span style={{ color: "red", display: "block" }}>{getErrorMessage("telefono")}</span>
                )}
              </div>

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
                />
                {hasError("edad") && <span style={{ color: "red", display: "block" }}>{getErrorMessage("edad")}</span>}
              </div>

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
                  Acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de Privacidad</a>
                </label>
                {hasError("terminos") && (
                  <span style={{ color: "red", display: "block" }}>{getErrorMessage("terminos")}</span>
                )}
              </div>

            
              <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                <Link to="/verificacionsms" style={{color:'white'}}>{isLoading ? "Registrando..." : "Registrarme"}</Link>
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
    </div>
  )
}

export default RegistroBeneficiarioReact
