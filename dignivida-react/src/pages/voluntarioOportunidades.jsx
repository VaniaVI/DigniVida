import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./EstilosBeneficiarioReact.css"


const VoluntarioOportunidades = () => {
  const [oportunidades, setOportunidades] = useState([]);
  const [filtros, setFiltros] = useState({ tipo: '', ubicacion: 'La Florida', fecha: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Aquí harías la llamada a tu API para obtener oportunidades de voluntariado
    // Ejemplo: fetch('/api/oportunidades', { body: JSON.stringify(filtros) })
    const fetchOportunidades = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulación de carga y filtrado de datos
        setTimeout(() => {
          const datosSimulados = [
            {
              id: 'op001',
              tipo: 'Trámite Municipal',
              fecha: '25 de Julio, 2025',
              hora: '11:00 AM',
              ubicacion: 'La Florida',
              descripcion: 'Acompañamiento a persona mayor para pago de contribuciones.',
              beneficiarioAnonimo: 'Persona mayor',
              requiereHabilidades: ['Paciencia'],
            },
            {
              id: 'op002',
              tipo: 'Visita al Banco',
              fecha: '26 de Julio, 2025',
              hora: '10:00 AM',
              ubicacion: 'Puente Alto',
              descripcion: 'Ayuda con gestión de clave única y retiro de dinero.',
              beneficiarioAnonimo: 'Adulto Mayor',
              requiereHabilidades: ['Conocimiento bancario'],
            },
            {
              id: 'op003',
              tipo: 'Caminata en el Parque',
              fecha: '28 de Julio, 2025',
              hora: '16:00 PM',
              ubicacion: 'La Reina',
              descripcion: 'Compañía para un paseo relajante en el Parque Padre Hurtado.',
              beneficiarioAnonimo: 'Joven con movilidad reducida',
              requiereHabilidades: ['Conversación', 'Empatía'],
            },
            {
                id: 'op004',
                tipo: 'Acompañamiento a Compras',
                fecha: '29 de Julio, 2025',
                hora: '14:00 PM',
                ubicacion: 'La Florida',
                descripcion: 'Ayuda con la lista del supermercado y traslado a casa.',
                beneficiarioAnonimo: 'Persona con discapacidad visual',
                requiereHabilidades: ['Orientación', 'Asistencia'],
            },
          ];

          // Aplicar filtros simulados (en un backend, esto lo haría la consulta a la BD)
          const filteredData = datosSimulados.filter(oportunidad => {
            const matchesTipo = filtros.tipo ? oportunidad.tipo.toLowerCase().includes(filtros.tipo.toLowerCase()) : true;
            const matchesUbicacion = filtros.ubicacion ? oportunidad.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase()) : true;
            const matchesFecha = filtros.fecha ? oportunidad.fecha.includes(filtros.fecha) : true; // Ojo: esto sería más complejo con fechas reales
            return matchesTipo && matchesUbicacion && matchesFecha;
          });

          setOportunidades(filteredData);
          setIsLoading(false);
        }, 800);
      } catch (err) {
        setError('No se pudieron cargar las oportunidades. Inténtalo de nuevo más tarde.');
        setIsLoading(false);
        console.error(err);
      }
    };

    fetchOportunidades();
  }, [filtros]); // Vuelve a cargar si los filtros cambian

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prevFiltros => ({
      ...prevFiltros,
      [name]: value,
    }));
  };

  const handlePostular = (oportunidadId) => {
    // Aquí harías la llamada a tu API para postularse a una oportunidad
    console.log(`Postulando a oportunidad: ${oportunidadId}`);
    alert(`Te has postulado a la oportunidad ${oportunidadId}. ¡Pronto recibirás noticias!`);
    // Opcional: Quitar la oportunidad de la lista después de postularse
    setOportunidades(oportunidades.filter(op => op.id !== oportunidadId));
  };

  return (
    <div className="voluntario-oportunidades-container">
      <h2 className="voluntario-oportunidades-header">Explorar Oportunidades</h2>
      <p className="voluntario-oportunidades-description">Aquí encontrarás solicitudes de acompañamiento a las que puedes postularte.</p>

      <div className="filtros-container">
        <h3>Filtrar Oportunidades</h3>
        <div className="filtro-group">
          <label htmlFor="tipo">Tipo de Acompañamiento:</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={filtros.tipo}
            onChange={handleFiltroChange}
            placeholder="Ej: Médico, Bancario"
          />
        </div>
        <div className="filtro-group">
          <label htmlFor="ubicacion">Ubicación (Comuna):</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={filtros.ubicacion}
            onChange={handleFiltroChange}
            placeholder="Ej: La Florida, Santiago"
          />
        </div>
        <div className="filtro-group">
          <label htmlFor="fecha">Fecha (Exacta):</label>
          <input
            type="text" // Usar "date" si quieres un selector de fecha real
            id="fecha"
            name="fecha"
            value={filtros.fecha}
            onChange={handleFiltroChange}
            placeholder="Ej: 25 de Julio, 2025"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="loading-message">Cargando oportunidades...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : oportunidades.length === 0 ? (
        <div className="no-oportunidades-message">
          <p>No se encontraron oportunidades con los filtros seleccionados.</p>
          <button onClick={() => setFiltros({ tipo: '', ubicacion: '', fecha: '' })} className="btn btn-secondary">
            Borrar Filtros
          </button>
        </div>
      ) : (
        <div className="oportunidades-list">
          {oportunidades.map((oportunidad) => (
            <div key={oportunidad.id} className="oportunidad-card">
              <h3>{oportunidad.tipo}</h3>
              <p><strong>Beneficiario:</strong> {oportunidad.beneficiarioAnonimo}</p>
              <p><strong>Fecha:</strong> {oportunidad.fecha} | <strong>Hora:</strong> {oportunidad.hora}</p>
              <p><strong>Ubicación:</strong> {oportunidad.ubicacion}</p>
              <p className="oportunidad-description">{oportunidad.descripcion}</p>
              {oportunidad.requiereHabilidades && oportunidad.requiereHabilidades.length > 0 && (
                <p className="oportunidad-habilidades">
                  <strong>Requiere:</strong> {oportunidad.requiereHabilidades.join(', ')}
                </p>
              )}
              <button onClick={() => handlePostular(oportunidad.id)} className="btn btn-primary">
                Postularme
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VoluntarioOportunidades;