"use strict";

function GamebuyCircusResp(){
    let carrito = document.querySelector("#cart-inImg-CircusResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}


//CARRUSELES

const cajaPersonalizado = document.querySelector(".caja-carrusel-personalizado");
const puntoPersonalizado = document.querySelectorAll(".punto-personalizado");

puntoPersonalizado.forEach( (cadaPunto, i) => {
    puntoPersonalizado[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -17.5;
        cajaPersonalizado.style.transform = `translateX(${ operacion }%)`;

        puntoPersonalizado.forEach( (cadaPunto, i) =>{
            puntoPersonalizado[i].classList.remove("activo");
        })
        puntoPersonalizado[i].classList.add("activo");
    });
    
});


const cajaAccion = document.querySelector(".caja-carrusel-accion");
const puntoAccion = document.querySelectorAll(".punto-accion");

puntoAccion.forEach( (cadaPunto, i) => {
    puntoAccion[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -17.5;
        cajaAccion.style.transform = `translateX(${ operacion }%)`;

        puntoAccion.forEach( (cadaPunto, i) =>{
            puntoAccion[i].classList.remove("activo");
        })
        puntoAccion[i].classList.add("activo");
    });
    
});


const cajaAventura = document.querySelector(".caja-carrusel-aventura");
const puntoAventura = document.querySelectorAll(".punto-aventura");

puntoAventura.forEach( (cadaPunto, i) => {
    puntoAventura[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -17.5;
        cajaAventura.style.transform = `translateX(${ operacion }%)`;

        puntoAventura.forEach( (cadaPunto, i) =>{
            puntoAventura[i].classList.remove("activo");
        })
        puntoAventura[i].classList.add("activo");
    });
    
});

const cajaCarrera = document.querySelector(".caja-carrusel-carrera");
const puntoCarrera = document.querySelectorAll(".punto-carrera");

puntoCarrera.forEach( (cadaPunto, i) => {
    puntoCarrera[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -17.5;
        cajaCarrera.style.transform = `translateX(${ operacion }%)`;

        puntoCarrera.forEach( (cadaPunto, i) =>{
            puntoCarrera[i].classList.remove("activo");
        })
        puntoCarrera[i].classList.add("activo");
    });
    
});







