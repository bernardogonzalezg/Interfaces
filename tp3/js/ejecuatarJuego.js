"use strict"
let conteinerEjecutar = document.querySelector("#juego-ejecutado");
conteinerEjecutar.classList.add("container-inactivo");
let btnEjecutar = document.querySelector("#btn-ejecutar").addEventListener("click", renderizarJuego);

function renderizarJuego() {
    let conteinerBtnJuegoEjecutar = document.querySelector("#conteiner-btn-juegoEjecutar");
    conteinerEjecutar.classList.add("container-activo");
    conteinerEjecutar.classList.remove("container-inactivo");
    conteinerBtnJuegoEjecutar.classList.add("container-inactivo");
}