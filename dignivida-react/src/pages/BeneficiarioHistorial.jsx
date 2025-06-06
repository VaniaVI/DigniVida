
const BeneficiarioHistorial = () => {
    return (
    <>
   <section className="page-header">
            <div className="container">
                <h2>Mi Historial</h2>
                <p>Revisa tus solicitudes anteriores y los voluntarios que te han ayudado</p>
            </div>
        </section><section className="history-section">
                <div className="container">
                    <div className="history-tabs">
                        <button className="tab-button active" data-tab="solicitudes">Solicitudes</button>
                        <button className="tab-button" data-tab="voluntarios">Mis Voluntarios</button>
                    </div>

                    <div className="history-content">
                         {/* Pestaña de Solicitudes  */}
                        <div className="tab-content active" id="solicitudes">
                            <div className="history-filters">
                                <div className="filter-group">
                                    <label for="estado-filter">Estado:</label>
                                    <select id="estado-filter">
                                        <option value="todos">Todos</option>
                                        <option value="completado">Completado</option>
                                        <option value="cancelado">Cancelado</option>
                                        <option value="pendiente">Pendiente</option>
                                    </select>
                                </div>

                                <div className="filter-group">
                                    <label for="fecha-desde">Desde:</label>
                                    <input type="date" id="fecha-desde"/>
                                    </div>

                                <div className="filter-group">
                                    <label for="fecha-hasta">Hasta:</label>
                                    <input type="date" id="fecha-hasta"/>
                                    </div>

                                <button className="btn btn-outline btn-sm">Filtrar</button>
                            </div>

                            <div className="history-list">
                                <div className="history-item">
                                    <div className="history-date">
                                        <div className="date-day">15</div>
                                        <div className="date-month">Mayo</div>
                                        <div className="date-year">2025</div>
                                    </div>

                                    <div className="history-details">
                                        <div className="history-header">
                                            <h4>CESFAM Central</h4>
                                            <span className="status-badge confirmed">Confirmada</span>
                                        </div>
                                        <div className="history-info">
                                            <p><strong>Hora:</strong> 10:00 AM</p>
                                            <p><strong>Origen:</strong> Av. Principal 123, Ciudad</p>
                                            <p><strong>Destino:</strong> CESFAM Central, Av. Salud 456</p>
                                        </div>
                                        <div className="history-volunteer">
                                            <img src="/placeholder.svg?height=40&width=40" alt="Foto del voluntario" className="volunteer-avatar-small"/>
                                                <div>
                                                    <p><strong>Voluntario:</strong> Miguel Sánchez</p>
                                                </div>
                                            </div>
                                        <div className="history-actions">
                                            <a href="beneficiario_seguimiento.html" className="btn btn-primary btn-sm">Ver Seguimiento</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-item">
                                    <div className="history-date">
                                        <div className="date-day">10</div>
                                        <div className="date-month">Mayo</div>
                                        <div className="date-year">2025</div>
                                    </div>

                                    <div className="history-details">
                                        <div className="history-header">
                                            <h4>Pago de Cuentas</h4>
                                            <span className="status-badge completed">Completada</span>
                                        </div>
                                        <div className="history-info">
                                            <p><strong>Hora:</strong> 11:30 AM</p>
                                            <p><strong>Origen:</strong> Av. Principal 123, Ciudad</p>
                                            <p><strong>Destino:</strong> Servicios Municipales, Plaza Central</p>
                                        </div>
                                        <div className="history-volunteer">
                                            <img src="/placeholder.svg?height=40&width=40" alt="Foto del voluntario" className="volunteer-avatar-small"/>
                                                <div>
                                                    <p><strong>Voluntario:</strong> Ana Martínez</p>
                                                </div>
                                            </div>
                                        <div className="history-actions">
                                            <button className="btn btn-outline btn-sm">Ver Detalles</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-item">
                                    <div className="history-date">
                                        <div className="date-day">28</div>
                                        <div className="date-month">Abril</div>
                                        <div className="date-year">2025</div>
                                    </div>

                                    <div className="history-details">
                                        <div className="history-header">
                                            <h4>Pensión</h4>
                                            <span className="status-badge completed">Completada</span>
                                        </div>
                                        <div className="history-info">
                                            <p><strong>Hora:</strong> 09:00 AM</p>
                                            <p><strong>Origen:</strong> Av. Principal 123, Ciudad</p>
                                            <p><strong>Destino:</strong> Caja de Compensación, Av. Central 789</p>
                                        </div>
                                        <div className="history-volunteer">
                                            <img src="/placeholder.svg?height=40&width=40" alt="Foto del voluntario" className="volunteer-avatar-small"/>
                                                <div>
                                                    <p><strong>Voluntario:</strong> Carlos Pérez</p>
                                                </div>
                                            </div>
                                        <div className="history-actions">
                                            <button className="btn btn-outline btn-sm">Ver Detalles</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="history-item">
                                    <div className="history-date">
                                        <div className="date-day">15</div>
                                        <div className="date-month">Abril</div>
                                        <div className="date-year">2025</div>
                                    </div>

                                    <div className="history-details">
                                        <div className="history-header">
                                            <h4>CESFAM Central</h4>
                                            <span className="status-badge cancelled">Cancelada</span>
                                        </div>
                                        <div className="history-info">
                                            <p><strong>Hora:</strong> 10:00 AM</p>
                                            <p><strong>Origen:</strong> Av. Principal 123, Ciudad</p>
                                            <p><strong>Destino:</strong> CESFAM Central, Av. Salud 456</p>
                                        </div>
                                        <div className="history-volunteer">
                                            <div>
                                                <p><strong>Motivo:</strong> Cita médica reprogramada</p>
                                            </div>
                                        </div>
                                        <div className="history-actions">
                                            <button className="btn btn-outline btn-sm">Ver Detalles</button>
                                        </div>
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
                        </div>

                        {/*< />!-- Pestaña de Voluntarios --> */}
                        <div className="tab-content" id="voluntarios">
                            <div className="volunteers-list">
                                <div className="volunteer-card">
                                    <img src="/placeholder.svg?height=120&width=120" alt="Foto del voluntario" className="volunteer-avatar-large"/>
                                        <div className="volunteer-info">
                                            <h3>Miguel Sánchez</h3>
                                            <div className="volunteer-availability">
                                                Disponible hoy de 9 a 13 h
                                            </div>
                                            <div className="volunteer-badges">
                                                <span className="volunteer-badge">CESFAM</span>
                                                <span className="volunteer-badge">Trámites</span>
                                                <span className="volunteer-badge">Conductor</span>
                                            </div>
                                            <p><strong>Servicios:</strong> 3 acompañamientos</p>
                                            <p><strong>Última vez:</strong> 15 de Mayo, 2025</p>
                                            <div className="volunteer-rating">
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star">★</span>
                                                <span className="rating-text">4.0</span>
                                            </div>
                                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                                        </div>
                                    </div>

                                <div className="volunteer-card">
                                    <img src="/placeholder.svg?height=120&width=120" alt="Foto del voluntario" className="volunteer-avatar-large"/>
                                        <div className="volunteer-info">
                                            <h3>Joaquin Navarro</h3>
                                            <div className="volunteer-availability">
                                                Disponible hoy de 9 a 13 h
                                            </div>
                                            <div className="volunteer-badges">
                                                <span className="volunteer-badge">CESFAM</span>
                                                <span className="volunteer-badge">Trámites</span>
                                                <span className="volunteer-badge">Conductor</span>
                                            </div>
                                            <p><strong>Servicios:</strong> 3 acompañamientos</p>
                                            <p><strong>Última vez:</strong> 15 de Mayo, 2025</p>
                                            <div className="volunteer-rating">
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star">★</span>
                                                <span className="rating-text">4.0</span>
                                            </div>
                                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                                        </div>
                                    </div>

                                <div className="volunteer-card">
                                    <img src="/placeholder.svg?height=120&width=120" alt="Foto del voluntario" className="volunteer-avatar-large"/>
                                        <div className="volunteer-info">
                                            <h3>Sofia Carrasco</h3>
                                            <div className="volunteer-availability">
                                                Disponible hoy de 9 a 13 h
                                            </div>
                                            <div className="volunteer-badges">
                                                <span className="volunteer-badge">CESFAM</span>
                                                <span className="volunteer-badge">Trámites</span>
                                                <span className="volunteer-badge">Conductor</span>
                                            </div>
                                            <p><strong>Servicios:</strong> 3 acompañamientos</p>
                                            <p><strong>Última vez:</strong> 15 de Mayo, 2025</p>
                                            <div className="volunteer-rating">
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star">★</span>
                                                <span className="rating-text">4.0</span>
                                            </div>
                                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                                        </div>
                                    </div>

                                <div className="volunteer-card">
                                    <img src="/placeholder.svg?height=120&width=120" alt="Foto del voluntario" className="volunteer-avatar-large"/>
                                        <div className="volunteer-info">
                                            <h3>Margoth Sepúlveda</h3>
                                            <div className="volunteer-availability">
                                                Disponible hoy de 9 a 13 h
                                            </div>
                                            <div className="volunteer-badges">
                                                <span className="volunteer-badge">CESFAM</span>
                                                <span className="volunteer-badge">Trámites</span>
                                                <span className="volunteer-badge">Conductor</span>
                                            </div>
                                            <p><strong>Servicios:</strong> 3 acompañamientos</p>
                                            <p><strong>Última vez:</strong> 15 de Mayo, 2025</p>
                                            <div className="volunteer-rating">
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star filled">★</span>
                                                <span className="star">★</span>
                                                <span className="rating-text">4.0</span>
                                            </div>
                                            <button className="btn btn-outline btn-sm">Ver Perfil</button>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BeneficiarioHistorial;