import { Comment } from "./Comment.mjs"
import { Student } from "./Student.mjs";

export class TeacherStudent extends Student {
  constructor(props, skills) {
    super(props);
    this.skills = [skills];
  }

  publicarComentario(newComment) {
    const comentario = new Comment({
      content: newComment,
      studentName: this.name,
      studentRole: `profesor de ${this.skills}`
    });
    return comentario.publicar();
  }
}

//Hacer que la clase TeacherStudent herede de Student
//Agrega un propiedad de tipo Array llamada skills a la clase TeacherStudent.
//Sobrescribir el método publicarComentario dentro de TeacherStundent.
/*Debe agregar el array de skills en la propiedad studentRole de la clase Comment.
El string debe verse de la siguiente manera "profesor de skill1, skill2".
Input*/

const skills = ["js", "python", "mongodb"]
const props = {
  name: "Erik Ochoa",
  username: "elyager"
}

const profesor = new TeacherStudent(props, skills)
profesor.publicarComentario('Mi primer comentario')

/*Output

{
  "studentName":"Erik Ochoa (profesor de js,python,mongodb)",
  "likes":"0 likes",
  "content":"Mi primer comentario"
}*/