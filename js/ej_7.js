class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
  }

  get get_nombre() {
    return this.nombre;
  }
  get get_telefono() {
    return this.telefono;
  }
}

class Agenda {
  constructor(tamanio) {
    if (tamanio == undefined) {
      tamanio = 10;
    }
    this.tamanio = tamanio;
    this.agenda = [];
    console.log(tamanio);
  }

  aniadirContacto(contacto) {
    if (this.agendaLlena() == false) {
      this.agenda.push(contacto);
    } else {
      alert("Agenda llena. No se pueden agregar mas contactos.");
    }
  }

  agendaLlena() {
    return this.tamanio === this.agenda.length;
  }

  existeContacto(nombre) {
    if (
      this.agenda.find((contacto) => contacto.nombre === nombre) !== undefined
    ) {
      return true;
    } else {
      return false;
    }
  }

  listarContactos() {
    this.agenda.forEach((contacto) => {
      document.write(
        `Nombre: ${contacto.get_nombre}<br>Teléfono: ${contacto.get_telefono}<br><br>`
      );
    });
  }

  buscarContacto(nombre) {
    this.agenda.forEach((contacto) => {
      if ((contacto.get_nombre = nombre)) {
        console.log(contacto.get_telefono);
        return contacto.get_telefono;
      }
    });
  }

  eliminarContacto(nombre) {
    this.agenda.forEach((contacto) => {
      if (contacto.get_nombre == nombre) {
        let index = this.agenda.indexOf(contacto);
        this.agenda.splice(index, 1);
      } else {
        return false;
      }
    });
  }

  huecosLibres() {
    return this.tamanio - this.agenda.length;
  }
}

let tamanio = parseInt(
  prompt("Escriba la cantidad de contactos para su agenda: ")
);
let agenda = new Agenda(tamanio);
let opcion = 0;
while (opcion != 8) {
  opcion = parseInt(
    prompt(`Seleccione una opcion: 
    1-Crear contacto
    2-Controlar si existe un contacto
    3-Buscar contacto por nombre
    4-Eliminar contacto
    5-Controlar si la agenda está llena
    6-Controlar cantidad de espacios libres en agenda
    7-Listar contactos
    8-Salir`)
  );
  console.log(opcion);
  let nombre;
  switch (opcion) {
    case 1:
      nombre = prompt(`Ingrese el nombre del contacto: `);
      let telefono = parseInt(
        prompt(`Ingrese el numero de telefono del contacto: `)
      );
      agenda.aniadirContacto(new Contacto(nombre, telefono));
      break;
    case 2:
      nombre = prompt(`Ingrese el nombre del contacto: `);
      if (agenda.existeContacto(nombre)) {
        alert("El contacto si existe.");
      } else {
        alert("El contacto no existe.");
      }
      break;
    case 3:
      nombre = prompt(`Ingrese el nombre del contacto: `);
      console.log(`Mierda ${agenda.buscarContacto(nombre)}`);
      if (agenda.buscarContacto(nombre) === false) {
        alert("El contacto no existe.");
      } else {
        alert(`${nombre} ${agenda.buscarContacto(nombre)}`);
      }
      break;
    case 4:
      nombre = prompt(`Ingrese el nombre del contacto: `);
      agenda.eliminarContacto(nombre);
      if (agenda.eliminarContacto(nombre) == false) {
        alert("El contacto no se puede eliminar porque no existe.");
      }
      break;
    case 5:
      if (agenda.agendaLlena) {
        alert("La agenda esta llena.");
      } else {
        alert("La agenda no esta llena.");
      }
  }
}

// let agenda = new Agenda();
// agenda.añadirContacto(new Contacto("Juan", 3815300432));
// agenda.añadirContacto(new Contacto("Pedro", 3816811948));
// agenda.añadirContacto(new Contacto("Lucas", 3526482364));
// console.log(agenda);
// agenda.listarContactos();
// agenda.buscarContacto("Juan");
// agenda.buscarContacto("Lucas");
// agenda.eliminarContacto("Juan");
// agenda.listarContactos();
// agenda.existeContacto("Juan");
// console.log(agenda.existeContacto("Lucas"));
// agenda.huecosLibres();
