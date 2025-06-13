import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Si necesitas enlaces a detalles de tarea
import "./EstilosBeneficiarioReact.css"

const VoluntarioTareas = () => {
  const [tareas, setTareas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí es donde harías la llamada a tu API para obtener las tareas asignadas al voluntario
    // Ejemplo: fetch('/api/voluntario/mis-tareas')
    const fetchTareas = async () => {
      try {
        // Simulación de una carga de datos
        setTimeout(() => {
          const datosSimulados = [
            {
              id: 'sol001',
              tipo: 'Visita Médica',
              fecha: '18 de Julio, 2025',
              hora: '10:00 AM',
              beneficiario: 'María Pérez',
              estado: 'Confirmada', // Confirmada, Pendiente, Cancelada, Completada
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

  if (isLoading) {
    return <div className="voluntario-tareas-container loading-message">Cargando tus tareas...</div>;
  }

  if (error) {
    return <div className="voluntario-tareas-container error-message">{error}</div>;
  }

  return (
    <div className="voluntario-tareas-container">
      <h2 className="voluntario-tareas-header">Mis Tareas Asignadas</h2>
      <p className="voluntario-tareas-description">Aquí puedes ver el estado y los detalles de las solicitudes de acompañamiento que se te han asignado.</p>

      {tareas.length === 0 ? (
        <div className="no-tasks-message">
          <p>No tienes tareas asignadas en este momento. ¡Explora nuevas oportunidades para ayudar!</p>
          <Link to="/voluntarioOportunidades" className="btn btn-primary">Buscar Oportunidades</Link>
        </div>
      ) : (
        <div className="tasks-list">
          {tareas.map((tarea) => (
            <div key={tarea.id} className="task-card">
              <div className="task-header">
                <span className={`status-badge status-${tarea.estado.toLowerCase().replace(' ', '-')}`}>
                  {tarea.estado}
                </span>
                <h3>{tarea.tipo} - {tarea.beneficiario}</h3>
              </div>
              <div className="task-details-grid">
                <p><strong>Fecha:</strong> {tarea.fecha}</p>
                <p><strong>Hora:</strong> {tarea.hora}</p>
                <p><strong>Origen:</strong> {tarea.direccionOrigen}</p>
                <p><strong>Destino:</strong> {tarea.direccionDestino}</p>
              </div>
              <p className="task-description">{tarea.descripcion}</p>
              <div className="task-actions">
                {/* Puedes añadir botones para Marcar como completada, Contactar beneficiario, etc. */}
                {tarea.estado === 'Confirmada' || tarea.estado === 'Pendiente' ? (
                  <button className="btn btn-secondary">Contactar</button>
                ) : null}
                {tarea.estado === 'Confirmada' && (
                    <Link to={`/voluntarioTareas/${tarea.id}`} className="btn btn-primary">
                        Ver Detalles
                    </Link>
                )}
                {tarea.estado === 'Pendiente' && (
                    <button className="btn btn-primary">Aceptar Tarea</button>
                )}
                {tarea.estado === 'Confirmada' && (
                    <button className="btn btn-success">Marcar Completada</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VoluntarioTareas;