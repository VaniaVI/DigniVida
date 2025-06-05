import './Footer.css';
import {Link} from "react-router";

const Footer = () => {
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
                        <li><Link to ='/beneSolicitud'>Solicitar Acompañamiento</Link></li>
                        <li><a href="beneficiario-historial.html">Mi Historial</a></li>
                        <li><Link to ='/perfilBeneficiario'>Mi Perfil</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contacto</h3>
                    <p>¿Necesitas ayuda? Llámanos al:</p>
                    <p className="contact-phone">+56944556677</p>
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

export default Footer;