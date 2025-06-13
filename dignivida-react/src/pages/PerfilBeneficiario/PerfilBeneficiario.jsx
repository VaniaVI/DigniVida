import { useState } from 'react';
import { useRegistroBeneficiario } from '../../hooks/useRegistroBeneficiario';
import './PerfilBeneficiario.css';

const PerfilBeneficiario = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const {
    formData,
    updateField,
    errors,
    comunas,
    getErrorMessage,
    hasError
  } = useRegistroBeneficiario();

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
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre Completo</label>
                    <input type="text" id="nombre" value={formData.nombre} onChange={(e) => updateField('nombre', e.target.value)} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" value={formData.telefono} onChange={(e) => updateField('telefono', e.target.value)} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
                    <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="genero">Género</label>
                    <select id="genero" name="genero" value={formData.sexo} onChange={(e) => updateField('sexo', e.target.value)} required>
                      <option value="">Seleccione</option>
                      <option value="femenino">Femenino</option>
                      <option value="masculino">Masculino</option>
                      <option value="otro">Otro</option>
                      <option value="no-especificar">Prefiero no especificar</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="region">Región</label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      value={formData.region}
                      onChange={(e) => updateField('region', e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="comuna">Comuna</label>
                    <select id="comuna" name="comuna" value={formData.comuna} onChange={(e) => updateField('comuna', e.target.value)} required>
                      <option value="">Selecciona tu comuna</option>
                      {comunas.map((comuna, index) => (
                        <option key={index} value={comuna}>{comuna}</option>
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
                  <label htmlFor="antecedentes">Antecedentes Médicos</label>
                  <textarea id="antecedentes" rows="4" placeholder="Describe tus antecedentes médicos relevantes" />
                </div>
                <div className="form-group">
                  <label htmlFor="medicacion">Medicaciones Actuales</label>
                  <textarea id="medicacion" rows="3" placeholder="Lista de medicamentos que tomas" />
                </div>
                <div className="form-group">
                  <label htmlFor="alergias">Alergias</label>
                  <textarea id="alergias" rows="2" placeholder="Indica si tienes alguna alergia conocida" />
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
                  <label htmlFor="contacto-nombre">Nombre del Contacto</label>
                  <input type="text" id="contacto-nombre" placeholder="Ej: María González" />
                </div>
                <div className="form-group">
                  <label htmlFor="contacto-relacion">Relación</label>
                  <input type="text" id="contacto-relacion" placeholder="Ej: Hija" />
                </div>
                <div className="form-group">
                  <label htmlFor="contacto-telefono">Teléfono</label>
                  <input type="tel" id="contacto-telefono" placeholder="Ej: +56 9 7654 3210" />
                </div>
                <div className="form-group">
                  <label htmlFor="protocolo">Protocolo en Caso de Emergencia</label>
                  <textarea id="protocolo" rows="3" placeholder="Indica qué se debe hacer en caso de una urgencia" />
                </div>
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">Guardar Contacto</button>
                </div>
              </form>
            </div>

            {/* Seguridad */}
            <div className={`tab-content ${activeTab === 'security' ? 'active' : ''}`} id="security">
              <form className="profile-form">
                <div className="form-group">
                  <label htmlFor="email-recuperacion">Correo de recuperación</label>
                  <input type="email" id="email-recuperacion" placeholder="ejemplo@correo.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="nueva-clave">Nueva Contraseña</label>
                  <input type="password" id="nueva-clave" placeholder="********" />
                </div>
                <div className="form-group">
                  <label htmlFor="repetir-clave">Repetir Contraseña</label>
                  <input type="password" id="repetir-clave" placeholder="********" />
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
