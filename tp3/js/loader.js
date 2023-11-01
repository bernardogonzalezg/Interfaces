"use strict"

window.onload = function() { 
		
    animateProgress("#cargaBarra",100);
} 

function animateProgress (id, val){    
 
    let getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 100);
        };      
    };
     
    let fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    let i = 0;
    let animacion = function () {         
        if (i<=val){
            document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
                                            
    }
 
    fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
       
}

function transition() {
    document.querySelector(".progress").classList.toggle("progress2");
}

setTimeout(transition, 3000);