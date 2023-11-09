console.log("//////////Objetos literales////")

nombre ="Kenay";
edad ="30";

const humano = {
    nombre:nombre,
    edad:edad,
    SaludarHumano: function () {

        console.log("Hola Soy un Humano")
        
    }
}

console.log(humano)
// hacer uso del metodo humano

humano.SaludarHumano();

// #2 segundo ejemplo 

 nombreLiteral = "Zeus",
 edadLiteral=2;

 const PerroLiteral={

    nombrePerroLiteral:nombreLiteral,
    edadPerroLiteral:edadLiteral,

    LadrarLit:function (){
        console.log("Guau Guaau") 
    }

    }

console.log(PerroLiteral)

PerroLiteral.LadrarLit();