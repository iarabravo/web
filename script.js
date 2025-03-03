const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName('small-img');

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

smallImg[0].onclick=function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick=function(){
    MainImg.src = smallImg[1].src;
}
smallImg[2].onclick=function(){
    MainImg.src = smallImg[2].src;
}
smallImg[3].onclick=function(){
    MainImg.src = smallImg[3].src;
}
smallImg[4].onclick=function(){
    MainImg.src = smallImg[4].src;
}
smallImg[5].onclick=function(){
    MainImg.src = smallImg[5].src;
}
smallImg[6].onclick=function(){
    MainImg.src = smallImg[6].src;
}
smallImg[7].onclick=function(){
    MainImg.src = smallImg[7].src;
}

