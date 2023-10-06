"use strict"

const registroButton = document.querySelector('.registro');
const inicioSesionButton = document.querySelector('.inicio-sesion');

const registroForm = document.getElementById('registro');
const loginForm = document.getElementById('login');

inicioSesionButton.addEventListener('click', () => {
    registroForm.style.display = 'none';
    loginForm.style.display = 'block';
    window.scrollTo(0, 0);
});

registroButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registroForm.style.display = 'block';
    window.scrollTo(0, 0);
});

document.querySelector(".btn-registro").addEventListener("click", mostrarMensajeExito);

// Después de un registro exitoso, muestra el mensaje de confirmación
function mostrarMensajeExito() {
    const mensajeExito = document.getElementById('registro-exitoso');
    mensajeExito.style.display = 'block';

    // Oculta el mensaje después de 3 segundos
    setTimeout(function () {
        mensajeExito.style.display = 'none';

        // Redirige a la página deseada
        window.location.href = 'home.html'; 
    }, 3000);
}

let captcha = document.querySelector("#captcha").addEventListener("click", cambiarCaptcha);

function cambiarCaptcha(){
    let img = document.querySelector(".captcha");
    img.src = "images/captcha/captcha-exito.jpg";
}