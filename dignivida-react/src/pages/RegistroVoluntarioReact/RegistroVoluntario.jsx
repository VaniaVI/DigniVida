import {Link} from 'react-router-dom'

function RegistroVoluntario (){ 
    return(

    <section class="auth-section">
        <div class="container">
            <div class="auth-container">
                <h2 class="auth-title">Registro de Voluntario</h2>
                <p class="auth-subtitle">Crea tu cuenta para ofrecer acompañamiento</p>
                
                <form class="auth-form" action="verificacion-sms.html">
                    <div class="form-group">
                        <label for="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" name="nombre" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="tel" id="telefono" name="telefono" placeholder="+56 9 XXXX XXXX" required/>
                        <small class="form-hint">Recibirás un código de verificación por SMS en este número</small>
                    </div>
                    
                    <div class="form-group">
                        <label for="region">Región</label>
                        <select id="region" name="region" required onchange="cargarComunas()">
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
                    </div> 
                    <div class="form-group" id="comuna-container" style={{display: 'none'}}>
                        <label for="comuna">Comuna</label>
                        <select id="comuna" name="comuna" required>
                            <option value="">Selecciona tu comuna</option>
                        </select>
                    </div>   
                    
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
                        <label for="terminos">Acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de Privacidad</a></label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-block">Registrarme</button>
                </form>
                
                <div class="auth-footer">
                    <p>¿Ya tienes una cuenta? <a href="login.html">Inicia sesión aquí</a></p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default RegistroVoluntario;