import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState(null);
    const [tipoMensaje, setTipoMensaje] = useState(""); // "exito" o "error"

    const location = useLocation();
    const isHome = location.pathname === "/";

    const validarEmail = (email) => {
        // Validación simple de email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validarEmail(email)) {
            setMensaje("Por favor ingresa un correo válido.");
            setTipoMensaje("error");
            return;
        }
        // Aquí puedes agregar la lógica real de suscripción (API, etc.)
        setMensaje("¡Te has suscrito exitosamente!");
        setTipoMensaje("exito");
        setEmail(""); // Limpiar input
        setTimeout(() => setMensaje(null), 3500);
    };

    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <h2>Digni<span>Vida</span></h2>
                        <p>Dignivida es amor, cuidado y bienestar</p>
                    </div>
                    <div className="footer-links">
                        <h3>Enlaces Rápidos</h3>
                        <ul>
                            
                            <li>
                                {isHome ? (
                                    <a href="#servicios">Servicios</a>
                                ) : (
                                    <Link to="/" state={{ scrollTo: "servicios" }}>Servicios</Link>
                                )}
                            </li>
                            <li>
                                {isHome ? (
                                    <a href="#como-funciona">Cómo Funciona</a>
                                ) : (
                                    <Link to="/" state={{ scrollTo: "como-funciona" }}>Cómo Funciona</Link>
                                )}
                            </li>
                            <li>
                                {isHome ? (
                                    <a href="#voluntarios">Voluntarios</a>
                                ) : (
                                    <Link to="/" state={{ scrollTo: "voluntarios" }}>Voluntarios</Link>
                                )}
                            </li>
                            <li>
                                {isHome ? (
                                    <a href="#contacto">Contáctanos</a>
                                ) : (
                                    <Link to="/" state={{ scrollTo: "contacto" }}>Contáctanos</Link>
                                )}
                            </li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h3>Servicios</h3>
                        <ul>
                            <li id="preg">Citas Médicas</li>
                            <li id="termin">Trámites Bancarios</li>
                            <li id="poli">Compras</li>
                        </ul>
                    </div>
                    <div className="footer-input">
                        <h3>Suscríbete a nuestro boletín</h3>
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                className="newsletter-input"
                                placeholder="Tu correo electrónico"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                style={tipoMensaje === "error" ? { borderColor: "#dc3545" } : {}}
                            />
                            <button type="submit" className="btn btn-primary newsletter-btn">
                                Suscribirse
                            </button>
                        </form>
                        {mensaje && (
                            <div
                                style={{
                                    marginTop: 10,
                                    color: tipoMensaje === "exito" ? "white" : "black",
                                    background: tipoMensaje === "exito"
                                        ? "rgba(46, 139, 87, 0.10)"
                                        : "rgba(220, 53, 69, 0.10)",
                                    border: `1px solid ${tipoMensaje === "exito" ? "#2E8B57" : "#dc3545"}`,
                                    borderRadius: 6,
                                    padding: "8px 14px",
                                    fontSize: "0.98rem",
                                    textAlign: "center",
                                    transition: "all 0.3s"
                                }}
                            >
                                {mensaje}
                            </div>
                        )}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 DigniVida. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
