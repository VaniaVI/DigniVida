import './Header.css';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
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
          <button onClick={openModal} className="btn btn-primary" id="btn-registro">Registrarse</button>
        </div>
      </div>
    </header>

      {/* Modal - Solo aparece cuando isOpen es true */}
      {isOpen && (
        <div className="modal" id="modal-registro" ref={modalRef}>
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2 className="auth-title">Elige tipo de registro</h2>
            <p className="auth-subtitle">Selecciona el tipo de cuenta que deseas crear</p>

            <div className="user-type-selection">
              <a href="registro-beneficiario.html" className="user-type-card">
                <div className="user-type-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/7433/7433296.png" alt="Icono pasajero" />
                </div>
                <h3>Beneficiario</h3>
                <p>Para adultos mayores o personas con movilidad reducida que necesitan acompañamiento</p>
              </a>

              <a href="registro-voluntario.html" className="user-type-card">
                <div className="user-type-icon">
                  <img src="https://cdn-icons-png.flaticon.com/128/4148/4148613.png" alt="Icono voluntario" />
                </div>
                <h3>Voluntario</h3>
                <p>Para personas que desean ofrecer su tiempo y ayuda a quienes lo necesitan</p>
              </a>
            </div>
          </div>
        </div>
      )}
  </>
  );

};

export default Header;
