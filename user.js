const usuarios = [
    { id: 1, nombre: "1234", contraseña: "1234", fechaVencimiento: "2024-07-01" },
    { id: 2, nombre: "andresvpn", contraseña: "1088829889", fechaVencimiento: "2024-04-24" },
    // Agrega más usuarios si es necesario
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const expirationDate = document.getElementById('expirationDate');
 
    const usuario = usuarios.find(user => user.nombre === username && user.contraseña === password);
    if (usuario) {
        const fechaVencimiento = new Date(usuario.fechaVencimiento);
        const fechaActual = new Date();

        if (fechaActual > fechaVencimiento) {
            errorMessage.textContent = 'Usuario y contraseña han vencido';
                 welcomeMessage.textContent = `usuario ${usuario.nombre} ha vencido`;
                expirationDate.textContent = `Fecha de vencimiento: ${fechaVencimiento.toLocaleDateString()}`;

        } else {
            errorMessage.textContent = ''; // Clear any previous error messages
            welcomeMessage.textContent = `¡Bienvenid@ ${usuario.nombre}!`;
            expirationDate.textContent = `Fecha de vencimiento: ${fechaVencimiento.toLocaleDateString()}`;

            const blurryBackground = document.getElementById('blurryBackground');
            blurryBackground.style.visibility = 'visible';
            blurryBackground.style.opacity = '1';

            setTimeout(() => {
                blurryBackground.style.visibility = 'hidden';
                blurryBackground.style.opacity = '0';
                window.location.href = 'index.html'; // Redirigir a index.html
            }, 3000);
        }
    } else {
        errorMessage.textContent = 'Usuario o contraseña incorrectos';
    }
});