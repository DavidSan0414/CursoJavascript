 /* **********     Asincronía y el Event Loop    ********** */

    /*  Antes de explicar como funciona el modelo de JavaScript es importante entender algunos conceptos:

     Procesamiento Single thread y Multi thread. => son las unidades basicas de ejecucion de cada proceso que realiza nuestra maquina, en el caso de js se maneja en un solo hilo de ejecucion
     Operaciones de CPU y Operaciones de I / O.-Input,Ouput(entradas) => son aquellas que van a pasar la mayor parte del tiempo consumiendo los procesos de cpu
     Operaciones Concurrentes y Paralelas.=> es cuando dos o mas tareas progresan simultaneamente, mientras que el paralelismo se ejecutan al mismo tiempo al inicio
     Operaciones Bloqueantes y No Bloqueantes.=> se refiere a la fase de espera cada vez que se va ejecutando una parte del codigo y esto hace referencia a como toma esa fase de espera
     Operaciones Síncronas y Asíncronas. => cuando tenrda a lugar la respuesta=> opreacion sincrona se ejecuta en el presente; Asincrona se ejecuta pero no se sabe cuando va a venir la respuesta.

     Javascript usa un modelo asíncrono y no bloqueante, con un loop de eventos implementado en un sólo hilo, 
     (single thread) para operaciones de entrada y salida (input/output).
     */


    //Código Síncrono Bloqueante 

    // una operacion se hace de una vez bloqueando el flujo del hilo principal; mientras se procesa la respuesta 

    (() => {  //funcion anonima autoejecutable

        // cada console.log toma el control del hilo principal, en este ejercicio se imprime los dos primeros consol log y se almacena en
        //memoria las dos funciones declaradas
      console.log("Código Síncrono");
      console.log("Inicio");

      function dos() {
        console.log("Dos");
      }

      function uno() {
        console.log("Uno");
        dos();
        console.log("Tres");
      }

      //se ejecuta la funcion uno la cual tiene en sus metodos otros consol log y la llamada a la funcion dos

      uno();

      // por ultimo se ejecuta este consol log
      console.log("Fin");
    })();

    console.log("********************");

    //Código Asíncrono No Bloquenate
    (() => {
      console.log("Código Asíncrono");
      console.log("Inicio");

      function dos() {
        setTimeout(function () { // en este caso al ejecutar los set tiem out entra en una pila de tareas pendientes a ejecutar dandole prioridad al console.log
          console.log("Dos");
        }, 1000);
      }

      function uno() {
        setTimeout(function () {
          console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
      }

      uno();
      console.log("Fin");
    })(); 
