       // Hacer que el cursor avance automáticamente al siguiente campo
        const inputs = document.querySelectorAll('.verification-code-input');
        
        inputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                if (this.value.length === 1) {
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                }
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value.length === 0) {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });

        document.getElementById('verification-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe normalmente

        window.location.href = 'pasajero-dashboard.html';
    });
