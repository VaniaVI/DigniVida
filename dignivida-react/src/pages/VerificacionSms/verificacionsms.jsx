import { useVerificacionSMS } from "../../hooks/useVerificacionSms"

const VerificacionSMS = () => {
  const { codigo, loading, error, success, handleInputChange, handleKeyDown, verificarCodigo, inputsRef } =
    useVerificacionSMS()

  if (success) {
    return (
      <section className="auth-section">
        <div className="container">
          <div className="auth-container">
            <h2 className="auth-title">¡Verificación Exitosa!</h2>
            <p className="auth-subtitle">Tu cuenta ha sido creada correctamente.</p>
            <div className="verification-message success-message">
              <p>¡Código verificado correctamente! Tu cuenta ha sido creada.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container">
          <h2 className="auth-title">Verificación SMS</h2>
          <p className="auth-subtitle">Hemos enviado un código de verificación a tu teléfono</p>

          <form className="auth-form" onSubmit={verificarCodigo}>
            <div className="form-group">
              <label htmlFor="codigo">Código de verificación</label>
              <div className="verification-code-container">
                {codigo.map((valor, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="verification-code-input"
                    value={valor}
                    onChange={(e) => handleInputChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                    disabled={loading}
                    required
                  />
                ))}
              </div>
            </div>

            {error && (
              <div className="verification-message error-message">
                <p>{error}</p>
              </div>
            )}

            <div className="form-group">
              <p className="resend-code">
                ¿No recibiste el código? <a href="#">Reenviar código</a>
              </p>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading || codigo.some((c) => c === "")}
            >
              {loading ? "Verificando..." : "Verificar"}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              <a href="/">Volver al inicio</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VerificacionSMS
