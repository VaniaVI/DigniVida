import React, { useState, useRef, useEffect } from 'react';
import Mapa from '../components/Mapa';
import { useNavigate } from 'react-router-dom';

const VOLUNTEER = {
  nombre: "Miguel Sánchez",
  telefono: "+56 9 1234 5678",
  correo: "miguel.sanchez@mail.com",
  avatar: "https://cdn-icons-png.flaticon.com/128/4202/4202835.png",
  rating: 4.0,
  desde: "Enero 2025"
};

const TRIP = {
  fecha: "15 de Mayo, 2025",
  hora: "10:00 AM",
  tipo: "CESFAM",
  origen: "Av. Principal 123, Ciudad",
  destino: "CESFAM Central, Av. Salud 456"
};

const initialMessages = [
  { from: "voluntario", text: "¡Hola! Estoy en camino, cualquier cosa me avisas por aquí." }
];

const BeneficiarioSeguimiento = () => {
  const origen = [-33.4489, -70.6693];     // Ej: Santiago
  const destino = [-33.4569, -70.6483];
  const navigate = useNavigate();

  // Modals
  const [showContact, setShowContact] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Chat simulation
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Auto-scroll chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, showChat]);

  // Simulate volunteer response
  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: "yo", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "voluntario", text: "¡Recibido! Nos vemos pronto 😊" }
      ]);
    }, 1200);
  };

  return (
    <section className="tracking-section">
      <div className="tracking-map">
        <div className="tracking-map">
          <Mapa origen={origen} destino={destino} />
        </div>
        <div className="map-overlay">
          <div className="map-pin origin">
            <div className="pin-icon">A</div>
          </div>
          <div className="map-pin destination">
            <div className="pin-icon">B</div>
          </div>
          <div className="map-car">
            <div className="car-icon">🚗</div>
          </div>
        </div>
      </div>

      <div className="tracking-info">
        <div className="tracking-status">
          <div className="status-icon">
            <img src="https://cdn-icons-png.flaticon.com/128/3097/3097144.png" alt="Icono de auto" />
          </div>
          <div className="status-text">
            <h3>Tu voluntario está en camino</h3>
            <p>Llegará en aproximadamente <strong>5 minutos</strong></p>
          </div>
        </div>

        <div className="tracking-details">
          <div className="volunteer-profile">
            <img src={VOLUNTEER.avatar} alt="Foto del voluntario" className="volunteer-avatar" />
            <div className="volunteer-details">
              <h4>{VOLUNTEER.nombre}</h4>
              <div className="volunteer-rating">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className={`star${i <= Math.round(VOLUNTEER.rating) ? " filled" : ""}`}>★</span>
                ))}
                <span className="rating-text">{VOLUNTEER.rating.toFixed(1)}</span>
              </div>
              <p>Voluntario desde {VOLUNTEER.desde}</p>
            </div>
          </div>

          <div className="contact-volunteer">
            <button className="btn btn-outline btn-sm" onClick={() => setShowContact(true)}>
              <span className="btn-icon">📞</span> Llamar
            </button>
            <button className="btn btn-outline btn-sm" onClick={() => setShowChat(true)}>
              <span className="btn-icon">💬</span> Mensaje
            </button>
          </div>
        </div>

        <div className="trip-details">
          <h4>Detalles del Acompañamiento</h4>
          <div className="trip-info">
            <div className="trip-info-item">
              <div className="info-label">Fecha:</div>
              <div className="info-value">{TRIP.fecha}</div>
            </div>
            <div className="trip-info-item">
              <div className="info-label">Hora:</div>
              <div className="info-value">{TRIP.hora}</div>
            </div>
            <div className="trip-info-item">
              <div className="info-label">Tipo:</div>
              <div className="info-value">{TRIP.tipo}</div>
            </div>
            <div className="trip-info-item">
              <div className="info-label">Origen:</div>
              <div className="info-value">{TRIP.origen}</div>
            </div>
            <div className="trip-info-item">
              <div className="info-label">Destino:</div>
              <div className="info-value">{TRIP.destino}</div>
            </div>
          </div>
        </div>

        <div className="tracking-actions">
          <button className="btn btn-outline" onClick={() => setShowDetails(true)}>
            Detalles
          </button>
          <button className="btn btn-primary" onClick={() => navigate('/beneficiarioHistorial')}>
            Ir al Historial
          </button>
        </div>
      </div>

      {/* Modal: Información de contacto */}
      {showContact && (
        <div className="modal-overlay" onClick={() => setShowContact(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Información de Contacto</h3>
            <ul>
              <li><strong>Nombre:</strong> {VOLUNTEER.nombre}</li>
              <li><strong>Teléfono:</strong> {VOLUNTEER.telefono}</li>
              <li><strong>Correo:</strong> {VOLUNTEER.correo}</li>
            </ul>
            <button className="btn btn-primary btn-sm" onClick={() => setShowContact(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal: Chat simulado */}
      {showChat && (
        <div className="modal-overlay" onClick={() => setShowChat(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{maxWidth: 400}}>
            <h3>Chat con {VOLUNTEER.nombre}</h3>
            <div className="chat-box" style={{height: 220, overflowY: "auto", background: "#f7f7f7", padding: 10, marginBottom: 10, borderRadius: 8}}>
              {messages.map((msg, i) => (
                <div key={i} style={{
                  textAlign: msg.from === "yo" ? "right" : "left",
                  margin: "8px 0"
                }}>
                  <span style={{
                    display: "inline-block",
                    background: msg.from === "yo" ? "#d1e7dd" : "#e2e3e5",
                    padding: "6px 12px",
                    borderRadius: 16,
                    maxWidth: "80%",
                    wordBreak: "break-word"
                  }}>
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={chatEndRef}></div>
            </div>
            <div style={{display: "flex", gap: 4}}>
              <input
                type="text"
                className="form-control"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
                onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
                style={{flex: 1}}
              />
              <button className="btn btn-primary btn-sm" onClick={handleSend}>Enviar</button>
            </div>
            <button className="btn btn-outline btn-sm" style={{marginTop: 10}} onClick={() => setShowChat(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal: Detalles del acompañamiento */}
      {showDetails && (
        <div className="modal-overlay" onClick={() => setShowDetails(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Detalles del Acompañamiento</h3>
            <ul>
              <li><strong>Fecha:</strong> {TRIP.fecha}</li>
              <li><strong>Hora:</strong> {TRIP.hora}</li>
              <li><strong>Tipo:</strong> {TRIP.tipo}</li>
              <li><strong>Origen:</strong> {TRIP.origen}</li>
              <li><strong>Destino:</strong> {TRIP.destino}</li>
              <li><strong>Voluntario:</strong> {VOLUNTEER.nombre}</li>
              <li><strong>Teléfono:</strong> {VOLUNTEER.telefono}</li>
              <li><strong>Correo:</strong> {VOLUNTEER.correo}</li>
            </ul>
            <button className="btn btn-primary btn-sm" onClick={() => setShowDetails(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Estilos básicos para los modales */}
      <style>
        {`
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; z-index: 1000;
        }
        .modal-content {
          background: #fff; padding: 2em; border-radius: 8px; min-width: 320px; max-width: 90vw;
        }
        `}
      </style>
    </section>
  );
};

export default BeneficiarioSeguimiento;
