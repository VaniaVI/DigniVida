import './Header.css';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollItems = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'como-funciona', label: 'Cómo Funciona' },
    { id: 'voluntarios', label: 'Voluntarios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header>
      <div className="container">
        <div className="logo">
          <RouterLink to="/"><h1>Digni<span>Vida</span></h1></RouterLink>
        </div>
        <nav>
          <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            {scrollItems.map(item => (
              <li key={item.id}>
                {isHome ? (
                  <a href={`#${item.id}`}>{item.label}</a>
                ) : (
                  <RouterLink to="/" state={{ scrollTo: item.id }}>
                    {item.label}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="auth-buttons">
          <RouterLink to="/login" className="btn btn-outline">Iniciar Sesión</RouterLink>
          <RouterLink to="/registroBeneficiario" className="btn btn-primary" id="btn-registro">Registrarse</RouterLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
