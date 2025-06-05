import './Header.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
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
            <div className="auth-buttons">
                <RouterLink to="/login" className="btn btn-outline">Iniciar Sesión</RouterLink>
                <RouterLink to="/registroBeneficiario" className="btn btn-primary" id="btn-registro">Registrarse</RouterLink>
            </div>
        </div>
    </header>
  );
}
export default Header;