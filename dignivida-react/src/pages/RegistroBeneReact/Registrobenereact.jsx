
function Registrobenereact() {
   
    return(
        <div className ="Registrobenereact">
        <section class="auth-section">
        <div class="container">
            <div class="auth-container">
                <h2 class="auth-title">Registro de beneficiario</h2>
                <p class="auth-subtitle">Crea tu cuenta para solicitar acompañamiento</p>
                
                <form class="auth-form" action="verificacion-sms.html">
                    <div class="form-group">
                        <label for="nombre">Nombre Completo</label>
                        <input type="text" id="nombre" name="nombre" required/>
                    </div>
                    
                    <div class="form-group">
                        <label for="telefono">Teléfono</label>
                        <input type="text" id="telefono" name="telefono" placeholder="+56 9 XXXX XXXX" required pattern="\d{9}"/>
                        <span id="mensajeTel" style={{ color: 'red', display: 'none' }}>El número debe tener exactamente 9 dígitos</span>

                    </div>
                    
                    <div class="form-group">
                        <label for="Edad">Edad</label>
                        <input type="number" id="edad" name="edad" placeholder="Ingresa tu edad" required min="60"/>
                        <span id="mensajeEdad" style={{color: 'red', display: 'none'}}>Debes tener al menos 60 años.</span>
                    </div>

                    <div class="form-group">
                        <label for="sexo">Selecciona tu género</label>
                        <select id="sexo" name="sexo" required>
                            <option value="">Selecciona</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="?">Prefiero no decirlo</option>
                        </select>
                    </div> 

                    
                    <div class="form-group">
                        <label for="discapacidad">¿Tienes alguna condición especial?</label>
                        <select id="discapacidad" name="discapacidad" required>
                            <option value="">Selecciona</option>
                            <option value="Y">Si</option>
                            <option value="N">No</option>
                        </select>
                        <div id="campoDescripcion" style={{display:'none', marginTop: '10px'}}>
                            <input type="text" id="descripcion" name="descripcion" placeholder="¿Cuál?"/>
                        </div>
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



        </div>

    );
}

export default Registrobenereact