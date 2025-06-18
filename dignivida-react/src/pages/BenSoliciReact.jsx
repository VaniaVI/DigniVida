import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BenSoliciReact() {
  // Simula la dirección de casa guardada en el perfil (puedes traerla de props, contexto, etc.)
  const direccionCasa = "Los manantiales 23,Chicureo";

  const [form, setForm] = useState({
    'tipo-tramite': '',
    'otro-tramite': '',
    fecha: '',
    hora: '',
    'direccion-origen': '',
    'direccion-destino': '',
    notas: ''
  });
  const [usarCasa, setUsarCasa] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Maneja cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Maneja el check de "usar mi dirección de casa"
  const handleCasaCheck = (e) => {
    const checked = e.target.checked;
    setUsarCasa(checked);
    setForm((prev) => ({
      ...prev,
      'direccion-origen': checked ? direccionCasa : ''
    }));
  };

  // Validación y envío
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form['tipo-tramite'] ||
      (form['tipo-tramite'] === 'otro' && !form['otro-tramite']) ||
      !form.fecha ||
      !form.hora ||
      !form['direccion-origen'] ||
      !form['direccion-destino']
    ) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }
    setError('');
    navigate('/beneficiarioSolicitado', {
      state: {
        tramite: form['tipo-tramite'],
        origen: form['direccion-origen'],
        destino: form['direccion-destino'],
        fecha: form.fecha,
        hora: form.hora
      }
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h2 className="section-title">Solicitar Acompañamiento</h2>
          <p style={{ color: 'var(--text-dark)', textAlign: 'center', marginBottom: 0 }}>
            Completa el formulario para solicitar que un voluntario te acompañe
          </p>
        </div>
      </section>

      <section className="form-section">
        <div
          className="container"
          style={{
            display: 'flex',
            gap: 40,
            alignItems: 'flex-start',
            flexWrap: 'wrap'
          }}
        >
          <div className="form-container" style={{ flex: 2, minWidth: 320 }}>
            {error && (
              <div className="error-message" style={{
                background: 'rgba(220,53,69,0.1)',
                border: '1px solid #dc3545',
                color: '#dc3545',
                borderRadius: 5,
                padding: 12,
                marginBottom: 20,
                textAlign: 'center'
              }}>
                {error}
              </div>
            )}
            <form id="solicitud-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="tipo-tramite">Tipo de Trámite</label>
                <select
                  id="tipo-tramite"
                  name="tipo-tramite"
                  required
                  value={form['tipo-tramite']}
                  onChange={handleChange}
                >
                  <option value="">Selecciona el tipo de trámite</option>
                  <option value="tramites">Trámites</option>
                  <option value="Apoyo-en-gestiones-medicas">Apoyo en gestiones médicas</option>
                  <option value="salidas">Salidas</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fecha">Fecha</label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    min=""
                    value={form.fecha}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="hora">Hora</label>
                  <select
                    id="hora"
                    name="hora"
                    required
                    value={form.hora}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona la hora</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="direccion-origen">Dirección de Origen</label>
                <input
                  type="text"
                  id="direccion-origen"
                  name="direccion-origen"
                  placeholder="¿Dónde te recogemos?"
                  required
                  value={form['direccion-origen']}
                  onChange={handleChange}
                  disabled={usarCasa}
                />
                <div className="address-options">
                  <label className="address-option">
                    <input
                      type="checkbox"
                      checked={usarCasa}
                      onChange={handleCasaCheck}
                    />
                    Usar la dirección de mi casa
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="direccion-destino">Dirección de Destino</label>
                <input
                  type="text"
                  id="direccion-destino"
                  name="direccion-destino"
                  placeholder="¿A dónde vamos?"
                  required
                  value={form['direccion-destino']}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="notas">Notas Adicionales (opcional)</label>
                <textarea
                  id="notas"
                  name="notas"
                  rows="3"
                  placeholder="Información adicional que el voluntario deba saber"
                  value={form.notas}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="form-actions">
                <Link to="/beneficiarioDashboard" className="btn btn-outline">
                  Cancelar
                </Link>
                <button type="submit" className="btn btn-primary">
                  Enviar Solicitud
                </button>
              </div>
            </form>

            <div
              className="confirmation-message"
              id="confirmation-message"
              style={{ display: 'none' }}
            >
              <div className="confirmation-icon">✓</div>
              <h3>Solicitud enviada</h3>
              <p>
                Espere confirmación. Te notificaremos cuando un voluntario acepte tu solicitud.
              </p>
              <Link to="/beneficiarioDashboard" className="btn btn-primary">
                Volver al Inicio
              </Link>
            </div>
          </div>

          <aside className="form-sidebar" style={{ flex: 1, minWidth: 260 }}>
            <div className="sidebar-card">
              <h3>💡 Consejos</h3>
              <ul>
                <li>Solicita el acompañamiento con al menos 24 horas de anticipación.</li>
                <li>Asegúrate de tener todos los documentos necesarios para tu trámite.</li>
                <li>Si necesitas ayuda especial, indícalo en las notas adicionales.</li>
              </ul>
            </div>

            <div className="sidebar-card">
              <h3>🕒 Horarios Disponibles</h3>
              <p>
                Nuestros voluntarios están disponibles de lunes a viernes, de 9:00 a 17:00 horas.
              </p>
            </div>

            <div className="sidebar-card">
              <h3>📞 ¿Necesitas ayuda?</h3>
              <p>Llámanos al +569 44556677</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default BenSoliciReact;
