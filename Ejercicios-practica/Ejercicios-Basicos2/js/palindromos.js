//Programa una función que valide si una palabra o frase dada, es un palíndromo 
//(que se lee igual en un sentido que en otro), pe. mifuncion(Salas) devolverá true.


export const palindromo=(str)=>{
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');// aca se pone en minuscula la cadena y elimina caracteres no deseados como el espacio en blaco
    // console.log(lowRegStr)
    var reverseStr = lowRegStr.split('').reverse().join(''); // aca crea la cadena colocando la frase al reves
    // console.log(reverseStr)

    // aca compara si el string es igual de adelante hacia atras
    return reverseStr === lowRegStr;
}
