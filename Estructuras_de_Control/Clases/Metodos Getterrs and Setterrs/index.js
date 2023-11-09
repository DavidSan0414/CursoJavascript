/*metodos estaticos*/

class Animal {
    //el constructor es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;
    }
    //Métodos
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}
class Perro extends Animal {
    constructor(nombre, genero, tamanio) {
        //con el método super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio = tamanio;
        this.raza = null;
    }
    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("Guauuu Guauuu!!!");
    }
    //un método estático se pueden ejecutar sin necesidad de instanciar la clase
    static queEres() {
        console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre.");
    }
    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    // al final se manejan como atributos y no como metodos
    get getRaza() {
        return this.raza;
    }
    set setRaza(raza) {
        this.raza = raza;
    }
}

// en este caso se hace uso del metodo estatico sin necesidad de instanciar un obejto de la clase
// al ser un metodo estatico no es necesario crear un objeto para hacer uso de la clase del objeto

Perro.queEres();

//aca se crea un objeto de la clase animal

const minimi = new Animal("Mimimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante");



console.log(minimi);


minimi.saludar();
minimi.sonar();
console.log(scooby);

scooby.saludar();
scooby.sonar();
scooby.ladrar();

/// aca miramos los atributos del objeto
console.log(scooby.getRaza);//null por que no se le esta asignando ningun valor

// aca se le asigna un valor    
scooby.setRaza = "Grán Danés";

//aca ya tiene un valor anteriormente asignado
console.log(scooby.getRaza);  