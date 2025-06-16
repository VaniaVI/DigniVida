import './Footer2.css';
import {Link} from "react-router";

const Footer2 = () => {
    return (
    <footer>
        <div className="container">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Digni<span>Vida</span></h2>
                    <p>Dignivida es amor, cuidado y bienestar</p>
                </div>
                <div className="footer-links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><Link to = '/'>Inicio</Link></li>
                        <li><Link to ='/beneficiarioSolicitaAcompa'>Solicitar Acompañamiento</Link></li>
                        <li><Link to='/beneficiarioHistorial'>Mi Historial</Link></li>
                        <li><Link to ='/perfilBeneficiario'>Mi Perfil</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><Link to ="/preguntasFrecuentes">Preguntas Frecuentes</Link></li>
                        <li><Link to = '/terminosYCondiciones' >Términos y Condiciones</Link></li>
                        <li><Link to = '/politicasDePrivacidad'>Política de Privacidad</Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>¿Necesitas ayuda? Llámanos al:</p>
                    <p className="contact-phone">+569 44 55 66 77</p>
                    <p>Lunes a Viernes: 9:00 - 18:00 hs</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 DigniVida. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer2;