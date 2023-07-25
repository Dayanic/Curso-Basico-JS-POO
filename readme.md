# Programación Orientada a Objetos
* Clases: Están compuestas de atributos y métodos.
* Objetos: Son la instancia de las clases, esto quiere decir, que las clases serán los moldes de lo que serán los objetos.
* Herencia: Nos permite crear nuevas clases a partir de otras clases.
* Encapsulamiento: Esconder datos que solo pueden ser accedidos por la clase.
* Polimorfismo: Un objeto puede comportarse de muchas formas, ejemplo: En herencia, las clases hijas pueden comportarse como su clase padre y viceversa.

# Qué es un objeto en JavaScript
### **Objeto literal**
Los objetos literales se distinguen de los objetos de la POO porque no son instancias de un prototipo creado por el desarrollador. Sin embargo los objetos literales son instancias del prototipo Object creado por defecto en JavaScript.
``` javascript
const Natalia = {
	'Name' : 'Natalia',
	'Age' : 20,
	'Rank': 2000, 
};
```
### **Prototipo**
Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias. Podemos pensarlo como un “molde” de objetos.
```javascript
function Student() {
	this.name = 'Nombre';
	this.age = '18';
	this.points = '750';
}

const Juanita = new Student();
```
### **Objeto**
Los objetos son estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre. De modo que los objetos son instancias de ese prototipo, particularmente cuando dicho prototipo fue creado por el desarrollador (en caso contrario se llaman objetos literales).

### **Atributos**
Dentro de los objetos se pueden guardar atributos para guardar en ellos la información que se les asocia. Así, toda la información del objeto se guarda en sí mismo.

### **Métodos**
Dentro de los objetos también pueden guardarse métodos, los cuales son funciones que, entre otras cosas, permiten actualizar la información guardada en los atributos de forma segura.

### **Atributo __proto__**
Es el nombre que se le da al atributo donde se guardan los métodos que las estructuras de datos tienen por defecto en JavaScript. El atributo __proto__ se hereda a partir de los prototipo por defecto de JavaScript para cada estructura de datos en particular, por ejemplo de los prototipos Object y Array. El atributo __proto__ también se hereda a los objetos, ya que éstos son a la vez instancias de algún prototipo creado por el desarrollador y del prototipo Object.

# Qué es abstracción
Primer pilar de la POO; Podemos reducir la complejidad y permitir una implementación y diseño eficiente de los datos.

Ventajas de uso:
* Evitamos codigo duplicado, es decir, reusamos codigo.
* Podemos crear múltiples instancias con una sola abstracción.
* Al encapsular datos, los estamos protegiendo
* Evitamos código a bajo nivel.
* Podemos cambiar implementaciones en la clase, sin perjudicar su funcionamiento.

# Qué es encapsulamiento
Es guardar, proteger o limitar el acceso de cierto atributos y/o propiedades en nuestros prototipos y objetos.

Cuando hablamos de **encapsulamiento** hablamos de:
* Esconder métodos y atributos
* No permitir la alteración de métodos y atributos

### Encapsulamiento en JavaScript
* No permitir la alteración de métodos y atributos
* Formas de aplicar encapsulamiento en JavaScript:
  * Getters y setters
  * Namespaces
  * Object.defineProperties
  * Módulo de ES6

# Getters y setters en JavaScript
Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.
Esta característica a sido implementada en ES2015, pudiendo modificar el funcionamiento normal de establecer u obtener el valor de una propiedad, a estas se les conoce como accessor properties.

# Módulos de ECMAScript 6
El uso de los módulos en JavaScript depende de las declaraciones ***Export*** e ***Import***.

Para modular, solo basta que el archivo tenga la extensión .js, pero el motor V8 que es el que corre en los navegadores, recomienda usar la extensión ***.mjs***

  1. Esto es útil porque queda claro cuál archivo es modulo y cual no.
  2. Asegura que los archivos de modulo sean tratados como tal por la extensión ***Babel*** o ***Node.js***

### ¿Como Exportar?
Hay dos formas de exportar:
  1. Colocar en frente de cada elemento la palabra ***export***
  2. Exportar en una sola declaración al final del archivo modulo las características que se quieren exportar, ejemplo:
```javascript
export {PlatziClass, Student, LearningPaths};
```
### ¿Como Importar?
La importación obviamente se hace en el script que queremos usar dichos elementos.
```javascript
import {PlatziClass, Student, LearningPaths} from '/ruta';
```
### ¿Como aplicar el modulo en HTML?
```javascript
<script type="module" src="main.js"></script>
```
# Herencia
La herencia nos permite crear “clases madre”, la cual servirá de molde para clases hijas, que compartirán sus métodos y atributos.
Usamos la palabra reservada ***extends***.

### ***Herencia en objetos prototipos***
Para hacer la herencia usando la sintaxis de prototipos podemos hacer lo siguiente:
 
Suponiendo que ya tenemos creada nuestra superclase (Student). Vamos a crear una clase (FreeStudent) que va a pasar los parámetros de inicialización al constructor de la superclase, para esto hacemos uso de la función 
```javascript
call()
```
```javascript
function FreeStudent(props) {
  Student.call(this, props);
}
```
Le pasamos como primer atributo el contexto de ejecución de nuestra nueva “clase” y como segundo parámetro los props, que son estas propiedades que recibiremos de inicialización.
 
Después de esto, clonamos el prototipo de nuestra superclase en el prototipo de nuestra subclase:
```javascript
FreeStudent.prototype = Object.create(Student.prototype);
```
Por último, le agregamos cualquier función extra que deseemos agregar a la subclase:
```javascript
FreeStudent.prototype.approveCourse = function (newCourse) {
  if (newCourse.isFree) {
    this.approvedCourses.push(newCourse);
  } else {
    console.warn(`Lo sentimos, ${this.name}, sólo puedes tomar cursos gratis`);
  }
}
```

# Poliformismo
Es como la herencia reloaded. Es como ‘La Herencia 2.0’. Es un pilar de la OOP. Lo que es importante es lo que se puede hacer con este: Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y atributos del prototipo madre, de la clase madre. Aunque herede las propiedades, el polimorfismo permite cambiar su comportamiento.

Tipos:
* Polimorfismo de Sobrecarga: ocurre cuando existen métodos con el mismo nombre y funcionalidad similar en clases totalmente independientes entre ellas.
* Polimorfismo Paramétrico: El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo).
* Polimorfismo de Inclusión (JS): La habilidad para redefinir por completo el método de una superclase en una subclase.
