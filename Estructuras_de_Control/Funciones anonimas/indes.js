/* ********** Funciones Anónimas Autoejecutables  ********** */
//Función Anónima Autoejecutables que no tienen nombre
             // por ejemplo en la funcion alert de windows se esta invocando una funcion nombrada

       alert("Hola")

       // en el ejemplo del caso anterior se evidencia como se puede generar una funcion anonima es decir:

       /* -> la funcion se encapsula en parentesis por ejemplo y no debe llevar nombre :=>

       (function (){

       })

       => 

       luego se deben agregar los parentesis de invocacion de la funcion es decir =>

       (funcion(){

       })(); los puntos y comas al finalizar la funcion si es necesario agregar punto y coma;

       */
      //ejemplo 
      (function () {
        console.log("Mi primer IIFE");
      })();

      // segundo ejemplo 

       (function (d, w, c) {
         console.log("Mi segunda IIFE");
         console.log(d);
         console.log(w);
         c.log("Este es un console.log")
       })(document, window, console);
       //Formas de escribir las funciones Anónimas Autoejecutables
       //Clásica
       (function () {
         console.log('versión Clásica')
       })();
       //La Crockford (JavaScript The Good Parts)
       ((function () {
         console.log('versión Crockford')
       })());
       //Unaria
       +function () {
         console.log('versión Unaria')
       }();
       //Facebook
       !function () {
         console.log('versión Facebook')
       }(); 