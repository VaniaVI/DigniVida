import { useState } from 'react';
import { useRegistroBeneficiario } from '../../hooks/useRegistroBeneficiario';
import './PerfilBeneficiario.css';


const PerfilBeneficiario = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const { comunas, updateField, formData } = useRegistroBeneficiario();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="perfilBeneficiario">
      <section className="page-header">
        <div className="container">
          <h2>Mi Perfil</h2>
          <p>Actualiza tu información personal y datos médicos</p>
        </div>
      </section>

      <section className="profile-section">
        <div className="container">
          <div className="profile-tabs">
            <button className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => handleTabClick('personal')}>
              Información Personal
            </button>
            <button className={`tab-button ${activeTab === 'medical' ? 'active' : ''}`} onClick={() => handleTabClick('medical')}>
              Información Médica
            </button>
            <button className={`tab-button ${activeTab === 'emergency' ? 'active' : ''}`} onClick={() => handleTabClick('emergency')}>
              Contactos de Emergencia
            </button>
            <button className={`tab-button ${activeTab === 'security' ? 'active' : ''}`} onClick={() => handleTabClick('security')}>
              Recuperación de Cuenta
            </button>
          </div>

          <div className="profile-content">
            {/* Información Personal */}
            <div className={`tab-content ${activeTab === 'personal' ? 'active' : ''}`} id="personal">
              <form className="profile-form">
                <div className="profile-avatar">
                  <img src="https://cdn-icons-png.flaticon.com/128/166/166256.png" alt="Foto de perfil" className="avatar-preview" />
                  <div className="avatar-actions">
                    <label htmlFor="avatar-upload" className="btn btn-outline btn-sm">Cambiar foto</label>
                    <input type="file" id="avatar-upload" accept="image/*" style={{ display: 'none' }} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input type="text" id="nombre" name="nombre" defaultValue="Vania Rodríguez" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" defaultValue="+56 9 1234 5678" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
                    <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" defaultValue="1945-05-10" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <select id="genero" name="genero" defaultValue="femenino" required>
                      <option value="femenino">Femenino</option>
                      <option value="masculino">Masculino</option>
                      <option value="otro">Otro</option>
                      <option value="no-especificar">Prefiero no especificar</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="direccion">Dirección Completa</label>
                  <input type="text" id="direccion" name="direccion" defaultValue="Av. Principal 123, Depto. 45, Ciudad" required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="zona">Zona</label>
                    <select id="zona" name="zona" defaultValue="centro" required>
                      <option value="norte">Zona Norte</option>
                      <option value="centro">Zona Centro</option>
                      <option value="sur">Zona Sur</option>
                      <option value="este">Zona Este</option>
                      <option value="oeste">Zona Oeste</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="comuna">Comuna</label>
                    <select id="comuna" name="comuna" required>
                      <option value="">Selecciona tu comuna</option>
                      {comunas.map((comuna) => (
                        <option key={comuna} value={comuna}>{comuna}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </div>
              </form>
            </div>

            {/* Información Médica */}
            <div className={`tab-content ${activeTab === 'medical' ? 'active' : ''}`} id="medical">
              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="condiciones">Condiciones médicas relevantes</label>
                  <textarea id="condiciones" rows="4" placeholder="Ej. Hipertensión, diabetes, marcapasos..."></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="medicamentos">Medicamentos actuales</label>
                  <textarea id="medicamentos" rows="3" placeholder="Ej. Losartán, Metformina..."></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                </div>
              </form>
            </div>

            {/* Contactos de Emergencia */}
            <div className={`tab-content ${activeTab === 'emergency' ? 'active' : ''}`} id="emergency">
              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="nombre-contacto">Nombre del contacto</label>
                  <input type="text" id="nombre-contacto" placeholder="Ej. Juan Pérez" />
                </div>
                <div className="form-group">
                  <label htmlFor="telefono-contacto">Teléfono del contacto</label>
                  <input type="tel" id="telefono-contacto" placeholder="Ej. +56 9 9876 5432" />
                </div>
                <div className="form-group">
                  <label htmlFor="relacion-contacto">Relación</label>
                  <input type="text" id="relacion-contacto" placeholder="Ej. Hija, Vecino..." />
                </div>
                <div className="form-group">
                  <label htmlFor="protocolo">Protocolo recomendado en caso de emergencia</label>
                  <textarea id="protocolo" rows="3"></textarea>
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Guardar Contacto</button>
                </div>
              </form>
            </div>

            {/* Recuperación de Cuenta */}
            <div className={`tab-content ${activeTab === 'security' ? 'active' : ''}`} id="security">
              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="email-recuperacion">Correo electrónico de recuperación</label>
                  <input type="email" id="email-recuperacion" placeholder="Ej. usuario@email.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="password-actual">Contraseña actual</label>
                  <input type="password" id="password-actual" />
                </div>
                <div className="form-group">
                  <label htmlFor="nueva-password">Nueva contraseña</label>
                  <input type="password" id="nueva-password" />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmar-password">Confirmar nueva contraseña</label>
                  <input type="password" id="confirmar-password" />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Actualizar Contraseña</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfilBeneficiario;
