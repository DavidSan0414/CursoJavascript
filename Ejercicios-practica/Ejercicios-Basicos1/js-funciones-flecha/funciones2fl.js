//funcion que te devuelva el texto recortado según el número de caracteres indicados, 
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

export const caracteresIndicados =()=>{
     let texto="Hola Mundo AF" 
    console.log(texto.substring(0,4))
}


export const caracteresIndicados1 =(texto)=>console.log(texto.substring(0,4))

let textoAsignadoAF = "Hola Mundo"
export const caracteresIndicados2 = () => console.log(textoAsignadoAF.substring(0,4))


//otra forma

export const caracteresIndicados3 = () => textoAsignadoAF.substring(0,4)

export const caracteresIndicados4 = (texto,CanCaracteres) =>texto.substring(0,CanCaracteres)

export const recorTextoAf = (texto="", longitud=undefined)=>(!texto)?console.warn("No ingresaste un texto"):console.info(texto.slice(0,longitud))
