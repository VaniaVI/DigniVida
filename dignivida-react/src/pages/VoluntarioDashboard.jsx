import { Link } from "react-router-dom";
import "./EstilosBeneficiarioReact.css"

const VoluntarioDashboard = () => {
  // Aquí podrías añadir lógica para cargar datos del voluntario
  // como su nombre, próximas tareas, horas de voluntariado, etc.
  const voluntarioNombre = "Vania"; // Ejemplo
  const proximasTareas = [
    {
      id: 1,
      fecha: "18 de Julio, 2025",
      hora: "14:30 PM",
      tipo: "Trámite bancario",
      beneficiario: "Juan Pérez",
      estado: "Pendiente",
    },
    {
      id: 2,
      fecha: "20 de Julio, 2025",
      hora: "09:00 AM",
      tipo: "Visita médica (CESFAM)",
      beneficiario: "María Gómez",
      estado: "Pendiente",
    },
  ];
  const horasVoluntariado = 45; // Ejemplo de horas acumuladas

  return (
    <div className="VoluntarioDashboard">
      <section className="dashboard-hero">
        <div className="container">
          <div className="welcome-message">
            <h2>Bienvenido, {voluntarioNombre}</h2>
            <p>Aquí puedes gestionar tus tareas y ver tu impacto.</p>
          </div>
        </div>
      </section>

      <section className="dashboard-content">
        <div className="container">
          {/* Tarjetas de acciones principales */}
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <div className="card-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/992/992451.png" // Icono de lista de tareas
                  alt="Icono tareas"
                />
              </div>
              <h3>Mis Tareas Asignadas</h3>
              <p>Revisa y gestiona las solicitudes de acompañamiento que tienes pendientes.</p>
              <Link to="/voluntarioTareas" className="btn btn-primary">
                Ver Tareas
              </Link>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/942/942748.png" // Icono de oportunidades
                  alt="Icono oportunidades"
                />
              </div>
              <h3>Explorar Oportunidades</h3>
              <p>Encuentra nuevas solicitudes de acompañamiento y ofrece tu ayuda.</p>
              <Link to="/voluntarioOportunidades" className="btn btn-primary">
                Buscar Solicitudes
              </Link>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/166/166256.png" // Icono de perfil (similar al del beneficiario)
                  alt="Icono perfil"
                />
              </div>
              <h3>Mi Perfil</h3>
              <p>Actualiza tu disponibilidad, habilidades y datos de contacto.</p>
              <Link to="/perfilVoluntario" className="btn btn-primary">
                Editar Perfil
              </Link>
            </div>
          </div>

          {/* Sección de Resumen de Actividad / Próximas Tareas */}
          <div className="activity-summary">
            <h3>Resumen de Actividad</h3>
            <div className="summary-cards">
              <div className="summary-card">
                <h4>Horas de Voluntariado Acumuladas</h4>
                <p className="summary-value">{horasVoluntariado} horas</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/921/921591.png" // Icono de reloj/tiempo
                  alt="Icono horas"
                  className="summary-icon"
                />
              </div>
              {/* Podrías añadir más tarjetas aquí, como: */}
              <div className="summary-card">
                <h4>Acompañamientos Realizados</h4>
                <p className="summary-value">12</p>{" "}
                {/* Ejemplo: número de acompañamientos */}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2921/2921935.png" // Icono de personas/ayuda
                  alt="Icono acompañamientos"
                  className="summary-icon"
                />
              </div>
            </div>
          </div>

          {/* Listado de Próximas Tareas */}
          <div className="upcoming-tasks">
            <h3>Tus Próximas Tareas</h3>
            {proximasTareas.length > 0 ? (
              <div className="tasks-list">
                {proximasTareas.map((tarea) => (
                  <div key={tarea.id} className="task-card">
                    <div className="task-header">
                      <span className={`status-badge ${tarea.estado.toLowerCase()}`}>
                        {tarea.estado}
                      </span>
                      <h4>
                        {tarea.tipo} con {tarea.beneficiario}
                      </h4>
                    </div>
                    <div className="task-details">
                      <div className="detail-item">
                        <strong>Fecha:</strong> {tarea.fecha}
                      </div>
                      <div className="detail-item">
                        <strong>Hora:</strong> {tarea.hora}
                      </div>
                    </div>
                    <Link to={`/voluntarioTareas/${tarea.id}`} className="btn btn-secondary btn-small">
                      Ver Detalles
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <p className="no-tasks-message">No tienes tareas pendientes. ¡Explora nuevas oportunidades!</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoluntarioDashboard;