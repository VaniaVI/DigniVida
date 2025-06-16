import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const VerificacionSMSbene = () => {
  const [timer, setTimer] = useState(60); // 1 minuto en segundos
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [verificando, setVerificando] = useState(false);
  const navigate = useNavigate();

  // Formatea el tiempo en MM:SS
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // Timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  // Manejo de inputs individuales
  const handleChange = (i, e) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) {
      setInputs((prev) => prev.map((v, idx) => (idx === i ? "" : v)));
      return;
    }
    if (val.length === 1) {
      setInputs((prev) => prev.map((v, idx) => (idx === i ? val : v)));
      if (i < 5) {
        inputRefs.current[i + 1].focus();
      }
    }
  };

  // Navegación con teclado
  const handleKeyDown = (i, e) => {
    if (e.key === "Backspace" && !inputs[i] && i > 0) {
      inputRefs.current[i - 1].focus();
    }
    if (e.key === "ArrowLeft" && i > 0) {
      inputRefs.current[i - 1].focus();
    }
    if (e.key === "ArrowRight" && i < 5) {
      inputRefs.current[i + 1].focus();
    }
  };

  // Reenvío del código
  const handleReenviar = (e) => {
    e.preventDefault();
    setTimer(60);
    alert("Se envió un nuevo código de verificación al teléfono.");
  };

  // Habilita el botón solo si hay 6 dígitos
  const codigoCompleto = inputs.every((v) => v.length === 1);

  // Verificación
  const handleSubmit = (e) => {
    e.preventDefault();
    if (codigoCompleto) {
      alert("¡Código verificado correctamente! Tu cuenta ha sido creada.");
      navigate("/beneficiarioDashboard"); // Cambia la ruta si tu dashboard tiene otro path
    }
  };

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container">
          <h2 className="auth-title">Verificación SMS</h2>
          <p className="auth-subtitle">
            Hemos enviado un código de verificación a tu teléfono
          </p>

          <form
            id="verification-form"
            className="auth-form"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className="form-group">
              <label htmlFor="codigo">Código de verificación</label>
              <div className="verification-code-container">
                {inputs.map((val, i) => (
                  <input
                    key={i}
                    type="text"
                    maxLength={1}
                    className="verification-code-input"
                    value={val}
                    onChange={(e) => handleChange(i, e)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    ref={(el) => (inputRefs.current[i] = el)}
                    autoFocus={i === 0}
                    required
                    inputMode="numeric"
                  />
                ))}
              </div>
            </div>

            <div className="form-group">
              <p className="countdown" style={{ marginBottom: 8 }}>
                Puedes solicitar un nuevo código en:{" "}
                <span>{formatTime(timer)}</span>
              </p>
              <p className="resend-code">
                ¿No recibiste el código?{" "}
                <a
                  href="#"
                  onClick={handleReenviar}
                  style={{
                    pointerEvents: timer === 0 ? "auto" : "none",
                    color: timer === 0 ? "#1976d2" : "#aaa",
                    cursor: timer === 0 ? "pointer" : "not-allowed",
                    textDecoration: timer === 0 ? "underline" : "none",
                  }}
                  tabIndex={timer === 0 ? 0 : -1}
                  aria-disabled={timer !== 0}
                >
                  Reenviar código
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={!codigoCompleto || verificando}
            >
              {verificando ? "Verificando..." : "Verificar"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              <Link to="/">Volver al inicio</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificacionSMSbene;
