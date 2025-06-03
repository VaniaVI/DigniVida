import './BenSoliciReact.css'

function BenSoliciReact() {
    return (
        <>
        <section class="page-header">
            <div class="container">
                <h2>Solicitar Acompañamiento</h2>
                <p>Completa el formulario para solicitar que un voluntario te acompañe</p>
            </div>
        </section>

        <section class="form-section">
            <div class="container">
                <div class="form-container">
                    <form id="solicitud-form">
                        <div class="form-group">
                            <label for="tipo-tramite">Tipo de Trámite</label>
                            <select id="tipo-tramite" name="tipo-tramite" required>
                                <option value="">Selecciona el tipo de trámite</option>
                                <option value="cesfam">CESFAM</option>
                                <option value="pension">Pensión</option>
                                <option value="pago">Pago de cuentas</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        
                        <div class="form-group" id="otro-tramite-container" style={{display: 'none'}}>
                            <label for="otro-tramite">Especifica el trámite</label>
                            <input type="text" id="otro-tramite" name="otro-tramite" placeholder="Describe el tipo de trámite"/>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="fecha">Fecha</label>
                                <input type="date" id="fecha" name="fecha" required min=""/>
                            </div>
                            
                            <div class="form-group">
                                <label for="hora">Hora</label>
                                <select id="hora" name="hora" required>
                                    <option value="">Selecciona la hora</option>
                                    <option value="09:00">09:00</option>
                                    <option value="10:00">10:00</option>
                                    <option value="11:00">11:00</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="direccion-origen">Dirección de Origen</label>
                            <input type="text" id="direccion-origen" name="direccion-origen" placeholder="¿Dónde te recogemos?" required/>
                            <div class="address-options">
                                <label class="address-option">
                                    <input type="radio" name="origen" value="casa" checked/>
                                    Usar mi dirección de casa
                                </label>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label for="direccion-destino">Dirección de Destino</label>
                            <input type="text" id="direccion-destino" name="direccion-destino" placeholder="¿A dónde vamos?" required/>
                        </div>
                        
                        <div class="form-group">
                            <label for="notas">Notas Adicionales (opcional)</label>
                            <textarea id="notas" name="notas" rows="3" placeholder="Información adicional que el voluntario deba saber"></textarea>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="btn btn-outline" onclick="window.location.href='beneficiario-dashboard.html'">Cancelar</button>
                            <button type="submit" class="btn btn-primary" id="btn-enviar" disabled>Enviar Solicitud</button>
                        </div>
                    </form>
                    
                    <div class="confirmation-message" id="confirmation-message" style={{display: 'none'}}>
                        <div class="confirmation-icon">✓</div>
                        <h3>Solicitud enviada</h3>
                        <p>Espere confirmación. Te notificaremos cuando un voluntario acepte tu solicitud.</p>
                        <button class="btn btn-primary" onclick="window.location.href='beneficiario-dashboard.html'">Volver al Inicio</button>
                    </div>
                </div>
                
                <div class="form-sidebar">
                    <div class="sidebar-card">
                        <h3>Consejos</h3>
                        <ul>
                            <li>Solicita el acompañamiento con al menos 24 horas de anticipación.</li>
                            <li>Asegúrate de tener todos los documentos necesarios para tu trámite.</li>
                            <li>Si necesitas ayuda especial, indícalo en las notas adicionales.</li>
                        </ul>
                    </div>
                    
                    <div class="sidebar-card">
                        <h3>Horarios Disponibles</h3>
                        <p>Nuestros voluntarios están disponibles de lunes a viernes, de 9:00 a 17:00 horas.</p>
                    </div>
                    
                    <div class="sidebar-card">
                        <h3>¿Necesitas ayuda?</h3>
                        <p>Llámanos al +1569 67850875</p>
                    </div>
                </div>
            </div>
        </section>
    </>
    );


}
export default BenSoliciReact