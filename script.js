const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

document.addEventListener("DOMContentLoaded", function () {
    let dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que se cierre inmediatamente
            this.classList.toggle("active"); // Activa el submenú
        });
    });

    // Cerrar el submenú si se toca fuera de él
    document.addEventListener("click", function () {
        dropdowns.forEach(dropdown => dropdown.classList.remove("active"));
    });
});