class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(`
    <ul>
    <li>Código de producto: ${this.codigo}</li>
    <li>Nombre: ${this.nombre}</li>
    <li>Precio: $${this.precio}</li>
    </ul>
    `);
  }
}

let prod1 = new Producto(152, "Leche", 160);
let prod2 = new Producto(2005, "Alfajor Aguila", 180);
let prod3 = new Producto(783, "Fideos Marolio", 250);

let productos = [prod1, prod2, prod3];

for (i = 0; i <= productos.length; i++) {
  productos[i].imprimeDatos();
}
