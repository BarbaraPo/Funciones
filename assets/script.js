
/*Funcion inicial*/

function pintar() {
    ele.style.backgroundColor = 'yellow'
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

/* Funcion del punto 2.2*/

function pintar(ele) {
    ele.style.backgroundColor = 'yellow';
}

const ele = document.getElementById("ele1")
ele.addEventListener("click", function (evento) {
    pintar(evento.target);
}
)

/*Funcion del punto 2.3 */

function pintar(color = 'green'){
    ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar('yellow');
})
