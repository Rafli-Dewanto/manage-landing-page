const hamburger = document.querySelector('#menu-btn')
const nav  = document.querySelector('#menu')
hamburger.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    hamburger.classList.toggle('open');
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
}