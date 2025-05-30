import { Link } from 'react-router-dom';
import './PerfilBeneficiario.css'


function PerfilBeneficiario() {
    return(
        <div className="perfilBeneficiario">
                <section className="page-header">
        <div className="container">
            <h2>Mi Perfil</h2>
            <p>Actualiza tu información personal y datos médicos</p>
        </div>
    </section>

    <section className="profile-section">
        <div className="container">
            <div className="profile-tabs">
                <button className="tab-button active" data-tab="personal">Información Personal</button>
                <button className="tab-button" data-tab="medical">Información Médica</button>
                <button className="tab-button" data-tab="emergency">Contactos de Emergencia</button>
                <button className="tab-button" data-tab="security">Seguridad</button>
            </div>
            
            <div className="profile-content">
                 {/* Pestaña de Información Personal  */}
                <div className="tab-content active" id="personal">
                    <form className="profile-form">
                        <div className="profile-avatar">
                            <img src="https://cdn-icons-png.flaticon.com/128/166/166256.png" alt="Foto de perfil" className="avatar-preview"/>
                            <div className="avatar-actions">
                                <label for="avatar-upload" className="btn btn-outline btn-sm">Cambiar foto</label>
                                <input type="file" id="avatar-upload" accept="image/*" style="display: none;"/>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label for="nombre">Nombre Completo</label>
                                <input type="text" id="nombre" name="nombre" value="Vania Rodríguez" required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="telefono">Teléfono</label>
                                <input type="tel" id="telefono" name="telefono" value="+56 9 1234 5678" required/>
                            </div>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label for="fecha-nacimiento">Fecha de Nacimiento</label>
                                <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" value="1945-05-10" required/>
                            </div>
                            
                            <div className="form-group">
                                <label for="genero">Género</label>
                                <select id="genero" name="genero" required>
                                    <option value="femenino" selected>Femenino</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="otro">Otro</option>
                                    <option value="no-especificar">Prefiero no especificar</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label for="direccion">Dirección Completa</label>
                            <input type="text" id="direccion" name="direccion" value="Av. Principal 123, Depto. 45, Ciudad" required/>
                        </div>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label for="zona">Zona</label>
                                <select id="zona" name="zona" required>
                                    <option value="norte">Zona Norte</option>
                                    <option value="centro" selected>Zona Centro</option>
                                    <option value="sur">Zona Sur</option>
                                    <option value="este">Zona Este</option>
                                    <option value="oeste">Zona Oeste</option>
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <label for="comuna">Comuna</label>
                                <input type="text" id="comuna" name="comuna" value="Santiago Centro" required />
                            </div>
                        </div>
                        
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
                
                {/* Pestaña de Información Médica  */}
                <div className="tab-content" id="medical">
                    <form className="profile-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label for="altura">Altura (cm)</label>
                                <input type="number" id="altura" name="altura" value="165" min="100" max="250"/>
                            </div>
                            
                            <div className="form-group">
                                <label for="peso">Peso (kg)</label>
                                <input type="number" id="peso" name="peso" value="68" min="30" max="200"/>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <label for="enfermedades">Enfermedades o Condiciones Médicas</label>
                            <textarea id="enfermedades" name="enfermedades" rows="3">Hipertensión, Diabetes tipo 2</textarea>
                        </div>
                        
                        <div className="form-group">
                            <label for="medicamentos">Medicamentos que Consume</label>
                            <textarea id="medicamentos" name="medicamentos" rows="3">Losartán 50mg (mañana), Metformina 850mg (después de almuerzo)</textarea>
                        </div>
                        
                        <div className="form-group">
                            <label for="alergias">Alergias</label>
                            <textarea id="alergias" name="alergias" rows="2">Penicilina</textarea>
                        </div>
                        
                        <div className="form-group">
                            <label for="movilidad">Nivel de Movilidad</label>
                            <select id="movilidad" name="movilidad">
                                <option value="completa">Movilidad completa</option>
                                <option value="bastón" selected>Uso de bastón</option>
                                <option value="andador">Uso de andador</option>
                                <option value="silla">Silla de ruedas</option>
                                <option value="asistencia">Requiere asistencia completa</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label for="observaciones">Observaciones Adicionales</label>
                            <textarea id="observaciones" name="observaciones" rows="3">Dificultad para subir escaleras. Prefiere caminar distancias cortas.</textarea>
                        </div>
                        
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
                
                {/* Pestaña de Contactos de Emergencia  */}
                <div className="tab-content" id="emergency">
                    <form className="profile-form">
                        <div className="emergency-contacts">
                            <div className="emergency-contact">
                                <h4>Contacto Principal</h4>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="contacto1-nombre">Nombre Completo</label>
                                        <input type="text" id="contacto1-nombre" name="contacto1-nombre" value="Juan Rodríguez" required/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="contacto1-relacion">Relación</label>
                                        <input type="text" id="contacto1-relacion" name="contacto1-relacion" value="Hijo" required/>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="contacto1-telefono">Teléfono</label>
                                        <input type="tel" id="contacto1-telefono" name="contacto1-telefono" value="+56 9 8765 4321" required/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="contacto1-email">Email</label>
                                        <input type="email" id="contacto1-email" name="contacto1-email" value="juan.rodriguez@email.com"/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="emergency-contact">
                                <h4>Contacto Secundario</h4>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="contacto2-nombre">Nombre Completo</label>
                                        <input type="text" id="contacto2-nombre" name="contacto2-nombre" value="María González"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="contacto2-relacion">Relación</label>
                                        <input type="text" id="contacto2-relacion" name="contacto2-relacion" value="Vecina"/>
                                    </div>
                                </div>
                                
                                <div className="form-row">
                                    <div className="form-group">
                                        <label for="contacto2-telefono">Teléfono</label>
                                        <input type="tel" id="contacto2-telefono" name="contacto2-telefono" value="+56 9 2345 6789"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label for="contacto2-email">Email</label>
                                        <input type="email" id="contacto2-email" name="contacto2-email" value="maria.gonzalez@email.com"/>
                                    </div>
                                </div>
                            </div>
                            
                            <button type="button" className="btn btn-outline btn-sm add-contact">+ Agregar otro contacto</button>
                        </div>
                        
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                        </div>
                    </form>
                </div>
                
                {/* Pestaña de Seguridad  */}

                <div className="tab-content" id="security">
                    <form className="profile-form">
                        <div className="form-group">
                            <label for="password-actual">Contraseña Actual</label>
                            <input type="password" id="password-actual" name="password-actual"/>
                        </div>
                        
                        <div className="form-group">
                            <label for="password-nueva">Nueva Contraseña</label>
                            <input type="password" id="password-nueva" name="password-nueva"/>
                        </div>
                        
                        <div className="form-group">
                            <label for="password-confirmar">Confirmar Nueva Contraseña</label>
                            <input type="password" id="password-confirmar" name="password-confirmar"/>
                        </div>
                        
                        <div className="form-actions">
                            <button type="submit" className="btn btn-primary">Cambiar Contraseña</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>


    </div>
    );
}
export default PerfilBeneficiario;