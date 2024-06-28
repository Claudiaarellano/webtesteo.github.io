document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Aquí puedes realizar validaciones adicionales antes de enviar los datos al servidor

        // Simulación de solicitud al servidor para verificar credenciales
        if (username === 'usuario' && password === 'contraseña') {
            alert('Inicio de sesión exitoso');
            // Aquí podrías redirigir al usuario a otra página, etc.
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });
});
