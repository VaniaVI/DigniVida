import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './BeneficiarioSolicitadoReact.css';

const voluntariosOriginal = [
  {
    id: 1,
    nombre: 'Miguel Sánchez',
    rating: 4.0,
    reseñas: 8,
    disponibilidad: 'Disponible hoy de 9 a 13 h',
    experiencia: '2 años como voluntario',
    distancia: 1.5,
    especialidad: 'Acompañamiento médico',
    descripcion: 'Me gusta ayudar a las personas mayores. Tengo experiencia en trámites médicos y soy muy paciente.',
    img: 'https://cdn-icons-png.flaticon.com/128/4202/4202835.png',
    genero: 'male'
  },
  {
    id: 2,
    nombre: 'Ana Martínez',
    rating: 4.8,
    reseñas: 15,
    disponibilidad: 'Disponible hoy de 10 a 16 h',
    experiencia: '3 años como voluntaria',
    distancia: 2.3,
    especialidad: 'Trámites bancarios y administrativos',
    descripcion: 'Soy enfermera jubilada y me encanta ayudar a personas mayores. Tengo auto propio y disponibilidad horaria.',
    img: 'https://cdn-icons-png.flaticon.com/128/4202/4202834.png',
    genero: 'female'
  },
  {
    id: 3,
    nombre: 'Carlos Pérez',
    rating: 3.7,
    reseñas: 7,
    disponibilidad: 'Disponible hoy de 12 a 18 h',
    experiencia: '1 año como voluntario',
    distancia: 0.8,
    especialidad: 'Acompañamiento a citas médicas',
    descripcion: 'Estudiante de enfermería con experiencia en cuidado de adultos mayores. Paciente y respetuoso.',
    img: 'https://cdn-icons-png.flaticon.com/128/4202/4202835.png',
    genero: 'male'
  },
  {
    id: 4,
    nombre: 'Sofía Carrasco',
    rating: 5.0,
    reseñas: 12,
    disponibilidad: 'Disponible hoy de 14 a 18 h',
    experiencia: '2 años como voluntaria',
    distancia: 1.2,
    especialidad: 'Trámites administrativos',
    descripcion: 'Trabajadora social con experiencia en atención a adultos mayores. Comprometida y responsable.',
    img: 'https://cdn-icons-png.flaticon.com/128/4202/4202834.png',
    genero: 'female'
  }
];

