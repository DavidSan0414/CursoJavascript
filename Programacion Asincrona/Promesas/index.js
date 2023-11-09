/* **********  Promesas -  ********** */

/* una promesa no es mas que objetos que representan la eventual finalización (o falla) de una operación 
asincrónica y la obtención de su resultado. Las promesas son una forma de manejar la programación asíncrona
trabaja con dos recursos principales (resolve, reject,)
Cuando realizas una operación asincrónica, en lugar de esperar a que se complete antes de continuar con la
ejecución del código, puedes devolver una promesa. Esta promesa actúa como una especie de "contenedor" 
para el resultado futuro de la operación.*/


function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor " ${value} " ingresado no es un número`);
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

cuadradoPromise(0)
    .then(obj => {
        //console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("4");
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj => {
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        console.log('Fin Promise');
    })
    .catch(err => console.error(err)); 
