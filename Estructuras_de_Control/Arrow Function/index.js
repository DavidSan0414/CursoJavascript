	/* **********   Arrow Functions ********** */
console.log("/* *******************   Arrow Functions ****************** */");

// funcion anonima 



const saludo = function () {
  console.log("Hola, estoy imprimiendo por pantalla una funcion anonima")
}

// invocacion de la funcion anonima
saludo();

// arrow function -> es basicamente simplificar la funcion es decir quitar la plabra function y agregar el simbolo =>
//ejemplo

const saludoArrowFunt = () => {
  console.log("Hola, estoy imprimiendo por pantalla una arrow function ")
}

// invocacion de la funcion arrow function
saludoArrowFunt();

// cuando la arrow function solo tiene una linea de codigo se pueden omitir las llaves y se puede dejar una sola linea de codigo
//ejemplo 

const saludoArrowFunt1 = () => console.log("Hola, estoy imprimiendo por pantalla una arrow function con el metodo abreviado")
saludoArrowFunt1();

//ejemplo de saludo a una persona con una arrow function 

const saludarPersona = (nombrePers) => console.log("Bienvenido " + nombrePers);

// valor asignado a la funcion arrow "David"
saludarPersona("John")

//Otra forma de mostrar la variable del nombre con comillas invertidas y
const saludarPersona1 = nombrePers => console.log(`Bienvenido ${nombrePers} `);

saludarPersona1("David")

//suma de la forma arrowFunction
const sumarArrowF = (a, b) => a + b;

console.log(sumarArrowF(5, 14))

// arrow function de varias lineas, aca si es necesario los corchetes

const funTdeVariaslLineas = () => {

  console.log("Uno")
  console.log("dos")
  console.log("tres")
}

funTdeVariaslLineas();

//arreglo normal

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (el, index) {
  console.log(`El elemento ${el} esta en la posicion ${index}`);
})

// arrow function de un arreglo

const numerosArrow = [1, 2, 3, 4, 5];

numeros.forEach((el, index) => console.log(`${el} esta en la posición ${index}`));

// contexto de this
// en este ejemplo this toma el contexto de la consola de windows es decir como si fuera global

function Perro() {
  console.log(this);
}

Perro();

//en este caso al crear el objeto el this toma el contexto del objeto

const perro = {
  nombre: "kenai",
  ladrar() {
    console.log(this)
  }
}

perro.ladrar(); 
