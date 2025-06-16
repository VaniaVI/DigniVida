//VOLUNTARIO

import './Header3.css';
import { Link, useLocation } from 'react-router-dom';

const Header3 = ({ userName }) => {
  const location = useLocation();
  const isHome = location.pathname === '/voluntarioioDashboard';

  // Puedes personalizar estos ítems según lo que deba ver un usuario logeado
  const navItems = [

    { to: '/voluntarioTareas', label: 'Tareas' },
    { to: '/voluntarioOportunidades', label: ' Oportunidades' },    
    { to: '/perfilVoluntario', label: 'Mi perfil' },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Digni<span>Vida</span></h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/voluntarioDashboard">Inicio</Link></li>
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
          <Link to="/login" className="btn btn-outline">
            Cerrar sesión
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header3;
