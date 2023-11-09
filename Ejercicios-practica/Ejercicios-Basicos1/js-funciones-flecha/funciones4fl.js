//función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) }
//devolverá Hola Mundo Hola Mundo Hola Mundo.

export const repitaTexto =(texto,veces)=>console.log(texto.repeat(veces))


export const repitaTexto1 = (texto,veces)=>{

    let textoarreglado =[]
    for(let i= 0; i<veces; i++){
        textoarreglado[i] = texto + " "
    }

    console.log(textoarreglado.toString()
    )
}