// Declaracion clase persona
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anoNac) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.anoNac = anoNac;
    this.generacion = "falta emitir generación."
  }
  // Metodo para calcular y mostrar generacion
  mostrarGeneracion() {
    let caracteristica;
    if (this.anoNac < 1949) {
      this.generacion = "Silent Generation";
      caracteristica = "austeridad.";
    } else if (1948 < this.anoNac < 1969) {
      this.generacion = "Baby Boom";
      caracteristica = "ambición.";
    } else if (1968 < this.anoNac < 1981) {
      this.generacion = "Generacion X";
      caracteristica = "obsesión por el éxito.";
    } else if (1980 < this.anoNac < 1994) {
      this.generacion = "Generacion Y";
      caracteristica = "frustración.";
    } else {
      this.generacion = "Generacion Z";
      caracteristica = "irreverencia.";
    }

    document.write(`Pertenece a la generación "${this.generacion}", cuya
        caracteristica principal es: ${caracteristica}<BR>`);
  }
  // Metodo para determinar si la persona es mayor de edad y emitir mensaje
  esMayorDeEdad() {
    if (this.edad >= 18) {
      document.write("La persona ingresada es mayor de edad.");
    } else {
      document.write("La persona ingresada no es mayor de edad.");
    }
  }
  // Metodo para generar DNI aleatorio
  generarDni() {
    let dni2 = Math.floor(Math.random() * 99999999) + 1;
    return dni2;
  }

  // Metodo para mostrar datos de la persona
  mostrarDatos() {
    document.write(`<br>
    <ul>
    <li>Nombre: ${this.nombre}</li>
    <li>Edad: ${this.edad}</li>
    <li>DNI: ${this.dni}</li>
    <li>Sexo: ${this.sexo}</li>
    <li>Peso: ${this.peso} kg</li>
    <li>Altura: ${this.altura} cm</li>
    <li>Año de nacimiento: ${this.anoNac}</li>
    <li>Generación: ${this.generacion}</li>
    </ul>
    `);
  }
}

let persona1 = new Persona("Valentina", 22, 42006769, "F", 65, 175, 1999);
persona1.mostrarGeneracion();
persona1.esMayorDeEdad();
persona1.mostrarDatos();
document.write(`DNI nuevo: ${persona1.generarDni()}`);
