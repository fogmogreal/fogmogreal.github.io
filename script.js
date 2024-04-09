//---------------------------- Script para funcionamento da barra de navegação do menu mobile

const menumobile = document.querySelector(".menumobile");
const nav = document.querySelector(".nav");
const zap = document.querySelector(".zap");

menumobile.addEventListener("click", () => nav.classList.toggle("active"));
menumobile.addEventListener("click", () => zap.style.display("none"));

window.addEventListener("load", function() {
    var loader = document.getElementById("preloader");
    loader.style.display = "none";
});

