class Libro {
    constructor(titulo, autor, año, estado = 'disponible') {
      this.titulo = titulo;
      this.autor = autor;
      this.año = año;
      this.estado = estado;
      this.capitulos = []; // Lista de capítulos opcional
    }
  
    describirLibro() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}.`);
    }
  
    agregarCapitulo(capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    }
  
    eliminarCapitulo(capitulo) {
      const indice = this.capitulos.indexOf(capitulo);
      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
      } else {
        console.log(`El capítulo "${capitulo}" no se encontró en el libro "${this.titulo}".`);
      }
    }
  }
  
  // Ejemplo de uso:
  const libro1 = new Libro("Ga`Hoole: La leyenda de los Guardianes", "Sara Cano", 1986);
  libro1.describirLibro();
  libro1.agregarCapitulo("Capítulo 1");
  libro1.agregarCapitulo("Capítulo 2");
  libro1.eliminarCapitulo("Capítulo 1");
  libro1.describirLibro();
  