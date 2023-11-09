//desde aca vamos a invocar las funciones

import { NumeroCaracteresAF, NumeroCaracteresAF1, NumeroCaracteresAF2 } from "./js-funciones-flecha/funciones1fl.js";
import { caracteresIndicados, caracteresIndicados1, caracteresIndicados2, caracteresIndicados3, caracteresIndicados4, recorTextoAf } from "./js-funciones-flecha/funciones2fl.js";
import { stringDado, stringDado1, stringdado2 } from "./js-funciones-flecha/funciones3fl.js";
import { repitaTexto, repitaTexto1 } from "./js-funciones-flecha/funciones4fl.js";
import { repetirTexto, repetirTexto1, repetirTexto2 } from "./js/Funciones4.js";
import {cantidadCaracteres,cantidadCaracteres1,cantidadCaracteres2} from "./js/funciones1.js"
import {textoAnalizado, textoAnalizado2,textoAnalizado3} from "./js/funciones2.js"
import { textoaDividir, textoaDividir1, textoaDividir2 } from "./js/funciones3.js";



let frase1 = cantidadCaracteres();
console.log(frase1)
//forma 2

let frase2 = cantidadCaracteres1("Hola Mundo");
console.log(frase2)

// Sin necesidad de crear una variable let frase 2
console.log(cantidadCaracteres1("Hola Mundo"))
//forma 3

cantidadCaracteres2();

//Segunda funcion

console.log("***************Segunda Funcion**************")

textoAnalizado()

console.log(textoAnalizado2("Hola Mundo"))

textoAnalizado3()

// tercera funcion

console.log("***************Tercera Funcion**************")

textoaDividir('hola que tal', ' ')
textoaDividir1()
console.log(textoaDividir2('Hola que tal'))

//////// cuarta funcion

console.log("***************Cuarta Funcion**************")

repetirTexto();
repetirTexto1("David",1)
repetirTexto2("Zeus",3)

//priemera funcion Arrow Function 

console.log("***************Primer Funcion AF =>**************")

NumeroCaracteresAF()
NumeroCaracteresAF1("Hola Mundo")
let fraseAF = NumeroCaracteresAF2("Hola Mundo")
console.log(fraseAF)


//Segunda funcion Arrow Function 

console.log("***************Segunda Funcion AF =>**************")

caracteresIndicados()
caracteresIndicados1("Hola Mundo AF")
caracteresIndicados2()
console.log(caracteresIndicados3())// este es como su fuera un return
console.log(caracteresIndicados4("Hola Mundo AF",8))

recorTextoAf("Hola Munedo AF",4)



//Tercera funcion Arrow Function 

console.log("***************Tercera Funcion AF =>**************")

stringDado("Hola que tal", " ",3)
stringDado1("Hola que tal")
console.log(stringdado2())  


//Cuarta funcion Arrow Function 

console.log("***************Cuarta Funcion AF =>**************")

repitaTexto("Programar",5)
repitaTexto1("david",4)
