/***************** Parámetros REST & Operador Spread - #jonmircha     ********** */
console.log('/***************** Parámetros REST & Operador Spread ********* */')


/// funcion para sumar n numeros

function sumarREST(a,b, ...c){
    let resultadoSumaREST = a+b;

    c.forEach(function (n) {
        resultadoSumaREST += n
      });

      return resultadoSumaREST;
    }

    console.log(sumarREST(1, 2));
    console.log(sumarREST(1, 2, 3));
    console.log(sumarREST(1, 2, 3, 4));
    console.log(sumarREST(1, 2, 3, 4, 5));
    console.log(sumarREST(1, 2, 3, 4, 5, 6));
    console.log(sumarREST(1, 2, 3, 4, 5, 6, 7));
    console.log(sumarREST(1, 2, 3, 4, 5, 6, 7,8));
    console.log(sumarREST(1, 2, 3, 4, 5, 6, 7,8,9));
    console.log(sumarREST(1, 2, 3, 4, 5, 6, 7,8,9,10));

// genereando dos matrices para unir su valor en una sola matriz

    const arr1 = [1, 2, 3, 4, 5],
      arr2 = [6, 7, 8, 9, 0];

    //Aca solamente mostraria el valor de las dos matrices pero no las uniria en una sola
    console.log(arr1, arr2);

    // en esta constante de matriz si uniria los dos arreglos en uno solo al anteponer los tres puntos suspensivos...antes del arreglo
    const arr3 = [...arr1, ...arr2];
    console.log(arr3);


    //Ejemplo # 2

    function restarREST (a,b,...c){

        let resultadoRestaREST =a-b;

        c.forEach(function(n){
            resultadoRestaREST-=n
        });

        return resultadoRestaREST;

    }
    console.log(restarREST(100, 10));
    console.log(restarREST(100, 10,9));
    console.log(restarREST(100, 10,9,8));
    console.log(restarREST(100, 10,9,8,7));
    console.log(restarREST(100, 10,9,8,7,6));
    console.log(restarREST(100, 10,9,8,7,6,5));
    console.log(restarREST(100, 10,9,8,7,6,5,4));
    console.log(restarREST(100, 10,9,8,7,6,5,4,3));
    console.log(restarREST(100, 10,9,8,7,6,5,4,3,2));
    console.log(restarREST(100, 10,9,8,7,6,5,4,3,2,1));