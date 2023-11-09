
/* ********** Callbacks********** */

//calbacks=>funcion que se ejecuta despues de que otra lo haga 

function cuadradoCallback(value, callback) {
  setTimeout(() => {
    callback(value, value * value); // este es un parametro que recibe de la funcion cuadradoCallback pero ese dato lo convierte en una funcion
  }, 0 | Math.random() * 1000);
}

// aca esta llamando la funcion pero a su vez lo esta convirtiendo en una arrow function
cuadradoCallback(0, (value, result) => {
  console.log("Inicia Callback");
  console.log(`Callback: ${value}, ${result}`); // aca muestra el valor y el resultado
  cuadradoCallback(1, (value, result) => { // aca se hace una copia de la funcion y se vuelve a ejecutar dentro de la funcion principal
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(2, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      cuadradoCallback(3, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(4, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          cuadradoCallback(5, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            console.log("Fin Callback");
            console.log("Callback Hell !!!!!😈🤘");
            console.log("http://callbackhell.com/");
          });
        });
      });
    });
  });
}); 