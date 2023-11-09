//función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
//devolverá Hola Mundo Hola Mundo Hola Mundo.

export function repetirTexto(){

    const fraseArepetir="Hola mundo" 
    const NumerodeVeces = 3;
    let fraseArreglo=[];

    for (var i=0; i<NumerodeVeces; i++){

        fraseArreglo[i]=fraseArepetir

    }

    console.log(fraseArreglo)

}


export function repetirTexto1(textoaRepet,cantidadRepet){

    var fraseArreglo1=[]
    for (var i=0; i<cantidadRepet; i++){
        fraseArreglo1[i]=textoaRepet
    }

    console.log(fraseArreglo1)
}

export function repetirTexto2(textoaRepet2,cantidadRepet2){

    const frase = textoaRepet2.repeat(cantidadRepet2) 
    console.log(frase)

}

