import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const modalRef = useRef(null);
  const { login } = useContext(AuthContext); // 👈 usamos el contexto
   const navigate = useNavigate();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, password); // 🔥 llama al login del contexto (usa API real)
      navigate("/profile"); 
      // No necesitas navigate aquí, porque el contexto ya redirige
    } catch (err) {
        console.error('Error al iniciar sesión:', err);
        alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login">
      <main className="auth-main">
        <div className="auth-container">
          <h2 className="auth-title">Iniciar Sesión</h2>
          <p className="auth-subtitle">Accede a tu cuenta para solicitar o brindar acompañamiento</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Iniciar sesión
            </button>

            <div className="auth-link">
              <p>
                ¿No tienes cuenta?{' '}
                <a id="btn-registro-link" onClick={openModal}>
                  Regístrate
                </a>
              </p>
            </div>
          </form>

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
        </div>
      </main>
    </div>
  );
}
