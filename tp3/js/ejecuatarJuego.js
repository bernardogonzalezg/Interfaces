"use strict"

let conteinerJuego = document.querySelector("#juego-ejecutado");
let conteinerOpciones = document.querySelector("#game-settings");
let conteinerInicial = document.querySelector("#conteiner-btn-juegoEjecutar");

//desactiva al cargar el juego y las opciones de juego
conteinerJuego.classList.add("container-inactivo");
conteinerOpciones.classList.add("container-inactivo");

//activa las opciones, desactiva la presentacion
function irOpciones() {
    conteinerOpciones.classList.add("container-activo");
    conteinerOpciones.classList.remove("container-inactivo");
    conteinerInicial.classList.add("container-inactivo");
}
 //desactiva las opciones y activa el juego
function renderizarJuego(){
    conteinerJuego.classList.add("container-activo");
    conteinerJuego.classList.remove("container-inactivo");
    conteinerOpciones.classList.add("container-inactivo");
    conteinerOpciones.classList.remove("container-activo");
}

//desactiva el juego y activa la presentacion
function salirJuego(){
    conteinerJuego.classList.add("container-inactivo");
    conteinerJuego.classList.remove("container-activo");
    conteinerInicial.classList.add("container-activo");
    conteinerInicial.classList.remove("container-inactivo");
}

document.querySelector("#btn-ejecutar").addEventListener("click", irOpciones);
document.querySelector("#play-settings-btn").addEventListener("click", renderizarJuego);
document.querySelector("#close-btn").addEventListener("click", salirJuego);