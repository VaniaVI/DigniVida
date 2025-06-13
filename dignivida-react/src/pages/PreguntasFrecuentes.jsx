import React, { useState } from 'react';
import './EstilosBeneficiarioReact.css'; 

const PreguntasFrecuentes = () => {
  // Estado para controlar qué pregunta está abierta en el acordeón
  const [openQuestionId, setOpenQuestionId] = useState(null);

  // Datos de las preguntas frecuentes
  const faqs = [
    {
      id: 1,
      question: '¿Qué tipo de acompañamiento ofrece el servicio?',
      answer: 'Nuestro servicio ofrece acompañamiento a personas mayores y/o con movilidad reducida para realizar trámites, visitas médicas, compras, o simplemente para brindar compañía en paseos y actividades recreativas. El objetivo es facilitar su autonomía y bienestar.',
    },
    {
      id: 2,
      question: '¿Quiénes pueden solicitar un acompañamiento (beneficiarios)?',
      answer: 'El servicio está dirigido a personas mayores y/o con movilidad reducida que residen en La Florida, Santiago. Nuestro enfoque es brindar apoyo a quienes necesitan asistencia para desplazarse o realizar actividades cotidianas fuera de su hogar.',
    },
    {
      id: 3,
      question: '¿Cómo puedo solicitar un acompañamiento?',
      answer: 'Si eres un beneficiario, puedes solicitar un acompañamiento a través de tu dashboard personal. Simplemente haz clic en "Solicitar Acompañamiento", completa el formulario con los detalles de tu necesidad (tipo de trámite, fecha, hora, origen y destino), y nuestro sistema buscará un voluntario disponible para ayudarte.',
    },
    {
      id: 4,
      question: '¿Cuáles son los requisitos para ser voluntario?',
      answer: 'Para ser voluntario, debes ser mayor de 18 años, tener disposición para ayudar a la comunidad de La Florida, y pasar por un proceso de verificación de antecedentes. Valoramos la empatía, paciencia y compromiso. Puedes registrarte a través de la sección "Quiero ser Voluntario" en nuestra página principal.',
    },
    {
      id: 5,
      question: '¿Tiene algún costo el servicio de acompañamiento?',
      answer: 'No, el servicio de acompañamiento proporcionado por nuestros voluntarios es completamente **gratuito** para los beneficiarios. Nuestro objetivo es ofrecer un apoyo solidario a la comunidad.',
    },
    {
      id: 6,
      question: '¿Cómo se asigna un voluntario a una solicitud?',
      answer: 'Cuando un beneficiario crea una solicitud, nuestro sistema busca voluntarios disponibles que coincidan con la fecha, hora, ubicación y tipo de acompañamiento requerido. Los voluntarios pueden postularse a las oportunidades que les interesen desde su dashboard, y se les notificará cuando su postulación sea aceptada.',
    },
    {
      id: 7,
      question: '¿Qué pasa si un voluntario no llega o hay un problema?',
      answer: 'Priorizamos la seguridad y el bienestar de nuestros usuarios. En caso de cualquier incidencia, puedes contactar inmediatamente a nuestro equipo de soporte a través del número de emergencia o la sección de ayuda en tu dashboard. Te proporcionaremos asistencia y buscaremos una solución lo antes posible.',
    },
    {
      id: 8,
      question: '¿Cómo puedo contactar al soporte técnico o administrativo?',
      answer: 'Puedes contactar a nuestro equipo de soporte a través del formulario de contacto en la sección "Contacto" de nuestra página web, o enviando un correo electrónico a soporte@nombredelservicio.cl. También puedes encontrar números de teléfono de emergencia en tu dashboard si eres un usuario registrado.',
    },
  ];

  // Función para alternar la visibilidad de la respuesta
  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>Preguntas Frecuentes</h1>
        <p>Encuentra respuestas a las dudas más comunes sobre nuestro servicio de acompañamiento.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.id} className={`faq-item ${openQuestionId === faq.id ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => toggleQuestion(faq.id)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openQuestionId === faq.id ? '−' : '+'}</span>
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-contact-info">
        <h3>¿No encontraste lo que buscabas?</h3>
        <p>Si aún tienes preguntas o necesitas ayuda adicional, no dudes en contactarnos directamente.</p>
        <a href="/contacto" className="btn btn-primary">Contactar Soporte</a>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;