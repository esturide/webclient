function initializeFunctions() {
    initStickyHeader();
    initMenuSelector();
}

function initStickyHeader() {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        header.classList.toggle("sticky", window.scrollY > 60);
    });
}

function initMenuSelector(){
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar')

    menu.onclick = () =>{
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    }
}

initializeFunctions();
