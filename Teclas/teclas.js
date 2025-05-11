const color1 = "pink"
const color2 = "orange"
const color3 = "lightblue"
const color4 = "purple"
const color5 = "gray"
const color6 = "brown"

document.addEventListener("keydown", function (event) {

    if (event.key === "a") {
        cambiarColor(color1)
    }
    else if (event.key === "s") {
        cambiarColor(color2)
    }
    else if (event.key === "d") {
        cambiarColor(color3)
    }
    else if (event.key === "q") {
        cambiarColor(color4)
    }
    else if (event.key === "w") {
        cambiarColor(color5)
    }
    else if (event.key === "e") {
        cambiarColor(color6)
    }

}
)

function cambiarColor(color) {
    const contenedor = document.getElementById("key");

    contenedor.style.backgroundColor = color;

}