/*Se define primer objeto literario con atributos*/
const natalia = {
    name: "Natalia Berrios",
    age: 20,
    passCourse: [
        "Curso Definitivo HTML y CSS",
        "Curso Práctico de HTML y CSS"
    ],

    passCourseMethod(newCourse) {
        this.passCourse.push(newCourse);
    }
};

//Se asigna un nuevo curso aprobado a Natalia
/***SE COMENTAN PARA PROBAR MÉTODO CREADO DENTRO DEL OBJETO LITERARIO***/
/*natalia.passCourse.push("Curso de Responsive Design");*/

/*Se genera primer prototipo*/
function Student(name, age, passCourse) {
    this._name = name;
    this._age = age;
    this._passCourse = passCourse;

    //Esta es una de las formas que existen para crear un método dentro de mi prototipo
    /***SE COMENTA ESTE CÓDIGO PARA PROBAR NUEVA FORMA DE CREAR EL MÉTODO***/
    /*this.passCourseMethod = function (newCourse) {
        this.passCourse.push(newCourse);
    }*/
}
//Forma de crear getter and setter en funciones
Student.prototype = {
    get name() { return this._name; },
    set name(newName) { this._name = newName; },
    get age() { return this._age; },
    set age(newAge) { this._age = newAge; },
    get passCourse() { return this._passCourse; },
    set passCourse(newPassCourse) { this._passCourse = newPassCourse; }
} 

//Esta es otra forma de crear métodos para el prototipo
Student.prototype.passCourseMethod = function (newCourse) {
    this.passCourse.push(newCourse);
}

//Se genera primera instancia del prototipo Student
const juanita = new Student(
    "Juanita Bustos",
    15,
    [
        "Curso de introducción a la producción de videojuegos",
        "Curso de creación de personajes",
    ]
)

//Prototipos con la sintaxis de clases
class Student2 {
    /*Mediante el método constructor creamos los parámetros de entrada de nuestro prototipo*/
    /***SE COMENTA ESTA LINEA PARA APRENDER QUE SI QUEREMOS RECIBIR MUCHOS PARÁMETROS DE ENTRADA SE PUEDE CAMBIAR POR UN OBJETO COMO PARAMETRO DE ENTRADA***/
    /*constructor(name, age, passCourses) {*/
    constructor({
        name,
        age,
        email,
        passCourses = []
    }) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.passCourses = passCourses;
    }

    /*De esta forma se crea el método del prototipo de la clase*/
    passCoursesMethod(newCourse) {
        this.passCourses.push(newCourse);
    }
}

//***SE COMENTA ESTA LÍNEA DE CÓDIGO YA QUE SE CAMBIA CONSTRUCTOR PARA RECIBIR UN OBJETO EN VEZ DE PARÁMETROS***/
/*const miguelito = new Student2(
    "Miguel",
    28,
    [
        "Curso Análisis de Negocios para Ciencia de Datos",
        "Curso de Principios de visualización de Datos para BI"
    ],
);*/

const miguelito = new Student2({
    age: 28,
    name: "Miguel Nuñez",
    email: "miguelito@gmail.com",
});