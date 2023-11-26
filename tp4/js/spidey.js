"use strict"

let duende = document.getElementById('duende');
let seccion = document.getElementById('spidey');

window.addEventListener('scroll', function(e){
    let rect = section2.getBoundingClientRect();
    if (rect.top+400 <= window.innerHeight && rect.bottom-550 >= 0) {
        // Obtener el valor de desplazamiento vertical (scroll)
        let scrollTop = window.scrollY;
        elf.style.transform = 'translate(0, calc(-50% + ' + scrollTop / 2 + 'px)) scale(0.9)';
    }
});