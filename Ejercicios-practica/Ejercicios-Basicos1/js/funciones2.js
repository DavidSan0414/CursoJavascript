//funcion que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

export function textoAnalizado() {
    const texto = "Hola Mundo"

    console.log(texto.substring(0, 4))
    //return texto
}

//console.log(textoAnalizado())

// textoAnalizado()



export function textoAnalizado2 (texto){
    return texto.substring(0,4)
}

//console.log(textoAnalizado2("Hola Mundo"))


export function textoAnalizado3 (texto = "Hola Mundo AF"){
    console.log(texto.substring(0,4))
}

