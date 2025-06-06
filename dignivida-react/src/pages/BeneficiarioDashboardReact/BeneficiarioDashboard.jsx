import { Link } from "react-router-dom";
import "../EstilosBeneficiarioReact.css"

const BeneficiarioDashboard = () => {
    return (
        <div className="BeneficiarioDashboard">
            <section className="dashboard-hero">
                    <div className="container">
                    <div className="welcome-message">
                    <h2>Bienvenida, Vania</h2>
                    <p>¿Qué te gustaría hacer hoy?</p>
        </div>
        </div>
        </section>

    <section className="dashboard-content">
        <div className="container">
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <div className="card-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/166/166258.png" alt="Icono solicitud" />
                    </div>
                    <h3>Solicitar Acompañamiento</h3>
                    <p>Crea una nueva solicitud para que un voluntario te acompañe a realizar un trámite.</p>
                    <Link to ="/beneficiarioSolicitaAcompa" class="btn btn-primary">Solicitar</Link>
                </div>
                
                <div className="dashboard-card">
                    <div className="card-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/10994/10994652.png" alt="Icono historial" />
                    </div>
                    <h3>Mi Historial</h3>
                    <p>Revisa el historial de tus solicitudes anteriores y los voluntarios que te han ayudado.</p>
                    <Link to ='/beneficiarioHistorial' class="btn btn-primary">Ver Historial</Link>
                </div>
                
                <div className="dashboard-card">
                    <div className="card-icon">
                    <img src="https://cdn-icons-png.flaticon.com/128/166/166256.png" alt="Icono perfil" />
                    </div>
                    <h3>Mi Perfil</h3>
                    <p>Actualiza tu información personal, datos médicos y contactos de emergencia.</p>
                    <Link to ='/perfilBeneficiario' class="btn btn-primary">Editar Perfil</Link>
                </div>
            </div>
            
            <div className="active-request">
                <h3>Solicitud Activa</h3>
                <div className="request-card">
                    <div className="request-status">
                        <span className="status-badge confirmed">Confirmada</span>
                        <p className="status-text">Tu voluntario llegará en aproximadamente 15 minutos</p>
                    </div>
                    <div className="request-details">
                        <div className="detail-item">
                            <strong>Fecha:</strong> 15 de Mayo, 2025
                        </div>
                        <div className="detail-item">
                            <strong>Hora:</strong> 10:00 AM
                        </div>
                        <div className="detail-item">
                            <strong>Tipo:</strong> CESFAM
                        </div>
                        <div className="detail-item">
                            <strong>Origen:</strong> Av. Principal 123, Ciudad
                        </div>
                        <div className="detail-item">
                            <strong>Destino:</strong> CESFAM Central, Av. Salud 456
                        </div>
                    </div>
                    <div className="volunteer-info">
                        {/* <!-- <img src="/placeholder.svg?height=60&width=60" alt="Foto del voluntario" class="volunteer-avatar"> --> */}
                        <div className="volunteer-details">
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