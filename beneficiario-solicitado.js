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
        
        // Modal de confirmación
        const modal = document.getElementById('confirmation-modal');
        const closeModal = document.querySelector('.close-modal');
        
        // Cerrar modal al hacer clic en la X
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Cerrar modal al hacer clic fuera de él
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Seleccionar voluntario
        const selectButtons = document.querySelectorAll('.select-volunteer');
        selectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const volunteerId = this.getAttribute('data-volunteer-id');
                const volunteerCard = this.closest('.volunteer-selection-card');
                const volunteerName = volunteerCard.querySelector('h4').textContent;
                const volunteerAvatar = volunteerCard.querySelector('.volunteer-avatar').src;
                
                // Actualizar información en el modal
                document.getElementById('selected-volunteer-name').textContent = volunteerName;
                document.querySelector('.selected-volunteer-info .volunteer-avatar').src = volunteerAvatar;
                
                // Mostrar modal
                modal.style.display = 'flex';
            });
        });
        
        // Asignación automática
        document.getElementById('btn-auto-assign').addEventListener('click', function() {
            // Simular selección aleatoria de un voluntario
            const randomIndex = Math.floor(Math.random() * selectButtons.length);
            selectButtons[randomIndex].click();
        });