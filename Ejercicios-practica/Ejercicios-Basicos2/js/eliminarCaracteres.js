//Programa una función que elimine cierto patrón de caracteres de un texto dado,
// pe. miFuncion(xyz1, xyz2, xyz3, xyz4 y xyz5, xyz) devolverá  1, 2, 3, 4 y 5.

export const eliminarCaracteres=(cadena,patron)=>{

    let newCadena = cadena.replaceAll(patron,"")
    return console.log(newCadena)

}

export const eliminarCaracteres1 = (cadena,patron)=>{
    let newCadena = cadena.split(patron).join("")
    return console.log(newCadena)
}

export const eliminarCaracteres2 = (cadena,patron)=>{
   
   return console.log(cadena.replace(new RegExp(patron,"ig"), ""))
}

