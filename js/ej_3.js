class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  calcularPerimetro() {
    this.perimetro = this.ancho * 2 + this.alto * 2;
  }

  calcularArea() {
    this.area = this.ancho * this.alto;
  }

  cambiarAlto(alto) {
    this.alto = alto;
  }

  cambiarAncho(ancho) {
    this.ancho = ancho;
  }

  mostrarRectangulo() {
    document.write(`
    RECTANGULO
    <ul>
    <li>Alto: ${this.alto}</li>
    <li>Ancho: ${this.ancho}</li>
    <li>Perimetro: ${this.perimetro}</li>
    <li>Area: ${this.area}</li>
    </ul>
    `);
  }
}

let rectangulo1 = new Rectangulo(10, 5);
rectangulo1.calcularPerimetro();
rectangulo1.calcularArea();
rectangulo1.mostrarRectangulo();
rectangulo1.cambiarAncho(2);
rectangulo1.calcularArea();
rectangulo1.calcularPerimetro();
rectangulo1.mostrarRectangulo();
