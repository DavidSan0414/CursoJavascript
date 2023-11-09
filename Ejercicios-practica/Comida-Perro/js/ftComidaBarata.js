

export const CalcPrecioComidaMasBarataxBulto =(marca,peso,precio,tienda) =>{

    //como sabemos cual es la comida mas barata?

    let Total = precio/peso

    console.log("La comida de marca:"+marca+" con un kilaje de: "+peso+ "kg y con un precio de:$"+precio)
    console.log("Tiene un valor del kilogramo de "+Total+" en la tienda:"+tienda)

}



export const CalcPrecioComidaporKg =(marca,precio) =>{

    //como sabemos cual es la comida mas barata?

    const peso = 25
    let Total = precio*peso

    console.log("La comida de marca:"+marca+" y con un precio de:"+precio)
    console.log("El bulto de "+peso+ " Tiene un valor "+Total)

}


export const RecomendacionMejorComidaxBulto()=>{

    /*tenemos que ir almacenando los valores en arreglos e ir comparando los elementos de precio*/


    //debemos tener: lista de arreglos,nuevo elemento ,mejor elemento



}