var body = document.querySelector('body');
var navbar = document.querySelector('.navbar');
var w = window;
// document.addEventListener('wheel', fijarNavbar);

function fijarNavbar() {
    var posYnavBar = navbar.getBoundingClientRect().top;

    // AL pasar la pos del nav, cambiar la foto por el nombre

    if (w.pageYOffset >= posYnavBar) {

    } else {

    }
}
