import './Header.css';
import { Link, Link as RouterLink, useLocation } from 'react-router-dom';
import { useModalRegistro } from '../../hooks/useModalRegistro'
import {useModalLogin} from '../../hooks/useModalLogin';


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

  // Modal para el inicio de sesión
  const { isLoginOpen, openLoginModal, closeLoginModal, loginModalRef } = useModalLogin();

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
          <RouterLink onClick={openLoginModal} className="btn btn-primary" id="btn-login">Iniciar Sesión</RouterLink>
          <RouterLink onClick={openModal} className="btn btn-primary" id="btn-registro">Registrarse</RouterLink>
        </div>
      </div>
    </header>

     {/* Modal */}
     {/*Modal para el registro de usuario */}
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
    {/* Modal de Inicio de Sesión */}
    {isLoginOpen && (
      <div className="modal-overlay" ref={loginModalRef} onClick={closeLoginModal}>
        {/* Contenedor del modal */}
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {/* Botón para cerrar el modal */}
          <span className="close-modal" onClick={closeLoginModal}>&times;</span>
          
          {/* Título y subtítulo del modal */}
          <h2 className="auth-title">Iniciar Sesión</h2>
          <p className="auth-subtitle">Accede a tu cuenta para solicitar o brindar acompañamiento</p>
          
          {/* Opciones para elegir el tipo de cuenta */}
          <div className="user-type-selection">
            {/* Opción para Beneficiario */}
            <Link to="/login" className="user-type-card" onClick={closeLoginModal}>
              <img src="https://cdn-icons-png.flaticon.com/128/7433/7433296.png" alt="Beneficiario" />
              <h3>Beneficiario</h3>
              <p>Adultos mayores que necesitan apoyo</p>
            </Link>
            
            {/* Opción para Voluntario */}
            <Link to="/login" className="user-type-card" onClick={closeLoginModal}>
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
