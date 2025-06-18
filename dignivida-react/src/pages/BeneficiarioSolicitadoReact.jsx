import { Link } from 'react-router-dom';
import './BeneficiarioSolicitadoReact.css';

const voluntarios = [
  {
    id: 1,
    nombre: 'Miguel Sánchez',
    rating: 4.0,
    reseñas: 15,
    disponibilidad: 'Disponible hoy de 9 a 13 h',
    experiencia: '2 años como voluntario',
    distancia: 'A 1.5 km de tu ubicación',
    especialidad: 'Acompañamiento médico',
    descripcion: 'Me gusta ayudar a las personas mayores. Tengo experiencia en trámites médicos y soy muy paciente.',
    img: '/e3474c91-bea8-45e3-9811-4e5758476e2f.png'
  },
  {
    id: 2,
    nombre: 'Ana Martínez',
    rating: 5.0,
    reseñas: 23,
    disponibilidad: 'Disponible hoy de 8 a 16 h',
    experiencia: '3 años como voluntaria',
    distancia: 'A 2.3 km de tu ubicación',
    especialidad: 'Trámites bancarios y administrativos',
    descripcion: 'Soy enfermera jubilada y me encanta ayudar a personas mayores. Tengo auto propio y disponibilidad horaria.',
    img: '/e3474c91-bea8-45e3-9811-4e5758476e2f.png'
  },
  {
    id: 3,
    nombre: 'Carlos Pérez',
    rating: 4.5,
    reseñas: 8,
    disponibilidad: 'Disponible hoy de 14 a 17 h',
    experiencia: '1 año como voluntario',
    distancia: 'A 0.8 km de tu ubicación',
    especialidad: 'Acompañamiento a citas médicas',
    descripcion: 'Estudiante de enfermería con experiencia en cuidado de adultos mayores. Paciente y respetuoso.',
    img: '/e3474c91-bea8-45e3-9811-4e5758476e2f.png'
  },
  {
    id: 4,
    nombre: 'Laura Gómez',
    rating: 4.2,
    reseñas: 12,
    disponibilidad: 'Disponible hoy de 9 a 18 h',
    experiencia: '2 años como voluntaria',
    distancia: 'A 1.2 km de tu ubicación',
    especialidad: 'Trámites administrativos',
    descripcion: 'Trabajadora social con experiencia en atención a adultos mayores. Comprometida y responsable.',
    img: '/e3474c91-bea8-45e3-9811-4e5758476e2f.png'
  }
];

function BeneficiarioSolicitadoReact() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h2>Seleccionar Voluntario</h2>
          <p>Elige quién te acompañará en tu trámite</p>
        </div>
      </section>

      <section className="select-volunteer-section">
        <div className="container">
          <div className="request-summary">
            <h3>Resumen de tu solicitud</h3>
            <div className="summary-details">
              <div className="summary-item">
                <span className="summary-label">Tipo de trámite:</span>
                <span className="summary-value">CESFAM</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Fecha:</span>
                <span className="summary-value">15 de Mayo, 2025</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Hora:</span>
                <span className="summary-value">10:00 AM</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Origen:</span>
                <span className="summary-value">Av. Principal 123, Ciudad</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Destino:</span>
                <span className="summary-value">CESFAM Central, Av. Salud 456</span>
              </div>
            </div>
          </div>

          <div className="volunteers-filter">
            <h3>Voluntarios disponibles en tu zona</h3>
            <div className="filter-options">
              <div className="filter-group">
                <label htmlFor="sort-by">Ordenar por:</label>
                <select id="sort-by">
                  <option value="distance">Cercanía</option>
                  <option value="rating">Calificación</option>
                  <option value="experience">Experiencia</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="filter-gender">Filtrar por género:</label>
                <select id="filter-gender">
                  <option value="all">Todos</option>
                  <option value="female">Femenino</option>
                  <option value="male">Masculino</option>
                </select>
              </div>
              <button className="btn btn-outline btn-sm">Aplicar Filtros</button>
            </div>
          </div>

          <div className="volunteers-grid">
            {voluntarios.map((v) => (
              <div key={v.id} className="volunteer-selection-card">
                <div className="volunteer-header">
                  <img src={v.img} alt={`Foto de ${v.nombre}`} className="volunteer-avatar" />
                  <div className="volunteer-basic-info">
                    <h4>{v.nombre}</h4>
                    <div className="volunteer-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`star ${i < Math.floor(v.rating) ? 'filled' : ''}`}>
                          ★
                        </span>
                      ))}
                      <span className="rating-text">{v.rating} ({v.reseñas} reseñas)</span>
                    </div>
                  </div>
                </div>
                <div className="volunteer-body">
                  <div className="volunteer-availability">
                    <span className="availability-badge available">{v.disponibilidad}</span>
                  </div>
                  <div className="volunteer-details">
                    <p><strong>Experiencia:</strong> {v.experiencia}</p>
                    <p><strong>Distancia:</strong> {v.distancia}</p>
                    <p><strong>Especialidad:</strong> {v.especialidad}</p>
                  </div>
                  <div className="volunteer-description">
                    <p>{v.descripcion}</p>
                  </div>
                </div>
                <div className="volunteer-footer">
                  <button className="btn btn-outline btn-sm">Ver Perfil</button>
                  <button className="btn btn-primary btn-sm select-volunteer" data-volunteer-id={v.id}>Seleccionar</button>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="pagination-btn">&laquo;</button>
            <button className="pagination-btn active">1</button>
            <button className="pagination-btn">2</button>
            <button className="pagination-btn">3</button>
            <button className="pagination-btn">&raquo;</button>
          </div>

          <div className="selection-actions">
            <Link to="/beneficiarioSolicitaAcompa">
              <button className="btn btn-outline">Volver a la Solicitud</button>
            </Link>
            <button className="btn btn-primary" id="btn-auto-assign">Asignación Automática</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BeneficiarioSolicitadoReact;
