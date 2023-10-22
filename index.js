precio = 400000
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

resultado = document.querySelector(".valor-total")
cantidad = document.querySelector(".cantidad")

function aumentarUnidad() {
    let numero = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = numero + 1
    resultado.innerHTML = precioSpan.innerHTML * cantidad.innerHTML

}

function disminuirUnidad() {
    let numero = parseInt(cantidad.innerHTML)
    cantidad.innerHTML = numero - 1
    resultado.innerHTML = precioSpan.innerHTML * cantidad.innerHTML

}
