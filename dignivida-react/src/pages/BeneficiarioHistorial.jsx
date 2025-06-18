import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ICONS = {
  male: "https://cdn-icons-png.flaticon.com/128/4202/4202835.png",
  female: "https://cdn-icons-png.flaticon.com/128/4202/4202834.png"
};

const VOLUNTEERS = [
  {
    nombre: "Miguel",
    apellido: "Sánchez",
    genero: "male",
    correo: "miguel.sanchez@mail.com",
    celular: "+56912345678",
    rating: 4.0,
    disponibilidad: "Disponible hoy de 9 a 13 h",
    badges: ["CESFAM", "Trámites", "Conductor"],
    servicios: 8,
    ultimaVez: "15 de Mayo, 2025",
    viajes: [
      { fecha: "2025-05-13", hora: "10:00", origen: "Av. Central 123", destino: "Hospital Regional" },
      { fecha: "2025-04-28", hora: "09:30", origen: "Calle Falsa 123", destino: "Consultorio Norte" },
      { fecha: "2025-03-10", hora: "11:00", origen: "Av. Salud 456", destino: "Farmacia Popular" },
      { fecha: "2025-02-15", hora: "08:00", origen: "Av. Libertad 789", destino: "Centro de Adulto Mayor" }
    ]
  },
  {
    nombre: "Sofía",
    apellido: "Carrasco",
    genero: "female",
    correo: "sofia.carrasco@mail.com",
    celular: "+56987654321",
    rating: 5,
    disponibilidad: "Disponible hoy de 14 a 18 h",
    badges: ["Supermercado", "Banco", "Conductor"],
    servicios: 12,
    ultimaVez: "12 de Mayo, 2025",
    viajes: [
      { fecha: "2025-05-12", hora: "09:00", origen: "Plaza Sur 321", destino: "Banco Estado" },
      { fecha: "2025-04-25", hora: "10:30", origen: "Av. Chile 111", destino: "Centro Médico" },
      { fecha: "2025-03-05", hora: "15:00", origen: "Calle Norte 222", destino: "Supermercado" },
      { fecha: "2025-02-20", hora: "12:00", origen: "Av. Andes 333", destino: "Municipalidad" }
    ]
  },
  {
    nombre: "Joaquín",
    apellido: "Navarro",
    genero: "male",
    correo: "joaquin.navarro@mail.com",
    celular: "+56923456789",
    rating: 4.0,
    disponibilidad: "Disponible hoy de 9 a 13 h",
    badges: ["CESFAM", "Trámites", "Conductor"],
    servicios: 5,
    ultimaVez: "11 de Mayo, 2025",
    viajes: [
      { fecha: "2025-05-11", hora: "13:00", origen: "Av. Pacífico 123", destino: "Centro de Salud" },
      { fecha: "2025-04-20", hora: "14:30", origen: "Calle Sur 456", destino: "Farmacia" },
      { fecha: "2025-03-15", hora: "16:00", origen: "Av. Norte 789", destino: "Hospital" },
      { fecha: "2025-02-10", hora: "10:00", origen: "Plaza Central", destino: "Consultorio" }
    ]
  },
  {
    nombre: "Ana",
    apellido: "Martínez",
    genero: "female",
    correo: "ana.martinez@mail.com",
    celular: "+56934567890",
    rating: 4.8,
    disponibilidad: "Disponible hoy de 10 a 16 h",
    badges: ["Farmacia", "Banco", "Compras"],
    servicios: 15,
    ultimaVez: "10 de Mayo, 2025",
    viajes: [
      { fecha: "2025-05-10", hora: "11:30", origen: "Av. Libertad 100", destino: "Hospital Regional" },
      { fecha: "2025-04-18", hora: "09:00", origen: "Calle Principal 200", destino: "Centro de Adulto Mayor" },
      { fecha: "2025-03-20", hora: "12:00", origen: "Av. Sur 300", destino: "Consultorio Norte" },
      { fecha: "2025-02-12", hora: "08:30", origen: "Calle Falsa 400", destino: "Farmacia Popular" }
    ]
  },
  {
    nombre: "Carlos",
    apellido: "Pérez",
    genero: "male",
    correo: "carlos.perez@mail.com",
    celular: "+56945678901",
    rating: 3.7,
    disponibilidad: "Disponible hoy de 12 a 18 h",
    badges: ["Hospital", "Trámites", "Conductor"],
    servicios: 7,
    ultimaVez: "9 de Mayo, 2025",
    viajes: [
      { fecha: "2025-05-09", hora: "10:45", origen: "Av. Central 500", destino: "Centro Médico" },
      { fecha: "2025-04-15", hora: "14:00", origen: "Plaza Norte 600", destino: "Hospital" },
      { fecha: "2025-03-22", hora: "17:00", origen: "Calle Sur 700", destino: "Municipalidad" },
      { fecha: "2025-02-18", hora: "09:30", origen: "Av. Andes 800", destino: "Banco Estado" }
    ]
  }
];

