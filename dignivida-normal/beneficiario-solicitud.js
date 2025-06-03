// Script para mostrar/ocultar el menú desplegable del usuario
document.querySelector('.user-info').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').classList.toggle('active');
});

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
    if (!event.target.closest('.user-menu')) {
        document.querySelector('.dropdown-menu').classList.remove('active');
    }
});

// Establecer la fecha mínima como hoy
const today = new Date().toISOString().split('T')[0];
document.getElementById('fecha').min = today;

// Mostrar campo adicional si se selecciona "Otro" en tipo de trámite
document.getElementById('tipo-tramite').addEventListener('change', function() {
    const otroTramiteContainer = document.getElementById('otro-tramite-container');
    if (this.value === 'otro') {
        otroTramiteContainer.style.display = 'block';
        document.getElementById('otro-tramite').required = true;
    } else {
        otroTramiteContainer.style.display = 'none';
        document.getElementById('otro-tramite').required = false;
    }
    checkFormValidity();
});

// Verificar si todos los campos requeridos están completos
function checkFormValidity() {
    const form = document.getElementById('solicitud-form');
    const submitButton = document.getElementById('btn-enviar');
    
    // Obtener todos los campos requeridos
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    
    // Verificar si todos los campos requeridos tienen valor
    requiredFields.forEach(field => {
        if (!field.value) {
            allValid = false;
        }
    });
    
    // Habilitar o deshabilitar el botón según la validez del formulario
    submitButton.disabled = !allValid;
}

// Agregar evento de cambio a todos los campos del formulario
const formFields = document.querySelectorAll('#solicitud-form input, #solicitud-form select, #solicitud-form textarea');
formFields.forEach(field => {
    field.addEventListener('change', checkFormValidity);
    field.addEventListener('input', checkFormValidity);
});

// Manejar el envío del formulario
document.getElementById('solicitud-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ocultar el formulario y mostrar el mensaje de confirmación
    this.style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';
    
    // En un entorno real, aquí se enviarían los datos al servidor
    window.location.href = 'pasajero-seleccionar-voluntario.html';
});