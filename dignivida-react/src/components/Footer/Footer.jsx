import './Footer.css';

const Footer = () => {
    return (
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-logo">
                    <h2>Digni<span>Vida</span></h2>
                    <p>Dignivida es amor, cuidado y bienestar</p>
                </div>
                <div class="footer-links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        <li><a href="beneficiario-dashboard.html">Inicio</a></li>
                        <li><a href="beneficiario-solicitud.html">Solicitar Acompañamiento</a></li>
                        <li><a href="beneficiario-historial.html">Mi Historial</a></li>
                        <li><a href="perfil-beneficiario.html">Mi Perfil</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h3>Ayuda</h3>
                    <ul>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3>Contacto</h3>
                    <p>¿Necesitas ayuda? Llámanos al:</p>
                    <p class="contact-phone">+1569 67850875</p>
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 DigniVida. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;