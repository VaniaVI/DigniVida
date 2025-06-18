import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hola, ¿qué deseas hacer? Escribe:\n\n1. Iniciar Sesión\n2. Login Beneficiario\n3. Login Voluntario\n4. Quiero Contactarme" }
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  // Auto scroll chat to bottom on new messages
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((msgs) => [...msgs, { from: "user", text: trimmed }]);
    setInput("");

    // Procesar respuesta del bot
    setTimeout(() => {
      if (trimmed === "1") {
        setMessages((msgs) => [...msgs, { from: "bot", text: "Perfecto, te llevo a Iniciar Sesión." }]);
        setTimeout(() => navigate("/login"), 1000);
      } else if (trimmed === "2") {
        setMessages((msgs) => [...msgs, { from: "bot", text: "Bien, te llevo al Login de Beneficiario." }]);
        setTimeout(() => navigate("/registroBeneficiario"), 1000);
      } else if (trimmed === "3") {
        setMessages((msgs) => [...msgs, { from: "bot", text: "Ok, te llevo al Login de Voluntario." }]);
        setTimeout(() => navigate("/registroVoluntario"), 1000);
      } else if (trimmed === "4") {
        setMessages((msgs) => [...msgs, { from: "bot", text: "Ok, te llevo a contacto." }]);
        setTimeout(() => navigate("/", {state:{scrollTo: "contacto" }}), 1000);
      } else {
        setMessages((msgs) => [...msgs, { from: "bot", text: "No entendí esa opción. Por favor escribe 1, 2, 3 o 4." }]);
      }
      
      
    }, 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Botón para abrir/cerrar chat */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          borderRadius: "50%",
          width: 60,
          height: 60,
          backgroundColor: "#2E8B57",
          color: "white",
          fontSize: 24,
          border: "none",
          cursor: "pointer",
          zIndex: 1001,
        }}
        aria-label={open ? "Cerrar chat" : "Abrir chat"}
      >
        {open ? "×" : "💬"}
      </button>

      {/* Ventana de chat */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 320,
            maxHeight: 400,
            backgroundColor: "white",
            borderRadius: 8,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Chat de ayuda"
        >
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: 10,
              fontSize: 14,
              lineHeight: 1.4,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 8,
                  textAlign: msg.from === "bot" ? "left" : "right",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: msg.from === "bot" ? "#f1f0f0" : "#2E8B57",
                    color: msg.from === "bot" ? "black" : "white",
                    padding: "8px 12px",
                    borderRadius: 16,
                    whiteSpace: "pre-line",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: 8, borderTop: "1px solid #ddd" }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
              placeholder="Escribe tu mensaje..."
              style={{
                width: "100%",
                resize: "none",
                borderRadius: 4,
                border: "1px solid #ccc",
                padding: 6,
                fontSize: 14,
                boxSizing: "border-box",
              }}
              aria-label="Escribe tu mensaje"
            />
            <button
              onClick={handleSend}
              style={{
                marginTop: 6,
                width: "100%",
                backgroundColor: "#2E8B57",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "8px 0",
                fontSize: 14,
                cursor: "pointer",
              }}
              aria-label="Enviar mensaje"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
