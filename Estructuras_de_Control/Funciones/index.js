 /* ********** Funciones********** */

/*
    Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.

    Las funciones en JavaScript son objetos, un tipo especial de objetos:

    Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
    */

    //Declaración de función
    function estoEsUnaFuncion() {
       console.log("Uno");
       console.log("Dos");
       console.log("Tres");
     } 

    //Invocación de función
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion();
    estoEsUnaFuncion(); 
// en este ejemplo la funcion llega hasta el primer return y luego sale de la funcion es decir no se ejecuta el resto de codigo
    function unaFuncionQueDevuelveValor() {
      console.log("Uno");
      return 19;
      console.log("Dos");
      console.log("Tres");
      return "La función ha retornado una Cadena de texto";
    } 

    let valorDeFuncion = unaFuncionQueDevuelveValor();

    console.log(valorDeFuncion);


    // aca se esta declarando una funcion y de una vez se le estan asignado atributos
    function saludar(nombre = "Desconocido", edad = 0) {
       console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
     } 

     // en este caso se estan sobreescribiendo los atributos, por pantalla seran los que se visualicen
    saludar("kEnAi", 7);

    // aquise esta invocando la funcion con los valores que tiene por defecto asignados
    saludar();

    //Funciones declaradas VS funciones expresadas

    funcionDeclarada();

    function funcionDeclarada() {
      console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
    }

    funcionDeclarada();

    funcionExpresada();

    //función anónima
     const funcionExpresada = function () {
      console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
    } 

    funcionExpresada();