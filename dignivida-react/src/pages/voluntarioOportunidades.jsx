import React, { useState, useEffect } from 'react';
import "./EstilosBeneficiarioReact.css";

const regionesYComunas = {
    "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
    "Tarapaca": ["Alto Hospicio", "Iquique", "Camiña", "Colchane", "Huara", "Pica", "Pozo Almonte"],
    "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
    "Atacama": ["Chañaral", "Diego de Almagro", "Caldera", "Copiapó", "Tierra Amarilla", "Alto del Carmen", "Freirina", "Huasco", "Vallenar"],
    "Coquimbo": ["Canela", "Illapel", "Los Vilos", "Salamanca", "Andacollo", "Coquimbo", "La Higuera", "La Serena", "Paihuano", "Vicuña", "Combarbalá", "Monte Patria", "Ovalle", "Punitaqui", "Río Hurtado"],
    "Valparaiso": ["Isla de Pascua", "Calle Larga", "Los Andes", "Rinconada", "San Esteban", "Limache", "Olmué", "Quilpué", "Villa Alemana", "Cabildo", "La Ligua", "Papudo", "Petorca", "Zapallar", "Hijuelas", "La Calera", "La Cruz", "Nogales", "Quillota", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Antonio", "Santo Domingo", "Catemu", "Llaillay", "Panquehue", "Putaendo", "San Felipe", "Santa María", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Valparaíso", "Viña del Mar"],
    "O'higgins": ["Rancagua", "Codegua", "Coínco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Requínoa", "Rengo", "San Francisco de Mostazal", "San Vicente", "La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "Pichilemu", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "San Fernando", "Santa Cruz"],
    "Maule": ["Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Colbún", "Linares", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Talca"],
    "Ñuble": ["Bulnes", "Chillán", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"],
    "Biobio": ["Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa", "Alto Biobío", "Antuco", "Cabrero", "Laja", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Chiguayante", "Concepción", "Coronel", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé"],
    "Araucania": ["Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
    "Los Rios": ["Futrono", "La Unión", "Lago Ranco", "Río Bueno", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "Valdivia"],
    "Los Lagos": ["Ancud", "Castro", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Llanquihue", "Los Muermos", "Maullín", "Puerto Montt", "Puerto Varas", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Pablo", "San Juan de la Costa", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
    "Aysen": ["Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Coyhaique", "Lago Verde", "Chile Chico", "Río Ibáñez"],
    "Magallanes": ["Antártica", "Cabo de Hornos", "Laguna Blanca", "Punta Arenas", "Río Verde", "San Gregorio", "Porvenir", "Primavera", "Timaukel", "Puerto Natales", "Natales", "Torres del Paine"],
    "Metropolitana": ["Colina", "Lampa", "Tiltil", "Pirque", "Puente Alto", "San José de Maipo", "Buin", "Calera de Tango", "Paine", "San Bernardo", "Alhué", "Curacaví", "María Pinto", "Melipilla", "San Pedro", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Granja", "La Florida", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Miguel", "San Joaquín", "San Ramón", "Santiago", "Vitacura", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor", "Talagante"]
 
};

const VoluntarioOportunidades = () => {
  const [oportunidades, setOportunidades] = useState([]);
  const [filtros, setFiltros] = useState({
    tipo: '',
    fecha: '',
    region: '',
    comuna: '',
  });
  const [showFilter, setShowFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos simulados con 19 oportunidades
  const datosSimulados = [
    {
      id: 'op001',
      tipo: 'acompanar-medico',
      tipoLabel: 'Acompañar al médico',
      fecha: '2025-07-25',
      hora: '11:00 AM',
      region: 'Metropolitana',
      comuna: 'La Florida',
      descripcion: 'Acompañamiento a persona mayor para pago de contribuciones.',
      beneficiarioAnonimo: 'Persona mayor',
      requiereHabilidades: ['Paciencia'],
    },
    {
      id: 'op002',
      tipo: 'visita-banco',
      tipoLabel: 'Visita al Banco',
      fecha: '2025-07-26',
      hora: '10:00 AM',
      region: 'Metropolitana',
      comuna: 'Puente Alto',
      descripcion: 'Ayuda con gestión de clave única y retiro de dinero.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Conocimiento bancario'],
    },
    {
      id: 'op003',
      tipo: 'ir-parque',
      tipoLabel: 'Ir al parque',
      fecha: '2025-07-28',
      hora: '16:00 PM',
      region: 'Metropolitana',
      comuna: 'La Reina',
      descripcion: 'Compañía para un paseo relajante en el Parque Padre Hurtado.',
      beneficiarioAnonimo: 'Joven con movilidad reducida',
      requiereHabilidades: ['Conversación', 'Empatía'],
    },
    {
      id: 'op004',
      tipo: 'comprar-medicinas',
      tipoLabel: 'Comprar medicinas',
      fecha: '2025-07-29',
      hora: '14:00 PM',
      region: 'Metropolitana',
      comuna: 'La Florida',
      descripcion: 'Ayuda con la lista del supermercado y traslado a casa.',
      beneficiarioAnonimo: 'Persona con discapacidad visual',
      requiereHabilidades: ['Orientación', 'Asistencia'],
    },
    // 15 oportunidades nuevas inventadas
    {
      id: 'op005',
      tipo: 'acompanar-medico',
      tipoLabel: 'Acompañar al médico',
      fecha: '2025-08-01',
      hora: '09:00 AM',
      region: 'Valparaíso',
      comuna: 'Viña del Mar',
      descripcion: 'Acompañar a adulto mayor a consulta médica en clínica local.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Paciencia', 'Empatía'],
    },
    {
      id: 'op006',
      tipo: 'ir-parque',
      tipoLabel: 'Ir al parque',
      fecha: '2025-08-02',
      hora: '15:00 PM',
      region: 'Valparaíso',
      comuna: 'Quilpué',
      descripcion: 'Paseo en parque para persona con movilidad reducida.',
      beneficiarioAnonimo: 'Persona con discapacidad',
      requiereHabilidades: ['Conversación', 'Apoyo físico'],
    },
    {
      id: 'op007',
      tipo: 'comprar-medicinas',
      tipoLabel: 'Comprar medicinas',
      fecha: '2025-08-03',
      hora: '11:00 AM',
      region: 'Biobío',
      comuna: 'Concepción',
      descripcion: 'Compra de medicamentos para persona mayor con movilidad limitada.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Organización', 'Paciencia'],
    },
    {
      id: 'op008',
      tipo: 'acompanar-medico',
      tipoLabel: 'Acompañar al médico',
      fecha: '2025-08-04',
      hora: '10:30 AM',
      region: 'Biobío',
      comuna: 'Talcahuano',
      descripcion: 'Acompañamiento a consulta médica y apoyo en trámites.',
      beneficiarioAnonimo: 'Persona con discapacidad',
      requiereHabilidades: ['Empatía', 'Comunicación'],
    },
    {
      id: 'op009',
      tipo: 'ir-parque',
      tipoLabel: 'Ir al parque',
      fecha: '2025-08-05',
      hora: '17:00 PM',
      region: 'Metropolitana',
      comuna: 'Santiago Centro',
      descripcion: 'Paseo y compañía para adulto mayor en parque céntrico.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Conversación'],
    },
    {
      id: 'op010',
      tipo: 'comprar-medicinas',
      tipoLabel: 'Comprar medicinas',
      fecha: '2025-08-06',
      hora: '13:00 PM',
      region: 'Valparaíso',
      comuna: 'Valparaíso',
      descripcion: 'Compra y entrega de medicamentos para persona con movilidad reducida.',
      beneficiarioAnonimo: 'Persona con discapacidad',
      requiereHabilidades: ['Organización'],
    },
    {
      id: 'op011',
      tipo: 'acompanar-medico',
      tipoLabel: 'Acompañar al médico',
      fecha: '2025-08-07',
      hora: '09:30 AM',
      region: 'Metropolitana',
      comuna: 'Ñuñoa',
      descripcion: 'Acompañar a adulto mayor a control médico rutinario.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Paciencia'],
    },
    {
      id: 'op012',
      tipo: 'ir-parque',
      tipoLabel: 'Ir al parque',
      fecha: '2025-08-08',
      hora: '16:30 PM',
      region: 'Biobío',
      comuna: 'Chiguayante',
      descripcion: 'Paseo y compañía para persona con movilidad reducida.',
      beneficiarioAnonimo: 'Persona con discapacidad',
      requiereHabilidades: ['Empatía'],
    },
    {
      id: 'op013',
      tipo: 'comprar-medicinas',
      tipoLabel: 'Comprar medicinas',
      fecha: '2025-08-09',
      hora: '14:30 PM',
      region: 'Metropolitana',
      comuna: 'La Florida',
      descripcion: 'Compra de medicamentos para adulto mayor con movilidad limitada.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Organización'],
    },
    {
      id: 'op014',
      tipo: 'acompanar-medico',
      tipoLabel: 'Acompañar al médico',
      fecha: '2025-08-10',
      hora: '10:00 AM',
      region: 'Valparaíso',
      comuna: 'Quilpué',
      descripcion: 'Acompañar a persona mayor a consulta médica.',
      beneficiarioAnonimo: 'Persona mayor',
      requiereHabilidades: ['Paciencia'],
    },
    {
      id: 'op015',
      tipo: 'ir-parque',
      tipoLabel: 'Ir al parque',
      fecha: '2025-08-11',
      hora: '15:00 PM',
      region: 'Metropolitana',
      comuna: 'Santiago Centro',
      descripcion: 'Paseo en parque para persona con movilidad reducida.',
      beneficiarioAnonimo: 'Persona con discapacidad',
      requiereHabilidades: ['Conversación', 'Empatía'],
    },
    {
      id: 'op016',
      tipo: 'comprar-medicinas',
      tipoLabel: 'Comprar medicinas',
      fecha: '2025-08-12',
      hora: '11:00 AM',
      region: 'Biobío',
      comuna: 'Concepción',
      descripcion: 'Compra de medicamentos para persona mayor.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Organización'],
    },
    {
      id: 'op017',
      tipo: 'acompanar-medico',
      tipoLabel: 'Acompañar al médico',
      fecha: '2025-08-13',
      hora: '09:00 AM',
      region: 'Metropolitana',
      comuna: 'Ñuñoa',
      descripcion: 'Acompañamiento a consulta médica.',
      beneficiarioAnonimo: 'Persona mayor',
      requiereHabilidades: ['Paciencia'],
    },
    {
      id: 'op018',
      tipo: 'ir-parque',
      tipoLabel: 'Ir al parque',
      fecha: '2025-08-14',
      hora: '16:00 PM',
      region: 'Valparaíso',
      comuna: 'Viña del Mar',
      descripcion: 'Paseo y compañía para persona con discapacidad.',
      beneficiarioAnonimo: 'Persona con discapacidad',
      requiereHabilidades: ['Empatía'],
    },
    {
      id: 'op019',
      tipo: 'comprar-medicinas',
      tipoLabel: 'Comprar medicinas',
      fecha: '2025-08-15',
      hora: '14:00 PM',
      region: 'Metropolitana',
      comuna: 'La Florida',
      descripcion: 'Compra y entrega de medicamentos.',
      beneficiarioAnonimo: 'Adulto Mayor',
      requiereHabilidades: ['Organización'],
    },
  ];

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      try {
        let filteredData = datosSimulados;

        if (filtros.tipo) {
          filteredData = filteredData.filter(o => o.tipo === filtros.tipo);
        }
        if (filtros.fecha) {
          filteredData = filteredData.filter(o => o.fecha === filtros.fecha);
        }
        if (filtros.region) {
          filteredData = filteredData.filter(o => o.region === filtros.region);
        }
        if (filtros.comuna) {
          filteredData = filteredData.filter(o => o.comuna === filtros.comuna);
        }

        setOportunidades(filteredData);
        setIsLoading(false);
      } catch (err) {
        setError('No se pudieron cargar las oportunidades. Inténtalo de nuevo más tarde.');
        setIsLoading(false);
      }
    }, 800);
  }, [filtros]);

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;

    // Si cambia región, limpiar comuna
    if (name === "region") {
      setFiltros(prev => ({
        ...prev,
        region: value,
        comuna: '', // reset comuna al cambiar región
      }));
    } else {
      setFiltros(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePostular = (oportunidadId) => {
    alert(`Te has postulado a la oportunidad ${oportunidadId}. ¡Pronto recibirás noticias!`);
    setOportunidades(oportunidades.filter(op => op.id !== oportunidadId));
  };

  return (
    <div className="voluntario-oportunidades-container">
      <h2 className="voluntario-oportunidades-header">Explorar Oportunidades</h2>
      <p className="voluntario-oportunidades-description">
        Cerca de ti, tenemos estas oportunidades:
      </p>

      <button className="btn btn-outline" onClick={() => setShowFilter(!showFilter)}>
        {showFilter ? 'Ocultar filtro' : 'Filtrar oportunidades'}
      </button>

      {showFilter && (
        <div className="filtros-container">
          <h3>Filtrar Oportunidades</h3>

          <div className="filtro-group">
            <label htmlFor="tipo">Tipo de Acompañamiento:</label>
            <select id="tipo" name="tipo" value={filtros.tipo} onChange={handleFiltroChange}>
              <option value="">-- Todos --</option>
              <option value="acompanar-medico">Acompañar al médico</option>
              <option value="ir-parque">Ir al parque</option>
              <option value="comprar-medicinas">Comprar medicinas</option>
            </select>
          </div>

          <div className="filtro-group">
            <label htmlFor="fecha">Fecha (Exacta):</label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              value={filtros.fecha}
              onChange={handleFiltroChange}
            />
          </div>

          <div className="filtro-group">
            <label htmlFor="region">Región:</label>
            <select id="region" name="region" value={filtros.region} onChange={handleFiltroChange}>
              <option value="">-- Selecciona región --</option>
              {Object.keys(regionesYComunas).map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>

          <div className="filtro-group">
            <label htmlFor="comuna">Comuna:</label>
            <select
              id="comuna"
              name="comuna"
              value={filtros.comuna}
              onChange={handleFiltroChange}
              disabled={!filtros.region}
            >
              <option value="">-- Selecciona comuna --</option>
              {filtros.region && regionesYComunas[filtros.region].map(comuna => (
                <option key={comuna} value={comuna}>{comuna}</option>
              ))}
            </select>
          </div>

          <button onClick={() => setFiltros({ tipo: '', fecha: '', region: '', comuna: '' })} className="btn btn-secondary">
            Borrar Filtros
          </button>
        </div>
      )}

      {isLoading ? (
        <div className="loading-message">Cargando oportunidades...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : oportunidades.length === 0 ? (
        <div className="no-oportunidades-message">
          <p>No se encontraron oportunidades con los filtros seleccionados.</p>
          <button onClick={() => setFiltros({ tipo: '', fecha: '', region: '', comuna: '' })} className="btn btn-secondary">
            Mostrar todas
          </button>
        </div>
      ) : (
        <div className="oportunidades-list">
          {oportunidades.map((oportunidad) => (
            <div key={oportunidad.id} className="oportunidad-card">
              <h3>{oportunidad.tipoLabel}</h3>
              <p><strong>Beneficiario:</strong> {oportunidad.beneficiarioAnonimo}</p>
              <p><strong>Fecha:</strong> {oportunidad.fecha} | <strong>Hora:</strong> {oportunidad.hora}</p>
              <p><strong>Región:</strong> {oportunidad.region} | <strong>Comuna:</strong> {oportunidad.comuna}</p>
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
