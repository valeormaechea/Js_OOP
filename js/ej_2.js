class Cuenta{
    constructor(titular, saldo){
        this.titular="Alex";
        this.saldo=0;
    }

    ingresar(monto){
        this.saldo=this.saldo+monto;
    }

    extraer(monto){
        this.saldo=this.saldo-monto;
    }

    informar(){
        document.write(`Titular de la cuenta: ${this.titular}`);
        document.write(`<br>Saldo actual: ${this.saldo}<br><br>`);
    }
}

let cuenta1 = new Cuenta();
console.log(cuenta1);
cuenta1.ingresar(1800);
cuenta1.informar();
cuenta1.extraer(200);
cuenta1.informar();
