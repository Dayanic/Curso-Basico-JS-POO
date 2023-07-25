export class Course {
  constructor({
    name,
    classes = [],
  }) {
    this.name = name;
    this.classes = classes;
  };

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (typeof nuevoNombrecito === 'string') {
      if (nuevoNombrecito.trim() != '') {
        this._name = nuevoNombrecito.trim().split(' ').map(nombre => nombre[0].toUpperCase() + nombre.substring(1,nombre.length)).join(' ');
      } 
    }
  }
}