"use strict"

// MUNES DESPLEGABLE

document.querySelector(".burger").addEventListener("click", mostrarMenu);

function mostrarMenu() {
    document.querySelector(".menu").classList.toggle("show");
}

