import React from 'react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Política de Privacidad',
    content: (
      <>
        <p>
          Nos comprometemos a proteger la privacidad de nuestros usuarios. Toda la información personal que recopilamos es utilizada exclusivamente para mejorar la experiencia en nuestra plataforma y nunca será compartida con terceros sin tu consentimiento.
        </p>
        <ul style={{ marginLeft: 20 }}>
          <li>Recopilamos solo los datos necesarios para el funcionamiento del servicio.</li>
          <li>Utilizamos protocolos de seguridad para proteger tu información.</li>
          <li>Puedes solicitar la eliminación de tus datos en cualquier momento.</li>
        </ul>
      </>
    ),
    color: 'var(--primary-color)',
  },
  {
    title: 'Política de Seguridad',
    content: (
      <>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para garantizar la protección de tus datos y la integridad de nuestra plataforma.
        </p>
        <ul style={{ marginLeft: 20 }}>
          <li>Encriptación de datos sensibles.</li>
          <li>Monitoreo constante para detectar actividades sospechosas.</li>
          <li>Actualizaciones regulares de nuestros sistemas.</li>
        </ul>
      </>
    ),
    color: 'var(--primary-dark)',
  },
  {
    title: 'Recomendaciones para Usuarios',
    content: (
      <>
        <p>
          Tu seguridad también depende de ti. Te recomendamos:
        </p>
        <ul style={{ marginLeft: 20 }}>
          <li>No compartas tu contraseña con nadie.</li>
          <li>Utiliza contraseñas seguras y cámbialas periódicamente.</li>
          <li>Si detectas alguna actividad sospechosa, notifícanos de inmediato.</li>
        </ul>
      </>
    ),
    color: 'var(--accent-color)',
  },
];

const Politicasregistroben = () => (
  <section className="auth-section" style={{ background: 'var(--background-alt)' }}>
    <div className="auth-container" style={{ maxWidth: 700 }}>
      <h1 className="section-title" style={{ marginBottom: 30 }}>Políticas y Seguridad</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: 35 }}>
        Conoce nuestras políticas de privacidad y las medidas de seguridad que implementamos para protegerte.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 35 }}>
        {sections.map(({ title, content, color }, idx) => (
          <div
            key={title}
            style={{
              borderLeft: `6px solid ${color}`,
              background: 'var(--background-alt)',
              borderRadius: 10,
              padding: '22px 20px',
              boxShadow: '0 2px 8px var(--shadow-color)',
              animation: `modalFadeIn 0.4s ${0.1 * idx}s both`,
            }}
          >
            <h2 style={{
              marginBottom: 8,
              color: color,
              fontSize: '1.25rem',
              fontWeight: 600,
            }}>
              {title}
            </h2>
            <div style={{ color: 'var(--text-color)' }}>{content}</div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link to='/registroBeneficiario' className="btn btn-primary btn-large" style={{ borderRadius: 8 }}>Volver</Link>
      </div>
    </div>
  </section>
);

export default Politicasregistroben;
