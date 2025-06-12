import './Header.css';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
import { useModalRegistro } from '../../hooks/useModalRegistro'


const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollItems = [
    { id: 'servicios', label: 'Servicios' },
    { id: 'como-funciona', label: 'Cómo Funciona' },
    { id: 'voluntarios', label: 'Voluntarios' },
    { id: 'contacto', label: 'Contacto' },
  ];

  // Abre el modal o pop up de registro de usuario 
  const { isOpen, openModal, closeModal, modalRef } = useModalRegistro()

  return (
    <>
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
          <RouterLink onClick={openModal} className="btn btn-primary" id="btn-registro">Registrarse</RouterLink>
        </div>
      </div>
    </header>

     {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" ref={modalRef}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2 className="auth-title">Elige tipo de registro</h2>
            <p className="auth-subtitle">Selecciona el tipo de cuenta que deseas crear</p>

            <div className="user-type-selection">
              <Link to="/registroBeneficiario" className="user-type-card">
                <img src="https://cdn-icons-png.flaticon.com/128/7433/7433296.png" alt="Beneficiario" />
                <h3>Beneficiario</h3>
                <p>Adultos mayores que necesitan apoyo</p>
              </Link>

              <Link to="/registroVoluntario" className="user-type-card">
                <img src="https://cdn-icons-png.flaticon.com/128/4148/4148613.png" alt="Voluntario" />
                <h3>Voluntario</h3>
                <p>Personas que quieren ayudar</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );

};

export default Header;