function BeneficiarioSolicitadoReact() {
  const location = useLocation();
  const navigate = useNavigate();

  // Datos de la solicitud
  const tramite = location.state?.tramite || "No especificado";
  const origen = location.state?.origen || "No especificado";
  const destino = location.state?.destino || "No especificado";
  const fecha = location.state?.fecha || "15 de Mayo, 2025";
  const hora = location.state?.hora || "10:00 AM";

  // Filtros
  const [sortBy, setSortBy] = useState("distance");
  const [gender, setGender] = useState("all");
  const [voluntarios, setVoluntarios] = useState(voluntariosOriginal);

  // Modal de perfil
  const [modalPerfil, setModalPerfil] = useState(null);

  // Voluntario seleccionado
  const [voluntarioSeleccionado, setVoluntarioSeleccionado] = useState(null);

  // Filtrado y ordenamiento
  const getFilteredVolunteers = () => {
    let filtered = [...voluntariosOriginal];

    if (gender !== "all") {
      filtered = filtered.filter(v => v.genero === gender);
    }

    if (sortBy === "distance") {
      filtered.sort((a, b) => a.distancia - b.distancia);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "experience") {
      // Extrae el número de años de experiencia del string
      filtered.sort((a, b) => {
        const getYears = str => parseInt(str.match(/\d+/)?.[0] || "0", 10);
        return getYears(b.experiencia) - getYears(a.experiencia);
      });
    }
    return filtered;
  };

  const filteredVolunteers = getFilteredVolunteers();

  // Handlers
  const handleApplyFilters = (e) => {
    e.preventDefault();
    setVoluntarios(getFilteredVolunteers());
  };

  const handleVerPerfil = (voluntario) => {
    setModalPerfil(voluntario);
  };

  const handleSeleccionar = (voluntario) => {
    setVoluntarioSeleccionado(voluntario);
    setModalPerfil(null);
  };

  const handleCerrarPerfil = () => setModalPerfil(null);

  // NUEVO: Guardar solicitud en localStorage al confirmar voluntario
  const handleConfirmarVoluntario = () => {
    if (!voluntarioSeleccionado) return;

    const nuevaSolicitud = {
      tramite,
      fecha,
      hora,
      origen,
      destino,
      estado: "Confirmada",
      voluntario: {
        nombre: voluntarioSeleccionado.nombre,
        genero: voluntarioSeleccionado.genero,
        img: voluntarioSeleccionado.img,
        rating: voluntarioSeleccionado.rating,
        reseñas: voluntarioSeleccionado.reseñas,
        especialidad: voluntarioSeleccionado.especialidad
      }
    };

    const historial = JSON.parse(localStorage.getItem("solicitudesHistorial")) || [];
    historial.unshift(nuevaSolicitud);
    localStorage.setItem("solicitudesHistorial", JSON.stringify(historial));

    alert("¡Voluntario confirmado! Pronto recibirás información de contacto y seguimiento.");

    // Opcional: redirigir al historial
    // navigate("/beneficiarioHistorial");
  };

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
                <span className="summary-value">{tramite}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Fecha:</span>
                <span className="summary-value">{fecha}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Hora:</span>
                <span className="summary-value">{hora}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Origen:</span>
                <span className="summary-value">{origen}</span>
              </div>
              <div className="summary-item">
                <span className="summary-label">Destino:</span>
                <span className="summary-value">{destino}</span>
              </div>
            </div>
            {voluntarioSeleccionado && (
              <div className="summary-selected-volunteer">
                <h4>Voluntario seleccionado</h4>
                <div className="selected-volunteer-card">
                  <img src={voluntarioSeleccionado.img} alt={voluntarioSeleccionado.nombre} className="volunteer-avatar" />
                  <div>
                    <strong>{voluntarioSeleccionado.nombre}</strong>
                    <div className="volunteer-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`star ${i < Math.floor(voluntarioSeleccionado.rating) ? 'filled' : ''}`}>★</span>
                      ))}
                      <span className="rating-text">{voluntarioSeleccionado.rating} ({voluntarioSeleccionado.reseñas} reseñas)</span>
                    </div>
                    <div><strong>Disponibilidad:</strong> {voluntarioSeleccionado.disponibilidad}</div>
                    <div><strong>Especialidad:</strong> {voluntarioSeleccionado.especialidad}</div>
                  </div>
                </div>
                <div style={{marginTop: 10}}>
                  <button className="btn btn-success" onClick={handleConfirmarVoluntario}>
                    Confirmar voluntario
                  </button>
                </div>
              </div>
            )}
          </div>
          {!voluntarioSeleccionado && (
            <>
              <div className="volunteers-filter">
                <h3>Voluntarios disponibles en tu zona</h3>
                <form className="filter-options" onSubmit={handleApplyFilters}>
                  <div className="filter-group">
                    <label htmlFor="sort-by">Ordenar por:</label>
                    <select id="sort-by" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                      <option value="distance">Cercanía</option>
                      <option value="rating">Calificación</option>
                      <option value="experience">Experiencia</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label htmlFor="filter-gender">Filtrar por género:</label>
                    <select id="filter-gender" value={gender} onChange={e => setGender(e.target.value)}>
                      <option value="all">Todos</option>
                      <option value="female">Femenino</option>
                      <option value="male">Masculino</option>
                    </select>
                  </div>
                  <button className="btn btn-outline btn-sm" type="submit">Aplicar Filtros</button>
                </form>
              </div>

              <div className="volunteers-grid">
                {filteredVolunteers.map((v) => (
                  <div key={v.id} className="volunteer-selection-card">
                    <div className="volunteer-header">
                      <img src={v.img} alt={`Foto de ${v.nombre}`} className="volunteer-avatar" />
                      <div className="volunteer-basic-info">
                        <h4>{v.nombre}</h4>
                        <div className="volunteer-rating">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className={`star ${i < Math.floor(v.rating) ? 'filled' : ''}`}>★</span>
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
                        <p><strong>Distancia:</strong> {v.distancia} km</p>
                        <p><strong>Especialidad:</strong> {v.especialidad}</p>
                      </div>
                      <div className="volunteer-description">
                        <p>{v.descripcion}</p>
                      </div>
                    </div>
                    <div className="volunteer-footer">
                      <button className="btn btn-outline btn-sm" onClick={() => handleVerPerfil(v)}>Ver Perfil</button>
                      <button className="btn btn-primary btn-sm select-volunteer" onClick={() => setVoluntarioSeleccionado(v)}>Seleccionar</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

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
            <button className="btn btn-primary" id="btn-auto-assign" onClick={() => setVoluntarioSeleccionado(filteredVolunteers[0])}>
              Asignación Automática
            </button>
          </div>
        </div>
      </section>

      {/* Modal Perfil */}
      {modalPerfil && (
        <div className="modal-overlay" onClick={handleCerrarPerfil}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Perfil de {modalPerfil.nombre}</h3>
            <img src={modalPerfil.img} alt={modalPerfil.nombre} className="volunteer-avatar-large" />
            <div><strong>Calificación:</strong> {modalPerfil.rating} ({modalPerfil.reseñas} reseñas)</div>
            <div><strong>Disponibilidad:</strong> {modalPerfil.disponibilidad}</div>
            <div><strong>Experiencia:</strong> {modalPerfil.experiencia}</div>
            <div><strong>Distancia:</strong> {modalPerfil.distancia} km</div>
            <div><strong>Especialidad:</strong> {modalPerfil.especialidad}</div>
            <div><strong>Descripción:</strong> {modalPerfil.descripcion}</div>
            <div style={{marginTop: 16, display: "flex", gap: 8}}>
              <button className="btn btn-primary btn-sm" onClick={() => handleSeleccionar(modalPerfil)}>
                Seleccionar
              </button>
              <button className="btn btn-outline btn-sm" onClick={handleCerrarPerfil}>
                Cerrar
              </button>
            </div>
          </div>
          <style>{`
            .modal-overlay {
              position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
              background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; z-index: 1000;
            }
            .modal-content {
              background: #fff; padding: 2em; border-radius: 8px; min-width: 320px; max-width: 90vw;
            }
            .volunteer-avatar-large {
              width: 80px; height: 80px; border-radius: 50%; margin-bottom: 1em;
            }
          `}</style>
        </div>
      )}
    </>
  );
}

export default BeneficiarioSolicitadoReact;
