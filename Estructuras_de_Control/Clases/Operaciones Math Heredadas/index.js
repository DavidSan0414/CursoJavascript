class operacionesMat {


    suma(a, b, ...c) {

        let resultadoSuma = a + b;

        c.forEach(function (n) {
            resultadoSuma += n
        });

        return resultadoSuma;
    }


    resta(a, b, ...c) {

        let resultadoREST = a - b;

        c.forEach(function (n) {
            resultadoREST -= n
        });

        return resultadoREST;
    }
    multiplicacion(a, b, ...c) {

        let resultadoMULT = a * b;

        c.forEach(function (n) {
            resultadoMULT *= n
        });

        return resultadoMULT;
    }
    division(a, b, ...c) {

        let resultadoDIV = a / b;

        c.forEach(function (n) {
            resultadoDIV /= n
        });

        return resultadoDIV;
    }

}

const operaciones = new operacionesMat()

let a =400000,
b = 226000,
AbonoComprasAmazon= 3200000
let prestamoDavid = operaciones.suma(a,b)



a= new Intl.NumberFormat('es-CO').format(a)
b= new Intl.NumberFormat('es-CO').format(b)

//b=new Intl.NumberFormat('es-CO').format(b)
// console.log(new Intl.NumberFormat('es-CO').format(b))

console.log("Santiago me presto :$"+ a +" + $"+b+" y el total es de: $"+prestamoDavid)

let comprasAmazonSantiago = operaciones.suma(492863,511038,1918769)

console.log(comprasAmazonSantiago)
let saldoAmazon = operaciones.resta(AbonoComprasAmazon,comprasAmazonSantiago) 

console.log(saldoAmazon)
let SaldoTotal = operaciones.suma(prestamoDavid,saldoAmazon)

console.log(SaldoTotal)
let mercado =250000
let resta = operaciones.resta(SaldoTotal,mercado)

console.log(resta)