function Course(name, classes = [], isFree = false, lang = "spanish") {
    this.name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
}

//Se crea objeto instancia de prototipo Course
const cursoProgBasica = {
    name: "Curso Gratis de Programación Básica",
    isFree: true
 }

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    lang: "english",
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
})

/*Se genera primer prototipo*/
function Student({
    name,
    age,
    approvedCourses = [],
    }) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
}

//Forma de crear getter and setter en funciones mediante proto
Student.prototype = {
    get name() { return this._name; },
    set name(newName) { this._name = newName; },
    get age() { return this._age; },
    set age(newAge) { this._age = newAge; },
    get approvedCourses() { return this._approvedCourses; },
    set approvedCourses(newCourses) { this._approvedCourses = newCourses; },
}

//Creación de prototipo que hereda de un prototipo madre
function FreeStudent(props)  {
    Student.call(this, props);
}
//Luego de crear la herencia de prototipos, copiamos los métodos
FreeStudent.prototype = Object.create(Student.prototype);
//Finalmente se agregan los métodos propios de la función heredada
FreeStudent.prototype.approveCourses = function(newCourse) {
    if (newCourse.isFree) {
        this.approvedCourses.push(newCourse);
    } else {
        console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
    }
}

//Creación de prototipo que hereda de un prototipo madre
function BasicStudent(props)  {
    Student.call(this, props);
}
//Luego de crear la herencia de prototipos, copiamos los métodos
BasicStudent.prototype = Object.create(Student.prototype);
//Finalmente se agregan los métodos propios de la función heredada
BasicStudent.prototype.approveCourses = function(newCourse) {
    if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
    } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés")
    }
}

//Creación de prototipo que hereda de un prototipo madre
function ExpertStudent(props)  {
    Student.call(this, props);
}
//Luego de crear la herencia de prototipos, copiamos los métodos
ExpertStudent.prototype = Object.create(Student.prototype);
//Finalmente se agregan los métodos propios de la función heredada
ExpertStudent.prototype.approveCourses = function(newCourse) {
    this.approvedCourses.push(newCourse);
}

//Se genera primera instancia del prototipo Student
const juanita = new FreeStudent({
    name: "Juanita Bustos",
    age: 28,
    email: "juanita@gmail.com",
});

const miguelita = new BasicStudent({
    age: 32,
    name: "Miguel Nuñez",
    email: "miguelito@gmail.com",
});