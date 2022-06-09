//Declaración clase libro
class Libro {
  constructor(isbn, titulo, autor, nroPags) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.nroPags = nroPags;
  }

  get get_isbn() {
    return this.isbn;
  }

  get get_titulo() {
    return this.titulo;
  }

  get get_autor() {
    return this.autor;
  }

  get get_nroPags() {
    return this.nroPags;
  }

  set set_isbn(isbn) {
    this.isbn = isbn;
  }

  set set_titulo(titulo) {
    this.titulo = titulo;
  }

  set set_autor(autor) {
    this.autor = autor;
  }

  mostrarLibro() {
    document.write(
      `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.nroPags} páginas.<br>`
    );
  }
}

//Funcion para comparar cantidad de páginas de cualquier libro
function compararPags(libro1, libro2) {
  if (libro1.get_nroPags > libro2.get_nroPags) {
    document.write(`El libro ${libro1.get_titulo} tiene mas paginas.<br>`);
  } else {
    document.write(`El libro ${libro2.get_titulo} tiene mas paginas.<br>`);
  }
}

//Declaracion de objetos tipo libro
let libro1 = new Libro(
  9789878000107,
  "Harry Potter y la Piedra Filosofal",
  "Rowling J.K",
  288
);

let libro2 = new Libro(
  9789878000411,
  "Harry Potter y el Misterio del Principe",
  "Rowling J.K",
  576
);

//Llamadas a métodos y funciones
libro1.mostrarLibro();
libro2.mostrarLibro();
compararPags(libro1, libro2);
