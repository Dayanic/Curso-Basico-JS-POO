class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    };

    agregarIntegrante(integranteNuevo) {
        const exist = this.integrantes.filter(item => item.instrumento == 'Bateria').length > 0;
        if (exist) {
            console.log('Solo se puede registrar un baterista');
        } else {
            this.integrantes.push(integranteNuevo);
        }
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor({
      nombre,
      instrumento,
    }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    };
  }
  
  export {
    Banda,
    Integrante,
  }