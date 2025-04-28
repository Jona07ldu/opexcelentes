let carrito = [];

function agregarCarrito(producto, precio) {
    carrito.push({ producto, precio });
    alert(`${producto} ha sido agregado al carrito.`);
}
