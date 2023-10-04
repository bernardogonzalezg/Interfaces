"use strict"

var x = document.getElementById("registro");
var y = document.getElementById("login");

document.querySelector(".inicio-sesion").addEventListener("click", mostrarLogueo);
document.querySelector(".inicio-sesion").addEventListener("click", mostrarLogueo);

function mostrarLogueo() {
    document.querySelector(".form-box").classList.toggle("nomostrar");

}

