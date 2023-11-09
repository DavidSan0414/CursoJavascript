/* **********   Prototipos ********** */

console.log("/* **********   Prototipos ********** */")
/*Clases - Modelo a seguir.
    Objetos - Es una instancia de una clase
      Atributos - es una característica o propiedad del objeto (son variables dentro de un objeto)
      Métodos - son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
     */


// ejemplo de un objeto que al crearse podemos observar en la consola que el objeto se crea como un prototipo o objeto literal
// sin embargo no es funcional para crear varios objetos ya que se estaria copiando las mismas lineas de codigo una y otra vez


const animal = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
}
const animal2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }
}
console.log(animal);
console.log(animal2);


//Función constructora => como su nombre lo indica solo se crea una funcion y apartir de ahi se crear varias copias
// para las classes se deben escribir en el modelo UpperCamelCase

// Nota != esta no es la forma mas optima de crear prototipos ya que cada objeto creado se crea con los metodos del prototipo creado}
// esto quiere decir que si se tienen 1000 objetos creados de esta forma todos tendrian los mismos atributos y metodos creados
// lo cual no es eficiente en el rendimiento de la app a que va a tener atributos o metodos que no se utilizan !! 
function Animal(nombre, genero) {
  //Atributos de la funcion constructora
  this.nombre = nombre;
  this.genero = genero;

  //Métodos-funcion -> el this es necesario para que haga parte de la funcion constructura cuando se instancia en prototipos
  this.sonar = function () {
    console.log("Hago sonidos por que estoy vivo");
  }
  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}
// al agregar la palabra NEW nos permite crear una instancia de un objeto
const gallo = new Animal("claudio", "macho"),
  gallina = new Animal("Maggie", "Hembra")

gallo.sonar();
gallo.saludar();

gallina.sonar();
gallina.saludar();

// muestra el objeto de la clase animal para este caso gallo/gallina
console.log(gallo);
console.log(gallina);


// la forma correcta para los prototipos es asignarle los metodos por fuera del prototipo ejemplo

//Función constructora donde asignamos los métodos al Prototipo, no a la función como tal
function AnimalFormCorrecta(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

//Métodos agregados al prototipo de la función constructora por fuera del prototipo

// en este caso se utiliza la palabra prototype junto con el nombre del metodo que queremos crear
AnimalFormCorrecta.prototype.sonidoFormCorrecta = function () {
  console.log("Hago sonidos por que estoy vivo");
}
AnimalFormCorrecta.prototype.saludarFormCorrecta = function () {
  console.log(`Hola me llamo ${this.nombre}`);
}

const catMinchu = new AnimalFormCorrecta("minchu", "hembra"),
  catThomas = new AnimalFormCorrecta("Thomas", "Macho")

// a diferencia de crear los metodos dentro de funcion prototipo en este caso ya no se crean los metodos dentro del objeto
//lo cual minimiza consumo de memoria y adicional optimiza rendimiento en la app
console.log(catMinchu)
console.log(catThomas)

catMinchu.saludarFormCorrecta();
catMinchu.sonidoFormCorrecta();


//Herencia Prototípica => es decir que herede de una funcion prototipica padre


/* en este ejemplo le vamos a asignar los mismos atributos del padre pero adicional le vamos a agregar una nueva propiedad
 que sea solo del hijo => tamanio => a este modelo se le conoce como: "Asociacion de herencia prototipica"  */
function perroHeredado(nombre, genero, tamanio) {
  //Super manda a llamar al constructor me la clase padre
  this.super = AnimalFormCorrecta;

  //aca se ejecuta la clase padre
  this.super(nombre, genero);

  // aca se le asigna el nuevo atributo al hijo
  this.tamanio = tamanio;
}

//Perro está heredando de AnimalFormaCorrecta sin que herede los atributos que no necesitamos
perroHeredado.prototype = new AnimalFormCorrecta();// no es necesario especificar los parametros nombre y genero por que eso ya lo tiene el contructor del que estamos heredando
perroHeredado.prototype.constructor = perroHeredado; // aca estamos igualando todas las caracteristicas del constructor del prototipo padre"AnimalFormCorrect"


//Sobreescritura de métodos del Prototipo padre en el hijo ejemplo, es decir cambiamos la funcion padre
perroHeredado.prototype.sonidoFormCorrecta = function () {
  console.log("Soy un perro y mi sonido es un ladrido");
}
perroHeredado.prototype.ladrar = function (nombre) {
  console.log("Guauuu Guauuu !!!! mi nombre es:" + nombre + " mucho gusto");
}

const perrBrissa = new perroHeredado("Brissa", "hembra", "mediano"),
  conejLolaBunny = new AnimalFormCorrecta("LolaBunny", "Hembra")

/*-> al analizar el consol log las clases creadas que son heredadas ya aparecen como un objeto de la clase animal y al mirar el prototipo
aparecen los metodos de la clase padre */
console.log(perrBrissa)
console.log(conejLolaBunny)

perrBrissa.sonidoFormCorrecta();
conejLolaBunny.sonidoFormCorrecta();


/* esta invocacion es algo compleja por que esta llamando a la funcion de perroHeredado ladrar la cual deberia mostrar por consola
"Guauuu Guauuu !!!! mi nombre es:" sin embargo la funcion se modifico para que recibiera un parametro Nombrey saludara con el nombre,
es decir en el siguiente ejemplo se utiliza la funcion metodo con el atributo nombre del objeto perrBrissa*/
perrBrissa.ladrar(perrBrissa.nombre);

/*aca simplemente se estan imprimiendo atributos del objeto animal "conejLolaBunny" para practicar*/
console.log(conejLolaBunny.nombre)
console.log(conejLolaBunny.genero)






/* const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");
console.log(snoopy);
console.log(lolaBunny);
snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();
lolaBunny.sonar();
lolaBunny.saludar(); */