const SOLICITUDES = [
  // 12 viajes inventados, 4 por página
  // Página 1
  {
    fecha: "2025-05-15",
    hora: "10:00 AM",
    origen: "Av. Principal 123, Ciudad",
    destino: "CESFAM Central, Av. Salud 456",
    estado: "Confirmada",
    voluntario: { nombre: "Miguel Sánchez", genero: "male" }
  },
  {
    fecha: "2025-05-10",
    hora: "11:30 AM",
    origen: "Av. Principal 123, Ciudad",
    destino: "Servicios Municipales, Plaza Central",
    estado: "Completada",
    voluntario: { nombre: "Ana Martínez", genero: "female" }
  },
  {
    fecha: "2025-04-28",
    hora: "09:00 AM",
    origen: "Av. Principal 123, Ciudad",
    destino: "Caja de Compensación, Av. Central 789",
    estado: "Completada",
    voluntario: { nombre: "Carlos Pérez", genero: "male" }
  },
  {
    fecha: "2025-04-15",
    hora: "10:00 AM",
    origen: "Av. Principal 123, Ciudad",
    destino: "CESFAM Central, Av. Salud 456",
    estado: "Cancelada",
    voluntario: null,
    motivo: "Cita médica reprogramada"
  },
  // Página 2
  {
    fecha: "2025-04-10",
    hora: "08:00 AM",
    origen: "Calle Falsa 123, Ciudad",
    destino: "Hospital Regional",
    estado: "Completada",
    voluntario: { nombre: "Sofía Carrasco", genero: "female" }
  },
  {
    fecha: "2025-03-30",
    hora: "09:30 AM",
    origen: "Av. Chile 222, Ciudad",
    destino: "Centro Médico",
    estado: "Completada",
    voluntario: { nombre: "Joaquín Navarro", genero: "male" }
  },
  {
    fecha: "2025-03-20",
    hora: "10:30 AM",
    origen: "Av. Libertad 456, Ciudad",
    destino: "Farmacia Popular",
    estado: "Completada",
    voluntario: { nombre: "Ana Martínez", genero: "female" }
  },
  {
    fecha: "2025-03-10",
    hora: "11:00 AM",
    origen: "Plaza Norte 789, Ciudad",
    destino: "Consultorio Norte",
    estado: "Completada",
    voluntario: { nombre: "Carlos Pérez", genero: "male" }
  },
  // Página 3
  {
    fecha: "2025-02-28",
    hora: "12:00 PM",
    origen: "Av. Pacífico 321, Ciudad",
    destino: "Supermercado",
    estado: "Completada",
    voluntario: { nombre: "Miguel Sánchez", genero: "male" }
  },
  {
    fecha: "2025-02-20",
    hora: "09:00 AM",
    origen: "Calle Sur 654, Ciudad",
    destino: "Banco Estado",
    estado: "Completada",
    voluntario: { nombre: "Sofía Carrasco", genero: "female" }
  },
  {
    fecha: "2025-02-10",
    hora: "10:00 AM",
    origen: "Av. Andes 987, Ciudad",
    destino: "Municipalidad",
    estado: "Completada",
    voluntario: { nombre: "Joaquín Navarro", genero: "male" }
  },
  {
    fecha: "2025-01-25",
    hora: "08:30 AM",
    origen: "Plaza Central 111, Ciudad",
    destino: "Centro Adulto Mayor",
    estado: "Completada",
    voluntario: { nombre: "Ana Martínez", genero: "female" }
  }
];


const ESTADO_CLASE = {
  Confirmada: "confirmed",
  Completada: "completed",
  Cancelada: "cancelled"
};

const ITEMS_PER_PAGE = 4;

