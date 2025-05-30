import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <div class="container">
            <div class="logo">
                <a href="/index.html"><h1>Digni<span>Vida</span></h1></a>
            </div>
            <nav>
                <ul>
                    <li><Link to="/perfilBeneficiario">Inicio</Link></li>
                    <li><a href="index.html#servicios">Servicios</a></li>
                    <li><a href="index.html#como-funciona">Cómo Funciona</a></li>
                    <li><a href="index.html#voluntarios">Voluntarios</a></li>
                    <li><a href="index.html#contacto">Contacto</a></li>
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