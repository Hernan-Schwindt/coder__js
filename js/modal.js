const popUpCart = document.getElementById("popUpCart");
const trolleyX = document.getElementById("trolleyX");
const modal = document.getElementById("modal");
const itemProducto = document.getElementById("itemProducto");
const itemsTrolley = document.getElementById("itemsTrolley");
const precioTotal = document.getElementById("precioTotal")
const cantidad = document.getElementById("cantidad")
const contadorCarrito = document.getElementById("contadorCarrito")
const botonVaciar = document.getElementById("vaciarCarrito")


let trolley = []

function pullOutCart (){
    document.getElementById("modal").classList.toggle("see");
}