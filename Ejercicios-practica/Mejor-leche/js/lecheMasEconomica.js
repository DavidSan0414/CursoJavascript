// funcion para calcular cual es la leche que debo comprar


export const calcularPrecioLitro = (marca,cantidad,precio)=>{

    //calcular el precio del ml y luego el del litro



    let precioML = precio / cantidad
    let precioLt = precioML *1000

    precio = new Intl.NumberFormat('es-CO').format(precio) 
    precioML = new Intl.NumberFormat('es-CO').format(precioML)
    precioLt = new Intl.NumberFormat('es-CO').format(precioLt)

    return console.warn(("En la leche de marca: "+marca+ " con precio " + precio + " el precio del militro de leche es de: "+precioML+" y el precio del litro es de: "+precioLt))
}


