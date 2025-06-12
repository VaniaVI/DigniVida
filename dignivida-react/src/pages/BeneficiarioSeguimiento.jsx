import Mapa from '../components/Mapa';
import { useNavigate } from 'react-router-dom';

const BeneficiarioSeguimiento = () =>{

    const origen = [-33.4489, -70.6693];     // Ej: Santiago
    const destino = [-33.4569, -70.6483]; 
    const navigate = useNavigate();

    return(
        <section className="tracking-section">
        <div className="tracking-map">
            <div className="tracking-map">
                <Mapa origen={origen} destino={destino} />
            </div>
            <div className="map-overlay">
                <div className="map-pin origin">
                    <div className="pin-icon">A</div>
                </div>
                <div className="map-pin destination">
                    <div className="pin-icon">B</div>
                </div>
                <div className="map-car">
                    <div className="car-icon">🚗</div>
                </div>
            </div>
        </div>
        
        <div className="tracking-info">
            <div className="tracking-status">
                <div className="status-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/3097/3097144.png" alt="Icono de auto"/>
                </div>
                <div className="status-text">
                    <h3>Tu voluntario está en camino</h3>
                    <p>Llegará en aproximadamente <strong>5 minutos</strong></p>
                </div>
            </div>
            
            <div className="tracking-details">
                <div className="volunteer-profile">
                    <img src="https://cdn-icons-png.flaticon.com/128/4202/4202835.png" alt="Foto del voluntario" className="volunteer-avatar"/>
                    <div className="volunteer-details">
                        <h4>Miguel Sánchez</h4>
                        <div className="volunteer-rating">
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star filled">★</span>
                            <span className="star">★</span>
                            <span className="rating-text">4.0</span>
                        </div>
                        <p>Voluntario desde Enero 2025</p>
                    </div>
                </div>
                
                <div className="contact-volunteer">
                    <button className="btn btn-outline btn-sm">
                        <span className="btn-icon">📞</span> Llamar
                    </button>
                    <button className="btn btn-outline btn-sm">
                        <span className="btn-icon">💬</span> Mensaje
                    </button>
                </div>
            </div>
            
            <div className="trip-details">
                <h4>Detalles del Acompañamiento</h4>
                <div className="trip-info">
                    <div className="trip-info-item">
                        <div className="info-label">Fecha:</div>
                        <div className="info-value">15 de Mayo, 2025</div>
                    </div>
                    <div className="trip-info-item">
                        <div className="info-label">Hora:</div>
                        <div className="info-value">10:00 AM</div>
                    </div>
                    <div className="trip-info-item">
                        <div className="info-label">Tipo:</div>
                        <div className="info-value">CESFAM</div>
                    </div>
                    <div className="trip-info-item">
                        <div className="info-label">Origen:</div>
                        <div className="info-value">Av. Principal 123, Ciudad</div>
                    </div>
                    <div className="trip-info-item">
                        <div className="info-label">Destino:</div>
                        <div className="info-value">CESFAM Central, Av. Salud 456</div>
                    </div>
                </div>
            </div>
            
            <div className="tracking-actions">
                <button className="btn btn-outline">Cancelar Solicitud</button>
                <button className="btn btn-primary" onClick={() => navigate('/beneficiario-dashboard')}></button>

            </div>
        </div>
    </section>
    )
}

export default BeneficiarioSeguimiento;