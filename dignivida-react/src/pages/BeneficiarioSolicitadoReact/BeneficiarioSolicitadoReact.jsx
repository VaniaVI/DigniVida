
import './EstilosBeneficiarioReact.css'

function BeneficiarioSolicitadoReact () {
    return(
    <>    
        <section class="page-header">
            <div class="container">
                <h2>Seleccionar Voluntario</h2>
                <p>Elige quién te acompañará en tu trámite</p>
            </div>
        </section>

        <section class="select-volunteer-section">
            <div class="container">
                <div class="request-summary">
                    <h3>Resumen de tu solicitud</h3>
                    <div class="summary-details">
                        <div class="summary-item">
                            <span class="summary-label">Tipo de trámite:</span>
                            <span class="summary-value">CESFAM</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Fecha:</span>
                            <span class="summary-value">15 de Mayo, 2025</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Hora:</span>
                            <span class="summary-value">10:00 AM</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Origen:</span>
                            <span class="summary-value">Av. Principal 123, Ciudad</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Destino:</span>
                            <span class="summary-value">CESFAM Central, Av. Salud 456</span>
                        </div>
                    </div>
                </div>

                <div class="volunteers-filter">
                    <h3>Voluntarios disponibles en tu zona</h3>
                    <div class="filter-options">
                        <div class="filter-group">
                            <label for="sort-by">Ordenar por:</label>
                            <select id="sort-by">
                                <option value="distance">Cercanía</option>
                                <option value="rating">Calificación</option>
                                <option value="experience">Experiencia</option>
                            </select>
                        </div>
                        <div class="filter-group">
                            <label for="filter-gender">Filtrar por género:</label>
                            <select id="filter-gender">
                                <option value="all">Todos</option>
                                <option value="female">Femenino</option>
                                <option value="male">Masculino</option>
                            </select>
                        </div>
                        <button class="btn btn-outline btn-sm">Aplicar Filtros</button>
                    </div>
                </div>

                <div class="volunteers-grid">
                    {/* <!-- Voluntario 1 --> */}
                    <div class="volunteer-selection-card">
                        <div class="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Miguel Sánchez" class="volunteer-avatar"/>
                            <div class="volunteer-basic-info">
                                <h4>Miguel Sánchez</h4>
                                <div class="volunteer-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star">★</span>
                                    <span class="rating-text">4.0 (15 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div class="volunteer-body">
                            <div class="volunteer-availability">
                                <span class="availability-badge available">Disponible hoy de 9 a 13 h</span>
                            </div>
                            <div class="volunteer-details">
                                <p><strong>Experiencia:</strong> 2 años como voluntario</p>
                                <p><strong>Distancia:</strong> A 1.5 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Acompañamiento médico</p>
                            </div>
                            <div class="volunteer-description">
                                <p>Me gusta ayudar a las personas mayores. Tengo experiencia en trámites médicos y soy muy paciente.</p>
                            </div>
                        </div>
                        <div class="volunteer-footer">
                            <button class="btn btn-outline btn-sm">Ver Perfil</button>
                            <button class="btn btn-primary btn-sm select-volunteer" data-volunteer-id="1">Seleccionar</button>
                        </div>
                    </div>

                    {/* <!-- Voluntario 2 --> */}
                    <div class="volunteer-selection-card">
                        <div class="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Ana Martínez" class="volunteer-avatar"/>
                            <div class="volunteer-basic-info">
                                <h4>Ana Martínez</h4>
                                <div class="volunteer-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="rating-text">5.0 (23 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div class="volunteer-body">
                            <div class="volunteer-availability">
                                <span class="availability-badge available">Disponible hoy de 8 a 16 h</span>
                            </div>
                            <div class="volunteer-details">
                                <p><strong>Experiencia:</strong> 3 años como voluntaria</p>
                                <p><strong>Distancia:</strong> A 2.3 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Trámites bancarios y administrativos</p>
                            </div>
                            <div class="volunteer-description">
                                <p>Soy enfermera jubilada y me encanta ayudar a personas mayores. Tengo auto propio y disponibilidad horaria.</p>
                            </div>
                        </div>
                        <div class="volunteer-footer">
                            <button class="btn btn-outline btn-sm">Ver Perfil</button>
                            <button class="btn btn-primary btn-sm select-volunteer" data-volunteer-id="2">Seleccionar</button>
                        </div>
                    </div>

                    {/* <!-- Voluntario 3 --> */}
                    <div class="volunteer-selection-card">
                        <div class="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Carlos Pérez" class="volunteer-avatar"/>
                            <div class="volunteer-basic-info">
                                <h4>Carlos Pérez</h4>
                                <div class="volunteer-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star half-filled">★</span>
                                    <span class="rating-text">4.5 (8 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div class="volunteer-body">
                            <div class="volunteer-availability">
                                <span class="availability-badge limited">Disponible hoy de 14 a 17 h</span>
                            </div>
                            <div class="volunteer-details">
                                <p><strong>Experiencia:</strong> 1 año como voluntario</p>
                                <p><strong>Distancia:</strong> A 0.8 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Acompañamiento a citas médicas</p>
                            </div>
                            <div class="volunteer-description">
                                <p>Estudiante de enfermería con experiencia en cuidado de adultos mayores. Paciente y respetuoso.</p>
                            </div>
                        </div>
                        <div class="volunteer-footer">
                            <button class="btn btn-outline btn-sm">Ver Perfil</button>
                            <button class="btn btn-primary btn-sm select-volunteer" data-volunteer-id="3">Seleccionar</button>
                        </div>
                    </div>

                    {/* <!-- Voluntario 4 --> */}
                    <div class="volunteer-selection-card">
                        <div class="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Laura Gómez" class="volunteer-avatar"/>
                            <div class="volunteer-basic-info">
                                <h4>Laura Gómez</h4>
                                <div class="volunteer-rating">
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star filled">★</span>
                                    <span class="star">★</span>
                                    <span class="rating-text">4.2 (12 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div class="volunteer-body">
                            <div class="volunteer-availability">
                                <span class="availability-badge available">Disponible hoy de 9 a 18 h</span>
                            </div>
                            <div class="volunteer-details">
                                <p><strong>Experiencia:</strong> 2 años como voluntaria</p>
                                <p><strong>Distancia:</strong> A 1.2 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Trámites administrativos</p>
                            </div>
                            <div class="volunteer-description">
                                <p>Trabajadora social con experiencia en atención a adultos mayores. Comprometida y responsable.</p>
                            </div>
                        </div>
                        <div class="volunteer-footer">
                            <button class="btn btn-outline btn-sm">Ver Perfil</button>
                            <button class="btn btn-primary btn-sm select-volunteer" data-volunteer-id="4">Seleccionar</button>
                        </div>
                    </div>
                </div>

                <div class="pagination">
                    <button class="pagination-btn">&laquo;</button>
                    <button class="pagination-btn active">1</button>
                    <button class="pagination-btn">2</button>
                    <button class="pagination-btn">3</button>
                    <button class="pagination-btn">&raquo;</button>
                </div>

                <div class="selection-actions">
                    <button class="btn btn-outline" onclick="window.location.href='beneficiario-solicitud.html'">Volver a la Solicitud</button>
                    <button class="btn btn-primary" id="btn-auto-assign">Asignación Automática</button>
                </div>
            </div>
        </section>

        {/* <!-- Modal de confirmación --> */}
        <div class="modal" id="confirmation-modal">
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="confirmation-content">
                    <div class="confirmation-icon">✓</div>
                    <h3>Voluntario Seleccionado</h3>
                    <div class="selected-volunteer-info">
                        <img src="/placeholder.svg?height=80&width=80" alt="Foto del voluntario" class="volunteer-avatar"/>
                        <div>
                            <h4 id="selected-volunteer-name">Nombre del Voluntario</h4>
                            <p>Ha sido asignado a tu solicitud</p>
                        </div>
                    </div>
                    <p>El voluntario ha sido notificado y confirmará tu solicitud en breve.</p>
                    <div class="confirmation-actions">
                        <button class="btn btn-primary" onclick="window.location.href='beneficiario-dashboard.html'">Volver al Inicio</button>
                    </div>
                </div>
            </div>
        </div>
    </>    
    )
}
   
export default BeneficiarioSolicitadoReact;
