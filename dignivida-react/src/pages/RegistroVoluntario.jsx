import {Link} from 'react-router-dom'

function RegistroVoluntario (){ 
    return(

    <section className="auth-section">
            <div className="container">
                <div className="auth-container">
                    <h2 className="auth-title">Registro de Voluntario</h2>
                    <p className="auth-subtitle">Crea tu cuenta para ofrecer acompañamiento</p>
                    
                    <form className="auth-form" action="verificacion-sms.html">
                        <div className="form-group">
                            <label for="nombre">Nombre Completo</label>
                            <input type="text" id="nombre" name="nombre" required/>
                        </div>
                        
                        <div className="form-group">
                            <label for="telefono">Teléfono</label>
                            <input type="tel" id="telefono" name="telefono" placeholder="+56 9 XXXX XXXX" required/>
                            <small className="form-hint">Recibirás un código de verificación por SMS en este número</small>
                        </div>
                        
                        <div className="form-group">
                            <label for="zona">Zona</label>
                            <select id="zona" name="zona" required>
                                <option value="">Selecciona tu zona</option>
                                <option value="norte">Zona Norte</option>
                                <option value="centro">Zona Centro</option>
                                <option value="sur">Zona Sur</option>
                                <option value="este">Zona Este</option>
                                <option value="oeste">Zona Oeste</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label for="documento">Subir Documento (DNI/RUT)</label>
                            <div className="file-upload">
                                <input type="file" id="documento" name="documento" accept="image/*" required/>
                                <label for="documento" className="file-upload-label">
                                    <span className="file-upload-icon">📷</span>
                                    <span className="file-upload-text">Seleccionar o tomar foto</span>
                                </label>
                                <div className="file-name" id="file-name">Ningún archivo seleccionado</div>
                            </div>
                            <small className="form-hint">Sube una foto clara de tu documento de identidad</small>
                        </div>
                        
                        <div className="form-group form-checkbox">
                            <input type="checkbox" id="terminos" name="terminos" required/>
                            <label for="terminos">Acepto los <a href="#">Términos y Condiciones</a> y la <a href="#">Política de Privacidad</a></label>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                    </form>
                    
                    <div className="auth-footer">
                        <p>¿Ya tienes una cuenta? <Link to = '/login'>Inicia sesión aquí</Link></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistroVoluntario;