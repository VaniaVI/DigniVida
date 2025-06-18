

import React, { useState, useEffect } from 'react';
import './perfilVoluntario.css'; 

const PerfilVoluntario = () => {
  const [perfil, setPerfil] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '', // Opcional, si es relevante para ubicación de tareas
    habilidades: '',
    disponibilidad: {
      lunes: false, martes: false, miercoles: false, jueves: false,
      viernes: false, sabado: false, domingo: false,
      horasInicio: '09:00',
      horasFin: '17:00',
    },
    biografia: '',
  });

  const [isLoading, setIsLoading] = useState(true);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    // Simular la carga de datos del perfil
    setTimeout(() => {
      setPerfil({
        nombre: 'Sofía',
        apellido: 'Vargas',
        email: 'sofia.vargas@ejemplo.com',
        telefono: '+56 9 1234 5678',
        direccion: 'Av. Las Condes 9876, La Florida', // Actualizado para La Florida
        habilidades: 'Conversación, Apoyo emocional, Manejo de apps',
        disponibilidad: {
          lunes: true, martes: true, miercoles: false, jueves: true,
          viernes: false, sabado: true, domingo: false,
          horasInicio: '10:00',
          horasFin: '18:00',
        },
        biografia: 'Me encanta ayudar a los demás y soy muy paciente. Disponible para acompañamientos en mi comuna.',
      });
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prevPerfil) => ({ ...prevPerfil, [name]: value }));
  };

  const handleDisponibilidadChange = (e) => {
    const { name, checked } = e.target;
    setPerfil((prevPerfil) => ({
      ...prevPerfil,
      disponibilidad: { ...prevPerfil.disponibilidad, [name]: checked },
    }));
  };

  const handleHorasChange = (e) => {
    const { name, value } = e.target;
    setPerfil((prevPerfil) => ({
      ...prevPerfil,
      disponibilidad: { ...prevPerfil.disponibilidad, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMensaje('');

    console.log('Enviando datos del perfil:', perfil);
    // Aquí harías la llamada a tu API para GUARDAR los datos
    setTimeout(() => {
      setIsLoading(false);
      setMensaje('¡Perfil actualizado con éxito!');
      setTimeout(() => setMensaje(''), 3000); // Limpiar mensaje después de 3s
    }, 1500);
  };

  if (isLoading && !perfil.nombre) {
    return (
      <div className="perfil-voluntario-container loading">
        <p>Cargando perfil...</p>
      </div>
    );
  }

  return (
    <div className="perfil-voluntario-container">
      <div className="perfil-voluntario-header">
        <h2>Mi Perfil de Voluntario</h2>
        <p>Actualiza tu información, disponibilidad y habilidades.</p>
      </div>

      <form onSubmit={handleSubmit} className="perfil-voluntario-form">
        {mensaje && <div className="mensaje-confirmacion">{mensaje}</div>}

        <div className="form-section">
          <h3>Información Personal</h3>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" value={perfil.nombre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" value={perfil.apellido} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" value={perfil.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" value={perfil.telefono} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="direccion">Dirección (Referencia para Ubicación de Tareas):</label>
            <input type="text" id="direccion" name="direccion" value={perfil.direccion} onChange={handleChange} />
          </div>
        </div>

        <div className="form-section">
          <h3>Disponibilidad</h3>
          <p className="form-description">Marca los días en los que usualmente puedes ofrecer tu tiempo y el rango de horas.</p>
          <div className="form-group-checkboxes">
            {Object.keys(perfil.disponibilidad).filter(key => 
                ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'].includes(key)
            ).map(day => (
              <label key={day} className="checkbox-label">
                <input type="checkbox" name={day} checked={perfil.disponibilidad[day]} onChange={handleDisponibilidadChange} />
                {day.charAt(0).toUpperCase() + day.slice(1)}
              </label>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="horasInicio">Horario Disponible (Inicio):</label>
            <input type="time" id="horasInicio" name="horasInicio" value={perfil.disponibilidad.horasInicio} onChange={handleHorasChange} />
          </div>
          <div className="form-group">
            <label htmlFor="horasFin">Horario Disponible (Fin):</label>
            <input type="time" id="horasFin" name="horasFin" value={perfil.disponibilidad.horasFin} onChange={handleHorasChange} />
          </div>
        </div>

        <div className="form-section">
          <h3>Habilidades e Intereses</h3>
          <p className="form-description">Describe tus habilidades o áreas en las que te sientes cómodo(a) ayudando. (Ej: "Manejo de computadoras, Apoyo emocional, Hablar con personas mayores")</p>
          <div className="form-group">
            <label htmlFor="habilidades">Habilidades:</label>
            <textarea id="habilidades" name="habilidades" value={perfil.habilidades} onChange={handleChange} rows="3"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="biografia">Sobre mí (Biografía corta):</label>
            <textarea id="biografia" name="biografia" value={perfil.biografia} onChange={handleChange} rows="4"></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={isLoading}  onClick={() => setTimeout(() =>alert('¡Cambios guardados exitosamente!'),1800)} >
          {isLoading ? 'Guardando...' : 'Guardar Cambios'}
        </button>
      </form>
    </div>
  );
};

export default PerfilVoluntario;
