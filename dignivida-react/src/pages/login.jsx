import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Beneficiario');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'test@ejemplo.com' && password === '1234') {
      alert(`¡Inicio de sesión exitoso como ${userType}!`);
      navigate(userType === 'Voluntario' ? '/perfilVoluntario' : '/perfilBeneficiario');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  return (
    <div className="login">
      <main className="auth-main">
        <div className="auth-container">
          <h2 className="auth-title">Iniciar Sesión</h2>
          <p className="auth-subtitle">
            Accede a tu cuenta para solicitar o brindar acompañamiento
          </p>

          <form className="auth-form" onSubmit={handleSubmit}>
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

            <div className="form-group">
              <label htmlFor="userType">Tipo de usuario</label>
              <select
                id="userType"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="Beneficiario">Beneficiario</option>
                <option value="Voluntario">Voluntario</option>
              </select>
            </div>

<div className="form-group-remember-me1">
  <label>
    <span className="form-group-remember-me2">Recordarme</span>
        <input
      type="checkbox"
      checked={rememberMe}
      onChange={(e) => setRememberMe(e.target.checked)}
    />
  </label>
</div>



            <button type="submit" className="btn btn-primary btn-block">
              Ingresar
            </button>
          </form>

          <div className="auth-link">
            <p>
              ¿No tienes cuenta?{' '}
              <a className="regiscolor" href="registro-pasajero.html" id="btn-registro-link">
                Regístrate
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
