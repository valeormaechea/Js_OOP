class Auto {
  constructor(marca, modelo, color, encendido) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.encendido = false;
  }

  encenderAuto() {
    this.encendido = true;
  }

  apagarAuto() {
    this.encendido = false;
  }

  mostrarAuto() {
    document.write(`Marca: ${this.marca}<br>`);
    document.write(`Modelo: ${this.modelo}<br>`);
    document.write(`Color: ${this.color}<br>`);
    
    let estado;
    if (this.encendido) {
      estado = "si";
    } else {
      estado = "no";
    }
    document.write(`Encendido: ${estado}<br><br>`);
  }
}

let auto1 = new Auto("Volkswagen", "Up", "azul", false);
console.log(auto1);
auto1.encenderAuto();
console.log(auto1.encendido);
auto1.mostrarAuto();
auto1.apagarAuto();
console.log(auto1.encendido);
auto1.mostrarAuto();
