//De esta forma se pueden crear estudiantes con objetos literales (pero es una mala forma ya que no es sostenible en el tiempo)
/***SE COMENTA ESTAS LÍNEAS DE CÓDIGO XQ FUE UNA FORMA DE APRENDER UNA MALA FORMA DE TRABAJAR CON OBJETOS LITERALES***/
/*const juan1 = {
    name: "JuanDC",
    username: "juandc",
    points: 100,
    socialMedia: {
        twitter: "fjuandc",
        instagram: "fjuandc",
        facebook: undefined,
    },

    approvedCourses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
    ],

    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso Responsive Design",
            ]
        },
        {
            name: "Escuela de Videojuegos",
            courses: [
                "Curso Introducción a la Producción de Vgs",
                "Curso de Unreal Engine",
                "Curso de Unioty 3D",
            ]
        }
    ]
};

const miguelito = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 1000,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelitofeliz",
        facebook: undefined,
    },

    approvedCourses: [
        "Curso DataBusiness",
        "Curso Data Viz",
    ],

    learningPaths: [
        {
            name: "Escuela de Desarrollo Web",
            courses: [
                "Curso Definitivo de HTML y CSS",
                "Curso Práctico de HTML y CSS",
                "Curso Responsive Design",
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "Curso DataBusiness",
                "Curso Data Viz",
                "Curso Tableau",
            ]
        }
    ]
};*/

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

export class PlatziClass{
    constructor({
        name,
        videoId,
    }) {
        this.name = name;
        this.videoId = videoId;
    }

    reproducir() {
        videoPlay(this.videoId);
    }

    pausar() {
        videoStop(this.videoId);
    }
}

//Se crea class Clase para asociar los cursos
class Class {
    constructor ({
        name,
        jornada
    }) {
        this._name = name;
        this._jornada = jornada;
    };

    //definición de getter and setter
    get name() {
        return this.name;
    }
    set name(newName) {
        this.name = newName;
    }

    get jornada() {
        return this.jornada;
    }
    set jornada(newJornada) {
        console.log('sdfsdf');
        this.jornada = newJornada;
    }
}

const claseProg = new Class({
    name: "Clase Teórica Programación",
    jornada: "Diurna",
})

const clasePracProg = new Class({
    name: "Clase Práctica Programación",
    jornada: "Vespertina",
})


//Se crea clase de cursos porque los cursos se pueden repetir
class Course {
    constructor ({
        name,
        classes = [],
    }) {
        //De esta forma se ocultan los atributos para que no queden públicos
        this._name = name;
        this._classes = classes;
    }

    //Se crean métodos Get y Set para leer y escribir valores en variables
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName === "Curso Malito de Programación Básica") {
            console.error("Web... no");
        } else {
            this._name = newName;
        }
    }

    get classes() {
        return this._classes;
    }
    set classes(newClasses) {
        this._classes = newClasses;
    }
}

//Se crea objeto instancia de prototipo Course
 const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    classes: [claseProg],
 })

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    classes: [claseProg, clasePracProg],
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    classes: [clasePracProg]
})

//Se crea una clase para poder indicar los cursos de aprendizaje de los alumnos
class LearningPath {
    constructor ({
        nameCourse = undefined,
        courses = undefined,
    }) {
        this._nameCourse = nameCourse;
        this._courses = courses;
    };

    //definición de getter and setter
    get nameCourse() {
        return this._nameCourse;
    }
    set nameCourse(newNameCourse) {
        this._nameCourse = newNameCourse;
    }

    get courses() {
        return this._courses;
    }
    set courses(newCourses) {
        this._courses = newCourses;
    }
}
//Se generan los cursos asociados a una escuela especifica, de esta forma podemos referenciar estos datos al arreglo
//de cursos de los alumnos
const escuelaWeb = new LearningPath({
    nameCourse: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML
    ],
});
const escuelaData = new LearningPath({
    nameCourse: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
    ],
});
const escuelaVgs = new LearningPath({
    nameCourse: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
    ],
});

//Se crea una clase para tener un mejor mantenimiento de datos de alumnos
class Student {
    constructor ({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }) {
        this._name = name;
        this._email = email;
        this._username = username;
        this._socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this._approvedCourses = approvedCourses;
        this._learningPaths = learningPaths;
    };

    //Definición de getter and setter
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }

    get username() {
        return this._username;
    }
    set username(newUsername) {
        this._username = newUsername;
    }

    get socialMedia() {
        return this._socialMedia;
    }
    set socialMedia(newSocialMedia) {
        this._socialMedia = newSocialMedia;
    }

    get approvedCourses() {
        return this._approvedCourses;
    }
    set approvedCourses(newApprovesCourses) {
        this._approvedCourses = newApprovesCourses;
    }

    get learningPaths() {
        return this._learningPaths;
    }
    set learningPaths(newLearningPaths) {
        this._learningPaths = newLearningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb,escuelaData],
});

const miguelito2 = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguelito.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb,escuelaVgs],
});