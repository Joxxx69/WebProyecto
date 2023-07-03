let productos;
if (localStorage.length>0) {
     productos = JSON.parse(localStorage.getItem('prod'));;
} else {
    productos = [];
}

document.querySelector('.form__productos').addEventListener('submit', e => {
    e.preventDefault();
    
    let id = document.querySelector('#idProducto')
    let desc = document.querySelector('#descProducto')
    let nombre = document.querySelector('#nameProducto')
    let img = document.querySelector('#imgProducto')
    let precio = document.querySelector('#precioProducto')
    const producto = { id:id.value,name:nombre.value, desc:desc.value, img:img.value, precio:precio.value };
    productos.push(producto)
    localStorage.setItem('prod', JSON.stringify(productos));
    id.textContent = "";
    desc.textContent = "";
    img.textContent = "";
    precio.textContent = 0;
})
