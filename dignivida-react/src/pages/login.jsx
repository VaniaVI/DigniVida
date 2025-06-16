import React, { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null);
    const navigate = useNavigate();

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === 'test@ejemplo.com' && password === '1234') {
            alert('¡Inicio de sesión exitoso!');
            navigate('/perfilBeneficiario');
        } else {
            alert('Correo o contraseña incorrectos');
        }
    };

    return (
        <div className="login" >
            <main className="auth-main">
                <div className="auth-container">
                    <h2 className="auth-title">Iniciar Sesión</h2>
                    <p className="auth-subtitle">Accede a tu cuenta para solicitar o brindar acompañamiento</p>
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
                        <button type="submit" className="btn btn-primary btn-block" >
                            <Link to="/verificacionSMSbene" style={{color:'white'}}> Iniciar sesión</Link>
                        </button>
                        <div className="auth-link">
                            <p>
                                ¿No tienes cuenta?{' '}
                                <a  id="btn-registro-link" onClick={openModal}>
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
    )
}