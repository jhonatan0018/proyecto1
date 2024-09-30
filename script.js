// script.js

// Función para navegar a una sección específica de la página
function navegarASeccion(seccionId) {
    // Obtener el elemento de la sección utilizando su ID
    const seccion = document.getElementById(seccionId);
    // Desplazar la página suavemente hasta la sección especificada
    seccion.scrollIntoView({ behavior: 'smooth' });
}

// Agregar un evento al botón de navegación para la sección de Introduccion
document.getElementById('nav-introduccion').addEventListener('click', function() {
    // Llamar a la función navegarASeccion con el ID de la sección 'inicio'
    navegarASeccion('introduccion');
});

// Agregar un evento al botón de navegación para la sección de Justificacion
document.getElementById('nav-fauna').addEventListener('click', function() {
    // Llamar a la función navegarASeccion con el ID de la sección 'inicio'
    navegarASeccion('fauna');
});
// Agregar un evento al botón de navegación para la sección de Justificacion
document.getElementById('nav-flora').addEventListener('click', function() {
    // Llamar a la función navegarASeccion con el ID de la sección 'inicio'
    navegarASeccion('flora');
});


// Agregar un evento al botón de navegación para la sección de Contacto
document.getElementById('nav-contacto').addEventListener('click', function() {
    // Llamar a la función navegarASeccion con el ID de la sección 'contacto'
    navegarASeccion('contacto');
});

// Agregar un evento para manejar la validación y el envío del formulario de contacto
document.getElementById('contacto').addEventListener('submit', function(event) {
    // Prevenir el comportamiento predeterminado del formulario (que es enviarlo)
    event.preventDefault();

    // Obtener y limpiar (eliminar espacios al principio y al final) el valor del campo de nombre
    const nombre = document.getElementById('nombre').value.trim();
    // Obtener y limpiar el valor del campo de email
    const email = document.getElementById('email').value.trim();
    // Obtener y limpiar el valor del campo de mensaje
    const mensaje = document.getElementById('mensaje').value.trim();

    // Verificar que todos los campos estén completos
    if (nombre === "" || email === "" || mensaje === "") {
        // Mostrar una alerta si algún campo está vacío
        alert('Por favor, complete todos los campos.');
        return; // Detener la ejecución si faltan campos
    }

    // Expresión regular para validar el formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Verificar si el email no cumple con el patrón
    if (!emailPattern.test(email)) {
        // Mostrar una alerta si el email no es válido
        alert('Por favor, ingrese un email válido. Htg');
        return; // Detener la ejecución si el email es inválido
    }

    // Si todas las validaciones pasan, mostrar un mensaje de éxito
    alert('Formulario enviado con éxito.');
    // Enviar el formulario manualmente, ya que se previno su envío al inicio
    this.submit();
});
