class Auto {
    constructor(marca, modelo, color, encendido){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.encendido = encendido;
    }

    encenderAuto(){
        this.encendido = true;
    }

    apagarAuto(){
        this.encendido = false;
    }
}

let auto1 = new Auto("Volkswagen", "Up", "azul", false);
console.log(auto1);
auto1.encenderAuto();
console.log(auto1.encendido);
auto1.apagarAuto();
console.log(auto1.encendido);
