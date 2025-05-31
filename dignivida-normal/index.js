// Obtener elementos del DOM
const modal = document.getElementById("modal-registro");
const btnRegistro = document.getElementById("btn-registro");
const btnSerVoluntario = document.getElementById("btn-ser-voluntario");
const btnSerVoluntario2 = document.getElementById("btn-ser-voluntario-2");
const closeModal = document.getElementsByClassName("close-modal")[0];

// Abrir modal al hacer clic en "Registrarse"
btnRegistro.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "flex";
}

// Abrir modal y preseleccionar "Voluntario" al hacer clic en "Ser Voluntario"
btnSerVoluntario.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "flex";
    // Destacar la opción de voluntario (efecto visual)
    document.querySelectorAll('.user-type-card')[1].style.borderColor = "var(--primary-color)";
    document.querySelectorAll('.user-type-card')[1].style.transform = "translateY(-5px)";
    document.querySelectorAll('.user-type-card')[1].style.boxShadow = "0 10px 20px var(--shadow-color)";
}

// También para el segundo botón "Ser Voluntario"
if (btnSerVoluntario2) {
    btnSerVoluntario2.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "flex";
        // Destacar la opción de voluntario (efecto visual)
        document.querySelectorAll('.user-type-card')[1].style.borderColor = "var(--primary-color)";
        document.querySelectorAll('.user-type-card')[1].style.transform = "translateY(-5px)";
        document.querySelectorAll('.user-type-card')[1].style.boxShadow = "0 10px 20px var(--shadow-color)";
    }
}

// Cerrar modal al hacer clic en la X
closeModal.onclick = function() {
    modal.style.display = "none";
    // Resetear estilos
    document.querySelectorAll('.user-type-card').forEach(card => {
        card.style.borderColor = "transparent";
        card.style.transform = "none";
        card.style.boxShadow = "none";
    });
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // Resetear estilos
        document.querySelectorAll('.user-type-card').forEach(card => {
            card.style.borderColor = "transparent";
            card.style.transform = "none";
            card.style.boxShadow = "none";
        });
    }
}