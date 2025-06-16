import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./EstilosBeneficiarioReact.css";

const estadoBadge = {
  Confirmada: "status-confirmada",
  Pendiente: "status-pendiente",
  Cancelada: "status-cancelada",
  Completada: "status-completada"
};

const VoluntarioTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal de detalles
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tareaDetalle, setTareaDetalle] = useState(null);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        setTimeout(() => {
          const datosSimulados = [
            {
              id: 'sol001',
              tipo: 'Visita Médica',
              fecha: '18 de Julio, 2025',
              hora: '10:00 AM',
              beneficiario: 'María Pérez',
              estado: 'Confirmada',
              direccionOrigen: 'Av. Siempre Viva 742, La Florida',
              direccionDestino: 'Clínica Alemana, Vitacura',
              descripcion: 'Acompañamiento a consulta con especialista en cardiología.',
            },
            {
              id: 'sol002',
              tipo: 'Trámite Bancario',
              fecha: '20 de Julio, 2025',
              hora: '09:30 AM',
              beneficiario: 'Pedro Gómez',
              estado: 'Pendiente',
              direccionOrigen: 'Calle Falsa 123, La Florida',
              direccionDestino: 'Banco Estado, Centro de Santiago',
              descripcion: 'Ayuda con retiro de pensión y actualización de datos.',
            },
            {
              id: 'sol003',
              tipo: 'Compras',
              fecha: '22 de Julio, 2025',
              hora: '15:00 PM',
              beneficiario: 'Ana Torres',
              estado: 'Completada',
              direccionOrigen: 'Pasaje Los Aromos 5, Puente Alto',
              direccionDestino: 'Supermercado Lider, Puente Alto',
              descripcion: 'Asistencia para compras de supermercado.',
            },
          ];
          setTareas(datosSimulados);
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        setError('No se pudieron cargar las tareas. Inténtalo de nuevo más tarde.');
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchTareas();
  }, []);

  // Cambia el estado de la tarea a "Confirmada"
  const handleAceptarTarea = (id) => {
    setTareas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, estado: "Confirmada" } : t
      )
    );
  };

  // Cambia el estado de la tarea a "Completada"
  const handleMarcarCompletada = (id) => {
    setTareas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, estado: "Completada" } : t
      )
    );
    // Si el modal está abierto y es esa tarea, ciérralo
    if (tareaDetalle && tareaDetalle.id === id) {
      cerrarModal();
    }
  };

  // Modal: abrir y cerrar
  const abrirModal = (tarea) => {
    setTareaDetalle(tarea);
    setModalAbierto(true);
    // Mostrar el modal (display: flex)
    setTimeout(() => {
      const modal = document.querySelector('.modal');
      if (modal) modal.style.display = 'flex';
    }, 10);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setTareaDetalle(null);
    // Ocultar el modal (display: none)
    setTimeout(() => {
      const modal = document.querySelector('.modal');
      if (modal) modal.style.display = 'none';
    }, 200);
  };

  if (isLoading) {
    return <div className="auth-section loading-message">Cargando tus tareas...</div>;
  }

  if (error) {
    return <div className="auth-section error-message">{error}</div>;
  }

  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-container" style={{ maxWidth: 800 }}>
          <h2 className="auth-title">Mis Tareas Asignadas</h2>
          <p className="auth-subtitle">
            Aquí puedes ver el estado y los detalles de las solicitudes de acompañamiento que se te han asignado.
          </p>

          {tareas.length === 0 ? (
            <div className="no-tasks-message" style={{ textAlign: "center", margin: "2rem 0" }}>
              <p>No tienes tareas asignadas en este momento. ¡Explora nuevas oportunidades para ayudar!</p>
              <Link to="/voluntarioOportunidades" className="btn btn-primary">Buscar Oportunidades</Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {tareas.map((tarea) => (
                <div key={tarea.id} className="dashboard-card" style={{
                  background: "var(--background-alt)",
                  borderRadius: "10px",
                  padding: "1.5rem",
                  boxShadow: "0 2px 8px var(--shadow-color)",
                  border: "1.5px solid var(--border-color)"
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1rem"
                  }}>
                    <span
                      className={`status-badge ${estadoBadge[tarea.estado]}`}
                      style={{
                        padding: "0.35rem 1.1rem",
                        borderRadius: "12px",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        letterSpacing: "0.02em",
                        color: "#fff"
                      }}
                    >
                      {tarea.estado}
                    </span>
                    <h3 style={{ margin: 0, color: "var(--primary-dark)", fontSize: "1.15rem" }}>
                      {tarea.tipo} - {tarea.beneficiario}
                    </h3>
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "0.7rem",
                    marginBottom: "1rem",
                    color: "var(--text-light)"
                  }}>
                    <p><strong>Fecha:</strong> {tarea.fecha}</p>
                    <p><strong>Hora:</strong> {tarea.hora}</p>
                    <p><strong>Origen:</strong> {tarea.direccionOrigen}</p>
                    <p><strong>Destino:</strong> {tarea.direccionDestino}</p>
                  </div>
                  <p className="task-description" style={{ fontStyle: "italic", color: "#444", marginBottom: "1rem" }}>
                    {tarea.descripcion}
                  </p>
                  <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                    {(tarea.estado === 'Confirmada' || tarea.estado === 'Pendiente') && (
                      <button className="btn btn-secondary">Contactar</button>
                    )}
                    {tarea.estado === 'Confirmada' && (
                      <button className="btn btn-primary" onClick={() => abrirModal(tarea)}>
                        Ver Detalles
                      </button>
                    )}
                    {tarea.estado === 'Pendiente' && (
                      <button className="btn btn-primary" onClick={() => handleAceptarTarea(tarea.id)}>
                        Aceptar Tarea
                      </button>
                    )}
                    {tarea.estado === 'Confirmada' && (
                      <button className="btn btn-success" onClick={() => handleMarcarCompletada(tarea.id)}>
                        Marcar Completada
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* MODAL DE DETALLES */}
          {modalAbierto && tareaDetalle && (
            <div className="modal" style={{ display: "flex" }}>
              <div className="modal-content">
                <span className="close-modal" onClick={cerrarModal}>&times;</span>
                <h2 className="auth-title" style={{ marginBottom: 10 }}>
                  Detalles de la Tarea
                </h2>
                <span
                  className={`status-badge ${estadoBadge[tareaDetalle.estado]}`}
                  style={{
                    marginBottom: 15,
                    display: "inline-block"
                  }}
                >
                  {tareaDetalle.estado}
                </span>
                <div style={{ marginBottom: 15 }}>
                  <strong>Tipo:</strong> {tareaDetalle.tipo}<br />
                  <strong>Beneficiario:</strong> {tareaDetalle.beneficiario}<br />
                  <strong>Fecha:</strong> {tareaDetalle.fecha}<br />
                  <strong>Hora:</strong> {tareaDetalle.hora}<br />
                  <strong>Origen:</strong> {tareaDetalle.direccionOrigen}<br />
                  <strong>Destino:</strong> {tareaDetalle.direccionDestino}<br />
                </div>
                <div style={{ marginBottom: 15 }}>
                  <strong>Descripción:</strong>
                  <p style={{ marginTop: 5 }}>{tareaDetalle.descripcion}</p>
                </div>
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                  {(tareaDetalle.estado === 'Confirmada' || tareaDetalle.estado === 'Pendiente') && (
                    <button className="btn btn-secondary">Contactar</button>
                  )}
                  {tareaDetalle.estado === 'Confirmada' && (
                    <button className="btn btn-success" onClick={() => {
                      handleMarcarCompletada(tareaDetalle.id);
                      cerrarModal();
                    }}>
                      Marcar Completada
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default VoluntarioTareas;
