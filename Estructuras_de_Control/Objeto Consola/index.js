/* **********  Objeto console    ********** */

// son objetos propios de javascript
// la consola es un objeto console
console.log(console);



console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nuestra aplicación");


let nombre = "David",
    apellido = "Sanchez",
    edad = 31;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);

// mostar una variable se llama interpolar
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

// %s por que es un texto y %d por que es un digito o numero
console.log(`Hola mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad);

// console.clear(); sirve para limpiar la consola de desarrolador


console.log(window);
console.log(document);

// el console.dir sirve para mostrar los objetos como directorios
console.dir(window);
console.dir(document);

//console.clear();

// console.group sirve para crear una lista
console.group("Cursos de programacion en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();

//sirve para cerrar la lista


// otro ejemplo
console.groupCollapsed("Cursos de programacion en YouTube");
console.log("Curso de JavaScript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de Flexbox");
console.log("Curso de Diseño y Programación Web");
console.groupEnd();



//console.clear();

console.log(console);

//representa el objeto en una tabla


//la funcion asert sirve para ordenar alfabeticamente
console.table(Object.entries(console).sort());


const numeros = [1, 2, 3, 4, 5],
    vocales = ["a", "e", "i", "o", "u"];
// ostrando los arreglos creados en tablas
console.table(numeros);
console.table(vocales);

//Creando un objeto para mostrarlo en tabla
const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "cafe"
}
console.table(perro);



//console.clear();

// cuanto tiempo tarda en ejecutarse esto con fines de rendimiento para cuando se este en produccion
console.time('Cuanto tiempo tarda mi código'); // debe llevar el mismo nombre que en timeEnd mas abajo
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd('Cuanto tiempo tarda mi código');// aca debe llevar el mismo nombre que arriba

console.log(arreglo); // muesta el arreglo de las 100000 posiciones
//console.clear();
for (let i = 0; i <= 100; i++) {
  console.count("código for");
  console.log(i);
}


//console.clear();

//funcion para hacer comprobaciones generalmente se hace para comprobacion de errores o pruebas unitarias
let x = 3,
  y = 2,
  pruebaXY = "Se espera que X siempre sea menor que Y";
console.assert(x < y, { x, y, pruebaXY }); 
