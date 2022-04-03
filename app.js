

// Array

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = Number(precio);
        this.cantidad = Number(cantidad);
    }
}

const productos = [];
productos.push(new Producto("FIDEOS", 1100, 20, false));
productos.push(new Producto("LECHE", 1700, 24, false));
productos.push(new Producto("GALLETITAS", 1800, 40, false));
productos.push(new Producto("ACEITE", 2500, 24, true));
productos.push(new Producto("SAL", 2300, 50, false));
productos.push(new Producto("SALSA", 1400, 10, false));
productos.push(new Producto("CAFE", 3100, 16, false));
console.log(productos);

// Funcion

function buscarProducto(marca, producto) {
    return marca.find(obj => obj.nombre === producto.toUpperCase())
}

for(let i = 0; i < 3; i++){
    let busqueda = buscarProducto(productos, prompt("Ingresa el nombre del producto en mayusculas"))
    if(busqueda != undefined){
        alert("El producto es " + busqueda.nombre + " su precio es " + busqueda.precio + " y trae " + busqueda.cantidad)
    } else {
        alert("No existe ese producto")
    }
}

// Reduce

const total = productos.reduce(
   (acc, actual) => acc + actual.precio,0 );
console.log(total);





