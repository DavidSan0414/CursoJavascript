/* ********** Clases -Métodos estáticos, getters y setters  ********** */

/* las clases por defecto no reciben parametros y para eso se utiliza el metodo constructor no es necesario asignarles los atributos
por fuera de la clase ya que javascript lo hace por debajo a diferencia de los prototipos en el caso que se tengan 1000 objetos de la misma clase no van a heredar los 
metodos de la clase padre en caso de que no se utilicen reduciendo memoria y optimizando rendimiento */


class Animal {
    //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    //Métodos y si pueden recibir parametros en caso de necesitarlo
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const nieve = new Animal("Nieve", "Hembra"),
    scoobyDoo = new Animal("scooby", "macho")

nieve.saludar()


// heriencia de clases se hace a traves de la palabra extends y la clase de la cual queremos heredar

class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        //con el método super() se manda a llamar el constructor de la clase padre
        super(nombre, genero); // permite invocar al contructor de la clase que herede
        this.tamanio = tamanio;
        this.claseAnimal = "Perro";
        //this.claseAnimal = "perro";
        this.raza = null;
    }
    sonar() {
        console.log("Soy un " + this.claseAnimal + " y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }

    ladrarMas() {
        console.log("Guauuu Guauuu Guauuu Guauuu")
    }

    grunir() {
        console.log("grrrrrrrrr")
    }
}

const Laika = new Perro('laika', 'hembra', 'mediana')

Laika.saludar()
Laika.sonar()
Laika.ladrar()
Laika.ladrarMas()
Laika.grunir()

console.log(typeof (Laika))


/*

      //un método estático se pueden ejecutar sin necesidad de instanciar la clase
      static queEres() {
        console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
      }
      //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
      get getRaza() {
        return this.raza;
      }
      set setRaza(raza) {
        this.raza = raza;
      }
    }
    Perro.queEres();
    const mimi = new Animal("Mimi", "Hembra"),
      scooby = new Perro("Scooby", "Macho", "Gigante");
    console.log(mimi);
    mimi.saludar();
    mimi.sonar();
    console.log(scooby);
    scooby.saludar();
    scooby.sonar();
    scooby.ladrar();
    console.log(scooby.getRaza);
    scooby.setRaza = "Grán Danés";
    console.log(scooby.getRaza); 
*/









