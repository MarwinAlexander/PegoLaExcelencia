//Menu Burger//
document.addEventListener("DOMContentLoaded", function () 
{ 
const menuBurger = document.querySelector(".menu-burger"); 
const closeMenu = document.querySelector(".close-menu"); 
const headerNavbar = document.querySelector(".header-navbar"); 
const overlay = document.querySelector(".overlay"); 
 
const toggleMenu = () => { 
 
headerNavbar.classList.toggle("active"); 
overlay.classList.toggle("active"); 
document.body.classList.toggle("no-scroll");  
} 
menuBurger.addEventListener("click", toggleMenu); 
closeMenu.addEventListener("click", toggleMenu); 
overlay.addEventListener("click", toggleMenu); 
}) 

//carrusel//
 
    const carruselMatraca = document.querySelector('.carrusel-matraca');
    if (carruselMatraca) {
        carruselMatraca.addEventListener('click', () => {
            carruselMatraca.classList.toggle('eleva');
        });
    }
