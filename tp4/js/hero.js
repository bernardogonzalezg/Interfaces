"use strict"

const logo = document.querySelector(".logo");
const header = document.getElementById("header");

const personaje1 = document.querySelector(".character1");
const personaje2 = document.querySelector(".character2");
const personaje3 = document.querySelector(".character3");
const fondo = document.querySelector(".background-initial");

const images = [personaje1, personaje2, personaje3, fondo, logo];

const cargarElem = () => {
  images.forEach((c) => {
    c.classList.remove("invisible");
  });
};

setTimeout(cargarElem, 100);


window.addEventListener("scroll", () =>{
  

  let scroll = window.scrollY;
  //logo
  if(scroll > 20){
    logo.style.transform = `translateY(-25%)  translateX(-5%) scale(0.25) `;
    logo.style.position = `fixed`;
    headerSticky();
  }
   else {
    header.style.height = "227px";
    document.body.classList.remove("sticky-header");
    logo.style.transform = `scale(1) `;
    logo.style.position = `absolute`;
    logo.style.top = "-30px";
    header.style.zIndex = `1`;
  }

 //personajes
  personaje1.style.transform = `translateY(${-scroll*0.35}px) translateX(${-scroll*0.35}px) `;
  personaje3.style.transform = `translateY(${-scroll*0.25}px) translateX(${scroll*0.25}px)`;
  personaje2.style.transform = ` translateY(${-scroll*0.45}px) `;
  //fondo
  fondo.style.transform = `translateY(${scroll*0.4}px)`
})


const headerSticky = ()=> {
   header.style.height = "80px";
   header.style.zIndex = `10001`;
   document.body.classList.add("sticky-header");
   header.style.position = "sticky";
}

