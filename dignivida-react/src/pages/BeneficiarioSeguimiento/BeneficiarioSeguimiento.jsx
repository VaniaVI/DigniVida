import mapa from '../../assets/mapaborrar.jpg';

const BeneficiarioSeguimiento = () =>{
    return(
        <section class="tracking-section">
        <div class="tracking-map">
            <img src="{mapa}" alt="Mapa de seguimiento" class="map-image"/>
            <div class="map-overlay">
                <div class="map-pin origin">
                    <div class="pin-icon">A</div>
                </div>
                <div class="map-pin destination">
                    <div class="pin-icon">B</div>
                </div>
                <div class="map-car">
                    <div class="car-icon">🚗</div>
                </div>
            </div>
        </div>
        
        <div class="tracking-info">
            <div class="tracking-status">
                <div class="status-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/3097/3097144.png" alt="Icono de auto"/>
                </div>
                <div class="status-text">
                    <h3>Tu voluntario está en camino</h3>
                    <p>Llegará en aproximadamente <strong>5 minutos</strong></p>
                </div>
            </div>
            
            <div class="tracking-details">
                <div class="volunteer-profile">
                    <img src="https://cdn-icons-png.flaticon.com/128/4202/4202835.png" alt="Foto del voluntario" class="volunteer-avatar"/>
                    <div class="volunteer-details">
                        <h4>Miguel Sánchez</h4>
                        <div class="volunteer-rating">
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star filled">★</span>
                            <span class="star">★</span>
                            <span class="rating-text">4.0</span>
                        </div>
                        <p>Voluntario desde Enero 2025</p>
                    </div>
                </div>
                
                <div class="contact-volunteer">
                    <button class="btn btn-outline btn-sm">
                        <span class="btn-icon">📞</span> Llamar
                    </button>
                    <button class="btn btn-outline btn-sm">
                        <span class="btn-icon">💬</span> Mensaje
                    </button>
                </div>
            </div>
            
            <div class="trip-details">
                <h4>Detalles del Acompañamiento</h4>
                <div class="trip-info">
                    <div class="trip-info-item">
                        <div class="info-label">Fecha:</div>
                        <div class="info-value">15 de Mayo, 2025</div>
                    </div>
                    <div class="trip-info-item">
                        <div class="info-label">Hora:</div>
                        <div class="info-value">10:00 AM</div>
                    </div>
                    <div class="trip-info-item">
                        <div class="info-label">Tipo:</div>
                        <div class="info-value">CESFAM</div>
                    </div>
                    <div class="trip-info-item">
                        <div class="info-label">Origen:</div>
                        <div class="info-value">Av. Principal 123, Ciudad</div>
                    </div>
                    <div class="trip-info-item">
                        <div class="info-label">Destino:</div>
                        <div class="info-value">CESFAM Central, Av. Salud 456</div>
                    </div>
                </div>
            </div>
            
            <div class="tracking-actions">
                <button class="btn btn-outline">Cancelar Solicitud</button>
                <button class="btn btn-primary" onclick="window.location.href='beneficiario-dashboard.html'">Volver al Inicio</button>
            </div>
        </div>
    </section>
    )
}

export default BeneficiarioSeguimiento;