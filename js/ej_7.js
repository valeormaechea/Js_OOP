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

  añadirContacto(contacto) {
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
      if (contacto.get_nombre == nombre) {
        return contacto.get_telefono;
      }
    });
  }

  eliminarContacto(nombre) {
    this.agenda.forEach((contacto) => {
      if (contacto.get_nombre == nombre) {
        let index = this.agenda.indexOf(contacto);
        this.agenda.splice(index, 1);
      }
    });
  }

  huecosLibres() {
    let huecos = this.tamanio - this.agenda.length;
  }
}

let agenda = new Agenda();
let agenda1 = new Agenda(25);
agenda.añadirContacto(new Contacto("Juan", 3815300432));
agenda.añadirContacto(new Contacto("Pedro", 3816811948));
agenda.añadirContacto(new Contacto("Lucas", 3526482364));
console.log(agenda);
agenda.listarContactos();
agenda.buscarContacto("Juan");
agenda.buscarContacto("Lucas");
agenda.eliminarContacto("Juan");
agenda.listarContactos();
agenda.existeContacto("Juan");
console.log(agenda.existeContacto("Lucas"));
agenda.huecosLibres();
