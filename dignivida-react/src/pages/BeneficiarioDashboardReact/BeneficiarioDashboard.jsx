import { Link } from "react-router-dom";
import "../EstilosBeneficiarioReact.css"

const BeneficiarioDashboard = () => {
    return (
        <div className="BeneficiarioDashboard">
            <section class="dashboard-hero">
                    <div class="container">
                    <div class="welcome-message">
                    <h2>Bienvenida, Vania</h2>
                    <p>¿Qué te gustaría hacer hoy?</p>
        </div>
        </div>
        </section>

    <section class="dashboard-content">
        <div class="container">
            <div class="dashboard-cards">
                <div class="dashboard-card">
                    <div class="card-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/166/166258.png" alt="Icono solicitud" />
                    </div>
                    <h3>Solicitar Acompañamiento</h3>
                    <p>Crea una nueva solicitud para que un voluntario te acompañe a realizar un trámite.</p>
                    <a href="beneficiario-solicitud.html" class="btn btn-primary">Solicitar</a>
                </div>
                
                <div class="dashboard-card">
                    <div class="card-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/10994/10994652.png" alt="Icono historial" />
                    </div>
                    <h3>Mi Historial</h3>
                    <p>Revisa el historial de tus solicitudes anteriores y los voluntarios que te han ayudado.</p>
                    <a href="beneficiario-historial.html" class="btn btn-primary">Ver Historial</a>
                </div>
                
                <div class="dashboard-card">
                    <div class="card-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/166/166256.png" alt="Icono perfil" />
                    </div>
                    <h3>Mi Perfil</h3>
                    <p>Actualiza tu información personal, datos médicos y contactos de emergencia.</p>
                    <a href="perfil-beneficiario.html" class="btn btn-primary">Editar Perfil</a>
                </div>
            </div>
            
            <div class="active-request">
                <h3>Solicitud Activa</h3>
                <div class="request-card">
                    <div class="request-status">
                        <span class="status-badge confirmed">Confirmada</span>
                        <p class="status-text">Tu voluntario llegará en aproximadamente 15 minutos</p>
                    </div>
                    <div class="request-details">
                        <div class="detail-item">
                            <strong>Fecha:</strong> 15 de Mayo, 2025
                        </div>
                        <div class="detail-item">
                            <strong>Hora:</strong> 10:00 AM
                        </div>
                        <div class="detail-item">
                            <strong>Tipo:</strong> CESFAM
                        </div>
                        <div class="detail-item">
                            <strong>Origen:</strong> Av. Principal 123, Ciudad
                        </div>
                        <div class="detail-item">
                            <strong>Destino:</strong> CESFAM Central, Av. Salud 456
                        </div>
                    </div>
                    <div class="volunteer-info">
                        {/* <!-- <img src="/placeholder.svg?height=60&width=60" alt="Foto del voluntario" class="volunteer-avatar"> --> */}
                        <div class="volunteer-details">
                            <h4>Miguel Sánchez</h4>
                            <p>Tu voluntario asignado</p>
                            <Link to="/beneficiarioSeguimiento" class="btn btn-secondary">Ver Seguimiento</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
};


export default BeneficiarioDashboard;  