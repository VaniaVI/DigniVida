import './Footer3.css';
import {Link} from "react-router";

const Footer3 = () => {
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
                        <li><Link to = '/voluntarioDashboard'>Inicio</Link></li>
                        <li><Link to ='/voluntarioTareas'>Tareas</Link></li>
                        <li><Link to='/voluntarioOportunidades'>Oportunidades</Link></li>
                        <li><Link to ='/perfilVoluntario'>Mi Perfil</Link></li>
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

export default Footer3;