function BeneficiarioHistorial() {
  const [activeTab, setActiveTab] = useState("solicitudes");
  const [solicitudesPage, setSolicitudesPage] = useState(1);
  const [voluntariosPage, setVoluntariosPage] = useState(1);
  const [modalViaje, setModalViaje] = useState(null);
  const [modalVoluntario, setModalVoluntario] = useState(null);
  // const [solicitudesGuardadas, setSolicitudesGuardadas] = useState([]);

  // useEffect(() => {
  //   // Lee las solicitudes guardadas en localStorage
  //   const data = JSON.parse(localStorage.getItem("solicitudesHistorial")) || [];
  //   setSolicitudesGuardadas(data);
  // }, []);

  // Paginación solicitudes
  const totalSolicitudesPages = Math.ceil(SOLICITUDES.length / ITEMS_PER_PAGE);
  const solicitudesToShow = SOLICITUDES.slice(
    (solicitudesPage - 1) * ITEMS_PER_PAGE,
    solicitudesPage * ITEMS_PER_PAGE
  );

  // Paginación voluntarios
  const totalVoluntariosPages = Math.ceil(VOLUNTEERS.length / ITEMS_PER_PAGE);
  const voluntariosToShow = VOLUNTEERS.slice(
    (voluntariosPage - 1) * ITEMS_PER_PAGE,
    voluntariosPage * ITEMS_PER_PAGE
  );

  // Modal detalles viaje
  const handleVerDetalles = (viaje) => setModalViaje(viaje);
  const handleCerrarDetalles = () => setModalViaje(null);

  // Modal detalles voluntario
  const handleVerVoluntario = (voluntario) => setModalVoluntario(voluntario);
  const handleCerrarVoluntario = () => setModalVoluntario(null);

  return (
    <>
    
      <section className="page-header">
        <div className="container">
          <h2>Mi Historial</h2>
          <p>Revisa tus solicitudes anteriores y los voluntarios que te han ayudado</p>
        </div>
      </section>
      
      <section className="history-section">
        <div className="container">
          <div className="history-tabs">
            <button
              className={`tab-button${activeTab === "solicitudes" ? " active" : ""}`}
              data-tab="solicitudes"
              onClick={() => setActiveTab("solicitudes")}
            >
              Solicitudes
            </button>
            <button
              className={`tab-button${activeTab === "voluntarios" ? " active" : ""}`}
              data-tab="voluntarios"
              onClick={() => setActiveTab("voluntarios")}
            >
              Mis Voluntarios
            </button>
          </div>
          <div className="history-content">
            {/* Solicitudes */}
            {activeTab === "solicitudes" && (
              <div className="tab-content active" id="solicitudes">
                {/* Filtros - Recuperados del original */}
                <div className="history-filters">
                  <div className="filter-group">
                    <label htmlFor="estado-filter">Estado:</label>
                    <select id="estado-filter">
                      <option value="todos">Todos</option>
                      <option value="completado">Completado</option>
                      <option value="cancelado">Cancelado</option>
                      <option value="pendiente">Pendiente</option>
                    </select>
                  </div>

                  <div className="filter-group">
                    <label htmlFor="fecha-desde">Desde:</label>
                    <input type="date" id="fecha-desde" />
                  </div>

                  <div className="filter-group">
                    <label htmlFor="fecha-hasta">Hasta:</label>
                    <input type="date" id="fecha-hasta" />
                  </div>

                  <button className="btn btn-outline btn-sm">Filtrar</button>
                </div>

                <div className="history-list">
                  {solicitudesToShow.map((s, idx) => (
                    <div className="history-item" key={idx}>
                      <div className="history-date">
                        <div className="date-day">{s.fecha.split("-")[2]}</div>
                        <div className="date-month">
                          {["Enero", "Feb", "Mar", "Abr", "Mayo", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"][parseInt(s.fecha.split("-")[1],10)-1]}
                        </div>
                        <div className="date-year">{s.fecha.split("-")[0]}</div>
                      </div>
                      <div className="history-details">
                        <div className="history-header">
                          <h4>{s.destino.split(",")[0]}</h4>
                          <span className={`status-badge ${ESTADO_CLASE[s.estado]}`}>{s.estado}</span>
                        </div>
                        <div className="history-info">
                          <p><strong>Hora:</strong> {s.hora}</p>
                          <p><strong>Origen:</strong> {s.origen}</p>
                          <p><strong>Destino:</strong> {s.destino}</p>
                        </div>
                        <div className="history-volunteer">
                          {s.voluntario ? (
                            <>
                              <img src={ICONS[s.voluntario.genero]} alt="Foto del voluntario" className="volunteer-avatar" />
                              <div>
                                <p><strong>Voluntario:</strong> {s.voluntario.nombre}</p>
                              </div>
                            </>
                          ) : (
                            <div>
                              <p><strong>Motivo de cancelación:</strong> {s.motivo}</p>
                            </div>
                          )}
                        </div>
                        <div className="history-actions">
                          {/* SOLO EL PRIMER VIAJE, CONFIRMADO Y ACTIVO, MUESTRA "VER SEGUIMIENTO" */}
                          {idx === 0 && solicitudesPage === 1 && s.estado === "Confirmada" ? (
                            <Link to="/beneficiarioSeguimiento" className="btn btn-primary btn-sm">
                              Ver Seguimiento
                            </Link>
                          ) : (
                            <button className="btn btn-outline btn-sm" onClick={() => handleVerDetalles(s)}>
                              Ver Detalles
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Paginación */}
                <div className="pagination">
                  <button className="pagination-btn" disabled={solicitudesPage === 1} onClick={() => setSolicitudesPage(solicitudesPage - 1)}>&laquo;</button>
                  {Array.from({ length: totalSolicitudesPages }).map((_, i) => (
                    <button
                      key={i}
                      className={`pagination-btn${solicitudesPage === i + 1 ? " active" : ""}`}
                      onClick={() => setSolicitudesPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button className="pagination-btn" disabled={solicitudesPage === totalSolicitudesPages} onClick={() => setSolicitudesPage(solicitudesPage + 1)}>&raquo;</button>
                </div>
              </div>
            )}

            {/* Voluntarios */}
            {activeTab === "voluntarios" && (
              <div className="tab-content active" id="voluntarios">
                <div className="volunteers-list">
                  {voluntariosToShow.map((v, idx) => (
                    <div className="volunteer-card" key={v.correo}>
                      <img
                        src={ICONS[v.genero]}
                        alt={`Foto de ${v.nombre} ${v.apellido}`}
                        className="volunteer-avatar-large"
                      />
                      <div className="volunteer-info">
                        <h3>{v.nombre} {v.apellido}</h3>
                        <div className="volunteer-availability">
                          {v.disponibilidad}
                        </div>
                        <div className="volunteer-badges">
                          {v.badges.map((badge, i) => (
                            <span key={i} className="volunteer-badge">{badge}</span>
                          ))}
                        </div>
                        <p><strong>Servicios:</strong> {v.servicios} acompañamientos</p>
                        <p><strong>Última vez:</strong> {v.ultimaVez}</p>
                        <div className="volunteer-rating" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={i < Math.round(v.rating) ? "star filled" : "star"}
                              style={{ color: i < Math.round(v.rating) ? "#ffd700" : "#ccc", fontSize: "1.2em" }}
                            >
                              ★
                            </span>
                          ))}
                          <span className="rating-text" style={{ marginLeft: 4 }}>{v.rating.toFixed(1)}</span>
                        </div>
                        <button
                          className="btn btn-outline btn-sm"
                          onClick={() => handleVerVoluntario(v)}
                        >
                          Ver Perfil
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Paginación */}
                <div className="pagination">
                  <button className="pagination-btn" disabled={voluntariosPage === 1} onClick={() => setVoluntariosPage(voluntariosPage - 1)}>&laquo;</button>
                  {Array.from({ length: totalVoluntariosPages }).map((_, i) => (
                    <button
                      key={i}
                      className={`pagination-btn${voluntariosPage === i + 1 ? " active" : ""}`}
                      onClick={() => setVoluntariosPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button className="pagination-btn" disabled={voluntariosPage === totalVoluntariosPages} onClick={() => setVoluntariosPage(voluntariosPage + 1)}>&raquo;</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal Detalles Viaje */}
      {modalViaje && (
        <div className="modal-overlay" onClick={handleCerrarDetalles}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Detalles del Viaje</h3>
            <ul>
              <li><strong>Fecha:</strong> {modalViaje.fecha}</li>
              <li><strong>Hora:</strong> {modalViaje.hora}</li>
              <li><strong>Origen:</strong> {modalViaje.origen}</li>
              <li><strong>Destino:</strong> {modalViaje.destino}</li>
              <li><strong>Estado:</strong> {modalViaje.estado}</li>
              {modalViaje.voluntario && (
                <li>
                  <strong>Voluntario:</strong> {modalViaje.voluntario.nombre}{" "}
                  <img src={ICONS[modalViaje.voluntario.genero]} alt="icono voluntario" style={{ width: 24, verticalAlign: "middle" }} />
                </li>
              )}
              {modalViaje.motivo && (
                <li><strong>Motivo de cancelación:</strong> {modalViaje.motivo}</li>
              )}
            </ul>
            <button className="btn btn-primary btn-sm" onClick={handleCerrarDetalles}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal Detalles Voluntario */}
      {modalVoluntario && (
        <div className="modal-overlay" onClick={handleCerrarVoluntario}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>
              Viajes con {modalVoluntario.nombre} {modalVoluntario.apellido}
            </h3>
            <ul>
              {modalVoluntario.viajes.map((viaje, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  <strong>Fecha:</strong> {viaje.fecha} &nbsp;
                  <strong>Hora:</strong> {viaje.hora} <br />
                  <strong>Origen:</strong> {viaje.origen} <br />
                  <strong>Destino:</strong> {viaje.destino}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary btn-sm" onClick={handleCerrarVoluntario}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Estilos básicos para el modal */}
      <style>
        {`
        .modal-overlay {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; z-index: 1000;
        }
        .modal-content {
          background: #fff; padding: 2em; border-radius: 8px; min-width: 320px; max-width: 90vw;
        }
        `}
      </style>
    </>
  );
  
};

export default BeneficiarioHistorial;
