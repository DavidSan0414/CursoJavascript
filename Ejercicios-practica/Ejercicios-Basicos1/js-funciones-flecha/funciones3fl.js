//una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
//pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

export const stringDado=(texto,separador)=> console.log(texto.split(separador))


export const stringDado1 =(texto)=>{
console.log(texto.split(" ",3))
}

export const stringdado2 =()=>{
    let texto="Hola que tal "
    return texto.split(" ",3)
}