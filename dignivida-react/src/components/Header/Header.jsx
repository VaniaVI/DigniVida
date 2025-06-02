import './Header.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header>
        <div class="container">
            <div class="logo">
                <RouterLink to="/"><h1>Digni<span>Vida</span></h1></RouterLink>
            </div>
            <nav>
                <ul>
                    <li><RouterLink to="/">Inicio</RouterLink></li>
                    <li><ScrollLink to="servicios" smooth={true}>Servicios</ScrollLink></li>
                    <li><ScrollLink to="como-funciona" smooth={true}>Cómo Funciona</ScrollLink></li>
                    <li><ScrollLink to="voluntarios" smooth={true}>Voluntarios</ScrollLink></li>
                    <li><ScrollLink to="contacto" smooth={true}>Contacto</ScrollLink></li>
                </ul>
            </nav>
            <div class="auth-buttons">
                <a href="login.html" class="btn btn-outline">Iniciar Sesión</a>
                <a href="" class="btn btn-primary" id="btn-registro">Registrarse</a>
            </div>
        </div>
    </header>
  );
}
export default Header;