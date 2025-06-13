<<<<<<< HEAD
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
=======
import React, { useState } from 'react';

const PerfilBeneficiario = () => {
    // Estado para la pestaña activa
    const [activeTab, setActiveTab] = useState('personal');

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
                        <button className={`tab-button${activeTab === 'personal' ? ' active' : ''}`} onClick={() => setActiveTab('personal')}>Información Personal</button>
                        <button className={`tab-button${activeTab === 'medical' ? ' active' : ''}`} onClick={() => setActiveTab('medical')}>Información Médica</button>
                        <button className={`tab-button${activeTab === 'emergency' ? ' active' : ''}`} onClick={() => setActiveTab('emergency')}>Contactos de Emergencia</button>
                        <button className={`tab-button${activeTab === 'security' ? ' active' : ''}`} onClick={() => setActiveTab('security')}>Seguridad</button>
                    </div>
                    
                    <div className="profile-content">
                        {/* Pestaña de Información Personal */}
                        {activeTab === 'personal' && (
                            <div className="tab-content active" id="personal">
                                <form className="profile-form">
                                    <div className="profile-avatar">
                                        <img src="https://cdn-icons-png.flaticon.com/128/166/166256.png" alt="Foto de perfil" className="avatar-preview"/>
                                        <div className="avatar-actions">
                                            <label htmlFor="avatar-upload" className="btn btn-outline btn-sm">Cambiar foto</label>
                                            <input type="file" id="avatar-upload" accept="image/*" style={{ display: 'none' }}/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre Completo</label>
                                            <input type="text" id="nombre" name="nombre" defaultValue="Vania Rodríguez" required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="telefono">Teléfono</label>
                                            <input type="tel" id="telefono" name="telefono" defaultValue="+56 9 1234 5678" required/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="fecha-nacimiento">Fecha de Nacimiento</label>
                                            <input type="date" id="fecha-nacimiento" name="fecha-nacimiento" defaultValue="1945-05-10" required/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="genero">Género</label>
                                            <select id="genero" name="genero" required defaultValue="femenino">
                                                <option value="femenino">Femenino</option>
                                                <option value="masculino">Masculino</option>
                                                <option value="otro">Otro</option>
                                                <option value="no-especificar">Prefiero no especificar</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="direccion">Dirección Completa</label>
                                        <input type="text" id="direccion" name="direccion" defaultValue="Av. Principal 123, Depto. 45, Ciudad" required/>
                                    </div>
                                    
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="zona">Zona</label>
                                            <select id="zona" name="zona" required defaultValue="centro">
                                                <option value="norte">Zona Norte</option>
                                                <option value="centro">Zona Centro</option>
                                                <option value="sur">Zona Sur</option>
                                                <option value="este">Zona Este</option>
                                                <option value="oeste">Zona Oeste</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="comuna">Comuna</label>
                                            <input type="text" id="comuna" name="comuna" defaultValue="Santiago Centro" required />
                                        </div>
                                    </div>
                                    
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Pestaña de Información Médica */}
                        {activeTab === 'medical' && (
                            <div className="tab-content active" id="medical">
                                <form className="profile-form">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="altura">Altura (cm)</label>
                                            <input type="number" id="altura" name="altura" defaultValue="165" min="100" max="250"/>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="peso">Peso (kg)</label>
                                            <input type="number" id="peso" name="peso" defaultValue="68" min="30" max="200"/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="enfermedades">Enfermedades o Condiciones Médicas</label>
                                        <textarea id="enfermedades" name="enfermedades" rows="3">Hipertensión, Diabetes tipo 2</textarea>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="medicamentos">Medicamentos que Consume</label>
                                        <textarea id="medicamentos" name="medicamentos" rows="3">Losartán 50mg (mañana), Metformina 850mg (después de almuerzo)</textarea>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="alergias">Alergias</label>
                                        <textarea id="alergias" name="alergias" rows="2">Penicilina</textarea>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="movilidad">Nivel de Movilidad</label>
                                        <select id="movilidad" name="movilidad" defaultValue="bastón">
                                            <option value="completa">Movilidad completa</option>
                                            <option value="bastón">Uso de bastón</option>
                                            <option value="andador">Uso de andador</option>
                                            <option value="silla">Silla de ruedas</option>
                                            <option value="asistencia">Requiere asistencia completa</option>
                                        </select>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="observaciones">Observaciones Adicionales</label>
                                        <textarea id="observaciones" name="observaciones" rows="3">Dificultad para subir escaleras. Prefiere caminar distancias cortas.</textarea>
                                    </div>
                                    
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Pestaña de Contactos de Emergencia */}
                        {activeTab === 'emergency' && (
                            <div className="tab-content active" id="emergency">
                                <form className="profile-form">
                                    <div className="emergency-contacts">
                                        <div className="emergency-contact">
                                            <h4>Contacto Principal</h4>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="contacto1-nombre">Nombre Completo</label>
                                                    <input type="text" id="contacto1-nombre" name="contacto1-nombre" defaultValue="Juan Rodríguez" required/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="contacto1-relacion">Relación</label>
                                                    <input type="text" id="contacto1-relacion" name="contacto1-relacion" defaultValue="Hijo" required/>
                                                </div>
                                            </div>
                                            
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="contacto1-telefono">Teléfono</label>
                                                    <input type="tel" id="contacto1-telefono" name="contacto1-telefono" defaultValue="+56 9 8765 4321" required/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="contacto1-email">Email</label>
                                                    <input type="email" id="contacto1-email" name="contacto1-email" defaultValue="juan.rodriguez@email.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="emergency-contact">
                                            <h4>Contacto Secundario</h4>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="contacto2-nombre">Nombre Completo</label>
                                                    <input type="text" id="contacto2-nombre" name="contacto2-nombre" defaultValue="María González"/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="contacto2-relacion">Relación</label>
                                                    <input type="text" id="contacto2-relacion" name="contacto2-relacion" defaultValue="Vecina"/>
                                                </div>
                                            </div>
                                            
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label htmlFor="contacto2-telefono">Teléfono</label>
                                                    <input type="tel" id="contacto2-telefono" name="contacto2-telefono" defaultValue="+56 9 2345 6789"/>
                                                </div>
                                                
                                                <div className="form-group">
                                                    <label htmlFor="contacto2-email">Email</label>
                                                    <input type="email" id="contacto2-email" name="contacto2-email" defaultValue="maria.gonzalez@email.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button type="button" className="btn btn-outline btn-sm add-contact">+ Agregar otro contacto</button>
                                    </div>
                                    
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Pestaña de Seguridad */}
                        {activeTab === 'security' && (
                            <div className="tab-content active" id="security">
                                <form className="profile-form">
                                    <div className="form-group">
                                        <label htmlFor="password-actual">Contraseña Actual</label>
                                        <input type="password" id="password-actual" name="password-actual"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password-nueva">Nueva Contraseña</label>
                                        <input type="password" id="password-nueva" name="password-nueva"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password-confirmar">Confirmar Nueva Contraseña</label>
                                        <input type="password" id="password-confirmar" name="password-confirmar"/>
                                    </div>
                                    
                                    <div className="form-actions">
                                        <button type="submit" className="btn btn-primary">Cambiar Contraseña</button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
>>>>>>> e7d82a41ee4d7b95da390d50f0817757c40839ed
};

export default PerfilBeneficiario;
