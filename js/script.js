// Validación del formulario de ingreso
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí puedes agregar la lógica de validación del formulario de ingreso.
    if (username === 'usuario' && password === 'contrasena') {
        alert('Ingreso exitoso');
    } else {
        alert('Error: Usuario o contraseña incorrectos');
    }
});

// Validación del formulario de registro
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Muestra un mensaje de registro exitoso (esto es solo un ejemplo).
    alert('Registro exitoso para el usuario ' + newUsername);
    // Cierra el modal de registro.
    $('#registrationModal').modal('hide');
});