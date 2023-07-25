class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar() {
        console.log(this.studentName + " (" + this.studentRole + ")");
        console.log(this.like + "likes");
        console.log(this.content);
    }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se esta reproduciendo desde la url " + urlSecreta);
}

function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
}

class PlatziClass{
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
        isFree = false,
        lang = "spanish",
    }) {
        //De esta forma se ocultan los atributos para que no queden públicos
        this.name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
    //classes: [claseProg],
 })

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    lang: "english",
    //classes: [claseProg, clasePracProg],
})

const cursoPracticoHTML = new Course({
    name: "Curso Práctico de HTML y CSS",
    lang: "english",
    //classes: [clasePracProg]
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

//ESTA PARTE ES PARA EL MANEJO DE HERENCIA
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
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
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

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        });
        comment.publicar()
    }
}

class FreeStudent extends Student {
    //De esta forma llamamos al constructor de la clase padre
    constructor(props) {
        super(props);
    }

    approveCourses(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student {
    //De esta forma llamamos al constructor de la clase padre
    constructor(props) {
        super(props);
    }

    approveCourses(newCourse) {
        if (newCourse.lang !== "english") {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés")
        }
    }
}

class ExpertStudent extends Student {
    //De esta forma llamamos al constructor de la clase padres
    constructor(props) {
        super(props);
    }

    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }
}

class TeacherStudent extends Student {
    //De esta forma llamamos al constructor de la clase padres
    constructor(props) {
        super(props);
    }

    approveCourses(newCourse) {
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent) {
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        });
        comment.publicar()
    }
}

const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [escuelaWeb,escuelaVgs],
});

const miguelito = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@miguelito.com",
    instagram: "miguelito_feliz",
    learningPaths: [escuelaWeb,escuelaData],
});

const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
});