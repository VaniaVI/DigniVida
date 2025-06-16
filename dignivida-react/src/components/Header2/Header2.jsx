import './Header2.css';
import { Link, useLocation } from 'react-router-dom';

const Header2 = ({ userName }) => {
  const location = useLocation();
  const isHome = location.pathname === '/beneficiarioDashboard';

  // Puedes personalizar estos ítems según lo que deba ver un usuario logeado
  const navItems = [
    { to: '/beneficiarioSolicitaAcompa', label: 'Solicitar acompañamiento' },
    { to: '/beneficiarioHistorial', label: 'Mi Historial' },
    { to: '/perfilBeneficiario', label: 'Mi Perfil' },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/"><h1>Digni<span>Vida</span></h1></Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            {navItems.map(item => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="auth-buttons">
          <span className="user-name">
            {userName ? `Hola, ${userName}` : ""}
          </span>
          <Link to="/" className="btn btn-outline">
            Cerrar sesión
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header2;
