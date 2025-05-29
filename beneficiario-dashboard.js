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