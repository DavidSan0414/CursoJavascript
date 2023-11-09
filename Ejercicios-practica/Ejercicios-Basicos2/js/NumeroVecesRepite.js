//función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion(    , mundo) devolverá 2.


export const VecesRepite = (texto,palabra)=>{

    let  i = 0,
    contador=0;

    while(i!==-1){

        i=texto.indexOf(palabra,i);
        if (i!==-1){
            i++;
            contador++;  
        }
    }
    return console.log(contador)
}