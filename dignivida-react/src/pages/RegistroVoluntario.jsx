import {Link} from 'react-router-dom'
import { useRegistroBeneficiario } from "../hooks/useRegistroBeneficiario"

function RegistroVoluntario (){ 
    const {
        formData,
        comunas,
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

    return(

    <section class="auth-section">
        <div class="container">
            <div class="auth-container">
                <h2 class="auth-title">Registro de Voluntario</h2>
                <p class="auth-subtitle">Crea tu cuenta para ofrecer acompañamiento</p>
                
                <form class="auth-form" onSubmit={onSubmit}>
                    <div class="form-group">
                        <label for="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" name="nombre"value={formData.nombre} onChange={(e) => updateField("nombre", e.target.value)} required/>
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
                    
                    <div class="form-group">
                        <label for="documento">Subir Documento (DNI/RUT)</label>
                        <div class="file-upload">
                            <input type="file" id="documento" name="documento" accept="image/*" required/>
                            <label for="documento" class="file-upload-label">
                                <span class="file-upload-icon">📷</span>
                                <span class="file-upload-text">Seleccionar o tomar foto</span>
                            </label>
                            <div class="file-name" id="file-name">Ningún archivo seleccionado</div>
                        </div>
                        <small class="form-hint">Sube una foto clara de tu documento de identidad</small>
                    </div>
                    
                    <div class="form-group form-checkbox">
                        <input type="checkbox" id="terminos" name="terminos" required/>
                        <label for="terminos">Acepto los <Link to = '/terminosYCondiciones'>Términos y Condiciones</Link> y la <Link to = '/politicasDePrivacidad'>Política de Privacidad</Link></label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-block">Registrarme</button>
                </form>
                
                <div class="auth-footer">
                    <p>¿Ya tienes una cuenta? <Link to = '/login'>Inicia sesión aquí</Link></p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default RegistroVoluntario;