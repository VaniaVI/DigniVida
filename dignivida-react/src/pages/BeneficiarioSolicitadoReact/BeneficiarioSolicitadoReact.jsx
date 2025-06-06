
import {Link} from 'react-router-dom'

function BeneficiarioSolicitadoReact () {
    return(
    <>    
        <section className="page-header">
            <div className="container">
                <h2>Seleccionar Voluntario</h2>
                <p>Elige quién te acompañará en tu trámite</p>
            </div>
        </section>

        <section className="select-volunteer-section">
            <div className="container">
                <div className="request-summary">
                    <h3>Resumen de tu solicitud</h3>
                    <div className="summary-details">
                        <div className="summary-item">
                            <span className="summary-label">Tipo de trámite:</span>
                            <span className="summary-value">CESFAM</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Fecha:</span>
                            <span className="summary-value">15 de Mayo, 2025</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Hora:</span>
                            <span className="summary-value">10:00 AM</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Origen:</span>
                            <span className="summary-value">Av. Principal 123, Ciudad</span>
                        </div>
                        <div className="summary-item">
                            <span className="summary-label">Destino:</span>
                            <span className="summary-value">CESFAM Central, Av. Salud 456</span>
                        </div>
                    </div>
                </div>

                <div className="volunteers-filter">
                    <h3>Voluntarios disponibles en tu zona</h3>
                    <div className="filter-options">
                        <div className="filter-group">
                            <label for="sort-by">Ordenar por:</label>
                            <select id="sort-by">
                                <option value="distance">Cercanía</option>
                                <option value="rating">Calificación</option>
                                <option value="experience">Experiencia</option>
                            </select>
                        </div>
                        <div className="filter-group">
                            <label for="filter-gender">Filtrar por género:</label>
                            <select id="filter-gender">
                                <option value="all">Todos</option>
                                <option value="female">Femenino</option>
                                <option value="male">Masculino</option>
                            </select>
                        </div>
                        <button className="btn btn-outline btn-sm">Aplicar Filtros</button>
                    </div>
                </div>

                <div className="volunteers-grid">
                    {/* <!-- Voluntario 1 --> */}
                    <div className="volunteer-selection-card">
                        <div className="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Miguel Sánchez" className="volunteer-avatar"/>
                            <div className="volunteer-basic-info">
                                <h4>Miguel Sánchez</h4>
                                <div className="volunteer-rating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star">★</span>
                                    <span className="rating-text">4.0 (15 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-body">
                            <div className="volunteer-availability">
                                <span className="availability-badge available">Disponible hoy de 9 a 13 h</span>
                            </div>
                            <div className="volunteer-details">
                                <p><strong>Experiencia:</strong> 2 años como voluntario</p>
                                <p><strong>Distancia:</strong> A 1.5 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Acompañamiento médico</p>
                            </div>
                            <div className="volunteer-description">
                                <p>Me gusta ayudar a las personas mayores. Tengo experiencia en trámites médicos y soy muy paciente.</p>
                            </div>
                        </div>
                        <div className="volunteer-footer">
                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                            <button className="btn btn-primary btn-sm select-volunteer" data-volunteer-id="1">Seleccionar</button>
                        </div>
                    </div>

                    {/* <!-- Voluntario 2 --> */}
                    <div className="volunteer-selection-card">
                        <div className="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Ana Martínez" className="volunteer-avatar"/>
                            <div className="volunteer-basic-info">
                                <h4>Ana Martínez</h4>
                                <div className="volunteer-rating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="rating-text">5.0 (23 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-body">
                            <div className="volunteer-availability">
                                <span className="availability-badge available">Disponible hoy de 8 a 16 h</span>
                            </div>
                            <div className="volunteer-details">
                                <p><strong>Experiencia:</strong> 3 años como voluntaria</p>
                                <p><strong>Distancia:</strong> A 2.3 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Trámites bancarios y administrativos</p>
                            </div>
                            <div className="volunteer-description">
                                <p>Soy enfermera jubilada y me encanta ayudar a personas mayores. Tengo auto propio y disponibilidad horaria.</p>
                            </div>
                        </div>
                        <div className="volunteer-footer">
                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                            <button className="btn btn-primary btn-sm select-volunteer" data-volunteer-id="2">Seleccionar</button>
                        </div>
                    </div>

                    {/* <!-- Voluntario 3 --> */}
                    <div className="volunteer-selection-card">
                        <div className="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Carlos Pérez" className="volunteer-avatar"/>
                            <div className="volunteer-basic-info">
                                <h4>Carlos Pérez</h4>
                                <div className="volunteer-rating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star half-filled">★</span>
                                    <span className="rating-text">4.5 (8 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-body">
                            <div className="volunteer-availability">
                                <span className="availability-badge limited">Disponible hoy de 14 a 17 h</span>
                            </div>
                            <div className="volunteer-details">
                                <p><strong>Experiencia:</strong> 1 año como voluntario</p>
                                <p><strong>Distancia:</strong> A 0.8 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Acompañamiento a citas médicas</p>
                            </div>
                            <div className="volunteer-description">
                                <p>Estudiante de enfermería con experiencia en cuidado de adultos mayores. Paciente y respetuoso.</p>
                            </div>
                        </div>
                        <div className="volunteer-footer">
                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                            <button className="btn btn-primary btn-sm select-volunteer" data-volunteer-id="3">Seleccionar</button>
                        </div>
                    </div>

                    {/* <!-- Voluntario 4 --> */}
                    <div className="volunteer-selection-card">
                        <div className="volunteer-header">
                            <img src="/placeholder.svg?height=80&width=80" alt="Foto de Laura Gómez" className="volunteer-avatar"/>
                            <div className="volunteer-basic-info">
                                <h4>Laura Gómez</h4>
                                <div className="volunteer-rating">
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star filled">★</span>
                                    <span className="star">★</span>
                                    <span className="rating-text">4.2 (12 reseñas)</span>
                                </div>
                            </div>
                        </div>
                        <div className="volunteer-body">
                            <div className="volunteer-availability">
                                <span className="availability-badge available">Disponible hoy de 9 a 18 h</span>
                            </div>
                            <div className="volunteer-details">
                                <p><strong>Experiencia:</strong> 2 años como voluntaria</p>
                                <p><strong>Distancia:</strong> A 1.2 km de tu ubicación</p>
                                <p><strong>Especialidad:</strong> Trámites administrativos</p>
                            </div>
                            <div className="volunteer-description">
                                <p>Trabajadora social con experiencia en atención a adultos mayores. Comprometida y responsable.</p>
                            </div>
                        </div>
                        <div className="volunteer-footer">
                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                            <button className="btn btn-primary btn-sm select-volunteer" data-volunteer-id="4">Seleccionar</button>
                        </div>
                    </div>
                </div>

                <div className="pagination">
                    <button className="pagination-btn">&laquo;</button>
                    <button className="pagination-btn active">1</button>
                    <button className="pagination-btn">2</button>
                    <button className="pagination-btn">3</button>
                    <button className="pagination-btn">&raquo;</button>
                </div>

                <div className="selection-actions">
                    <Link to = '/beneficiarioSolicitaAcompa'><button className="btn btn-outline">Volver a la Solicitud</button></Link>
                    <button className="btn btn-primary" id="btn-auto-assign">Asignación Automática</button>
                </div>
            </div>
        </section>

        {/* <!-- Modal de confirmación --> */}
        <div className="modal" id="confirmation-modal">
            <div className="modal-content">
                <span className="close-modal">&times;</span>
                <div className="confirmation-content">
                    <div className="confirmation-icon">✓</div>
                    <h3>Voluntario Seleccionado</h3>
                    <div className="selected-volunteer-info">
                        <img src="/placeholder.svg?height=80&width=80" alt="Foto del voluntario" className="volunteer-avatar"/>
                        <div>
                            <h4 id="selected-volunteer-name">Nombre del Voluntario</h4>
                            <p>Ha sido asignado a tu solicitud</p>
                        </div>
                    </div>
                    <p>El voluntario ha sido notificado y confirmará tu solicitud en breve.</p>
                    <div className="confirmation-actions">
                        <Link to = "/beneficiarioDashboard"><button className="btn btn-primary"> Volver al Inicio</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>    
    )
}
   
export default BeneficiarioSolicitadoReact;
