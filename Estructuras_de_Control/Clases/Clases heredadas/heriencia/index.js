/////ejercicio solo



class Mamifero{

    constructor (generoMamifero,pelaje){
        this.generoMamifero=generoMamifero
        this.pelaje=pelaje
    }

    //metodos
    sonido(){
        console.log("hago sonidos por que estoy vivo")
    }


}

class canino extends Mamifero{

    constructor(nombrePerro,generoMamifero,razaPerro,pelaje){
        super(generoMamifero,pelaje)
        this.nombrePerro=nombrePerro
        this.razaPerro=razaPerro
    }

    ladrar(){
        console.log("Guauuu Guuuuaaaauuu ")
    }
    grunir(){
        console.log("grrrrrrr") 
    }
}

const Perro1 = new canino("Brisa","GoldenRetriever","placentario","corto");


Perro1.sonido()
Perro1.ladrar()


console.log(Perro1)


class golden extends canino {

    constructor(nombrePerro,pelaje){

        super(nombrePerro)
        this.pelaje=pelaje
        //this.nombrePerro=this.nombrePerro; 
    }

    ladrar(){

        console.log("Guuuaaauff Guuuaaauff")

    }

    aprendertruco(){
        console.log("estoy aprendiendo un truco")

    }

    pedircaricia(){
        console.log("consienteme por favor")
    }

}


const golden1 = new golden("Brissa","largo")
console.log(golden1)
golden1.ladrar();
golden1.pedircaricia();
golden1.aprendertruco();