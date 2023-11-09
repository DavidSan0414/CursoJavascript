//una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
//pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


export function textoaDividir(texto, separador) {
    var arrayDeCadenas = texto.split(separador)
    console.log(arrayDeCadenas)

}

export function textoaDividir1(){
    const texto1= "Hola que tal"
    const separador1= " ";

    var arrayDeCadenas1 = texto1.split(separador1,3)
    console.log(arrayDeCadenas1)
}

export function textoaDividir2(texto){
    return texto.split(" ",3)

}