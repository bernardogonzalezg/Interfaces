"use strict"

const btnGoLogeo = document.querySelector('.inicio-sesion');
const btnGoRegistro = document.querySelector('.registro');
const formRegister = document.querySelector('.container-registro');
const formlogeo = document.querySelector('.container-logeo');

btnGoLogeo.addEventListener('click', () => {
    formRegister.classList.add("container-inactivo");
    formRegister.classList.remove("container-activo");
    formlogeo.classList.add("container-activo");
    formlogeo.classList.remove("container-inactivo");
    window.scrollTo(0, 0);
});

btnGoRegistro.addEventListener('click', () => {
    formRegister.classList.add("container-activo");
    formRegister.classList.remove("container-inactivo");
    formlogeo.classList.add("container-inactivo");
    formlogeo.classList.remove("container-activo");
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