"use strict";

//document.querySelector(".burguer").addEventListener("click", mostrarMenu);
/*document.querySelector("#btn-comprar-Circus").addEventListener("click", GamebuyCircus);    
document.querySelector("#btn-comprar-Tetris").addEventListener("click", GamebuyTetris);  
document.querySelector("#btn-comprar-Galaga").addEventListener("click", GamebuyGalaga);  
document.querySelector("#btn-comprar-Truco").addEventListener("click", GamebuyTruco);
document.querySelector("#btn-comprar-TuteCabrero").addEventListener("click", GamebuyTute);
document.querySelector("#btn-comprar-Uno").addEventListener("click", GamebuyUno);
document.querySelector("#btn-comprar-Goal3").addEventListener("click", GamebuyGoal3);
document.querySelector("#btn-comprar-MicroMachine").addEventListener("click", GamebuyMicromachine);
document.querySelector("#btn-comprar-PingPong").addEventListener("click", GamebuyPingpong);

document.querySelector("#btn-comprar-Circus-resp").addEventListener("click", GamebuyCircusResp);
document.querySelector("#btn-comprar-Tetris-resp").addEventListener("click", GamebuyTetrisResp);
document.querySelector("#btn-comprar-Galaga-resp").addEventListener("click", GamebuyGalagaResp);
document.querySelector("#btn-comprar-Truco-resp").addEventListener("click", GamebuyTrucoResp);
document.querySelector("#btn-comprar-Tute-resp").addEventListener("click", GamebuyTuteResp);
document.querySelector("#btn-comprar-Uno-resp").addEventListener("click", GamebuyUnoResp);
document.querySelector("#btn-comprar-Goal3-resp").addEventListener("click", GamebuyGoal3Resp);
document.querySelector("#btn-comprar-MicroMachine-resp").addEventListener("click", GamebuyMicroMachineResp);
document.querySelector("#btn-comprar-PingPong-resp").addEventListener("click", GamebuyPingPongResp);
*/
function GamebuyCircusResp(){
    let carrito = document.querySelector("#cart-inImg-CircusResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTetrisResp(){
    let carrito = document.querySelector("#cart-inImg-TetrisResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyGalagaResp(){
    let carrito = document.querySelector("#cart-inImg-GalagaResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyTrucoResp(){
    let carrito = document.querySelector("#cart-inImg-TrucoResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyTuteResp(){
    let carrito = document.querySelector("#cart-inImg-TuteResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyUnoResp(){
    let carrito = document.querySelector("#cart-inImg-UnoResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyGoal3Resp(){
    let carrito = document.querySelector("#cart-inImg-Goal3Resp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyMicroMachineResp(){
    let carrito = document.querySelector("#cart-inImg-MicroMachineResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}
function GamebuyPingPongResp(){
    let carrito = document.querySelector("#cart-inImg-PingPongResp");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

/*  INTENTO DE REUTILIZAR CODIGO


function btnNormal(evento){
    let buttons = document.querySelectorAll('.btn-comprar');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', obtenerId(evento));
    }
    
};

function btnReponsive(evento){
     let buttonsResp = document.querySelectorAll('.btn-comprar-resp');
     for(let i = 0; i < buttons.length; i++) {
         buttonsResp[i].addEventListener('click', obtenerId);
    }
}

function obtenerId(evento) {
        console.log(evento);
        console.log(evento.target.id);
        Gamebuy(evento.target.id);  
    };  

function Gamebuy( param ){
    console.log(param);
    let carrito = document.querySelector(`#cart-inImg-${param}`);
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}*/


function GamebuyCircus(){
    let carrito = document.querySelector("#cart-inImg-Circus");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTetris(){
    let carrito = document.querySelector("#cart-inImg-Tetris");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyGalaga(){
    let carrito = document.querySelector("#cart-inImg-Galaga");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTruco(){
    let carrito = document.querySelector("#cart-inImg-Truco");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyTute(){
    let carrito = document.querySelector("#cart-inImg-Tute");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyUno(){
    let carrito = document.querySelector("#cart-inImg-Uno");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyGoal3(){
    let carrito = document.querySelector("#cart-inImg-Goal3");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyMicromachine(){
    let carrito = document.querySelector("#cart-inImg-MicroMachine");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}

function GamebuyPingpong(){
    let carrito = document.querySelector("#cart-inImg-PingPong");
    console.log(carrito);
    let string = "fa-solid fa-cart-arrow-down";
    carrito.innerHTML = `<i class="${string}"></i>`;
}



//CARRUSELES

const caja = document.querySelector(".caja-carrusel");
const punto = document.querySelectorAll(".punto");

punto.forEach( (cadaPunto, i) => {
    punto[i].addEventListener("click", () => {
        console.log(punto[i]);
        let posicion = i;
        let operacion = posicion * -13.5;
        caja.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) =>{
            punto[i].classList.remove("activo");
        })
        punto[i].classList.add("activo");
    });
    
});

const cajaDos = document.querySelector(".caja-carrusel-dos");
const puntoDos = document.querySelectorAll(".punto-dos");

puntoDos.forEach( ( i) => {
    puntoDos[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -33;
        cajaDos.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) =>{
            puntoDos[i].classList.remove("activo");
        })
        puntoDos[i].classList.add("activo");
    });
    
});

const cajaTres = document.querySelector(".caja-carrusel-tres");
const puntoTres = document.querySelectorAll(".punto-tres");

puntoTres.forEach( (cadaPunto, i) => {
    puntoTres[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -25;
        cajaTres.style.transform = `translateX(${ operacion }%)`;

        punto.forEach( (cadaPunto, i) =>{
            puntoTres[i].classList.remove("activo");
        })
        puntoTres[i].classList.add("activo");
    });
    
});

// CARRUSEL RESPONSIVE

const cajaResp = document.querySelector(".caja-carrusel-resp");
const puntoResp = document.querySelectorAll(".punto-resp");

puntoResp.forEach( (cadaPunto, i) => {
    puntoResp[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -15;
        cajaResp.style.transform = `translateX(${ operacion }%)`;

        puntoResp.forEach( (cadaPunto, i) =>{
            puntoResp[i].classList.remove("activo-resp");
        });
        puntoResp[i].classList.add("activo-resp");
    });
    
});

const cajaDosResp = document.querySelector(".caja-carrusel-dos-resp");
const puntoDosResp = document.querySelectorAll(".punto-dos-resp");

puntoDosResp.forEach( (cadaPunto, i) => {
    puntoDosResp[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -15;
        cajaDosResp.style.transform = `translateX(${ operacion }%)`;

        puntoDosResp.forEach( (cadaPunto, i) =>{
            puntoDosResp[i].classList.remove("activo-resp");
        })
        puntoDosResp[i].classList.add("activo-resp");
    });
    
});

const cajaTresResp = document.querySelector(".caja-carrusel-tres-resp");
const puntoTresResp = document.querySelectorAll(".punto-tres-resp");

puntoTresResp.forEach( (cadaPunto, i) => {
    puntoTresResp[i].addEventListener("click", () => {
        let posicion = i;
        let operacion = posicion * -15;
        cajaTresResp.style.transform = `translateX(${ operacion }%)`;

        puntoTresResp.forEach( (cadaPunto, i) =>{
            puntoTresResp[i].classList.remove("activo-resp");
        })
        puntoTresResp[i].classList.add("activo-resp");
    });
    
});


