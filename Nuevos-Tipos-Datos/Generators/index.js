/* **********     Curso JavaScript: 54. Generators      ********** */

// los generators no es mas que una funcion que nos permite trabajar de una forma mas amigable con la interface de los iteradores
// en un elemento iterable; para que js sepa que es una funcion de tipo iterador se le debe antepóner un asterisco antes de declar la funcion
// en el caso de las funciones tradicionales se utiliza la palabra reservada return en los generators se utiliza la palara yield 
// no es mas que como un return que le va a indicar a la funcion que se debe activar; en otras palabras convertir el codigo de una funcion en iterable


     function* iterable() {
      yield "hola";
      console.log("Hola consola");
      yield "hola 2";
      console.log("Seguimos con más instrucciones de nuestro código");
      yield "hola 3";
      yield "hola 4";
    }

    let iterador = iterable(); // next palabra reservada para mostrar las propiedades de la funcion generators
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());
    //console.log(iterador.next());

    for (let y of iterador) {
      console.log(y);
    }

    const arr = [...iterable()];
    console.log(arr);

    function cuadrado(valor) {
      setTimeout(() => {
        return console.log({ valor, resultado: valor * valor })
      }, Math.random() * 1000);
    }

    function* generador() {
      console.log("Inicia Generator");
      yield cuadrado(0);
      yield cuadrado(1);
      yield cuadrado(2);
      yield cuadrado(3);
      yield cuadrado(4);
      yield cuadrado(5);
      console.log("Termina Generator");
    }

    let gen = generador();

    for (let y of gen) {
      console.log(y);
    } 
