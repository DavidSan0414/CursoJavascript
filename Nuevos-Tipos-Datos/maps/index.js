/* **********     Curso JavaScript: 51. Maps      ********** */

// son objetos que nos sirven para almacenar conjunto de valores a manera de objeto
//parecido a un objeto primitivo

let mapa1 = new Map();

mapa1.set("nombre","david")
mapa1.set("apellido","Sanchez")
mapa1.set("edad",31)

console.log(mapa1)


    const mapa = new Map();
    mapa.set("nombre", "Jon");
    mapa.set("apellido", "MirCha");
    mapa.set("edad", 35);

    console.log(mapa);
    console.log(mapa.size);
    console.log(mapa.has("correo")); // has sirve para mirar si existe el dato o no 
    console.log(mapa.has("nombre"));
    console.log(mapa.get("nombre"));
    mapa.set("nombre", "Jonathan MirCha");
    console.log(mapa.get("nombre"));
    mapa.delete("apellido");//elimina el atributo 

    mapa.set(19, "diecinueve");
    mapa.set(false, "falso");
    mapa.set({}, {});
    console.log(mapa);

    for (let [key, value] of mapa) { // mostrar cada atributo del mapa 
      console.log(`Llave: ${key}, Valor:${value}`);
    }

    const mapa2 = new Map([
      ["nombre", "kEnAi"],
      ["edad", 7],
      ["animal", "perro"],
      [null, "nulo"]
    ]);

    console.log(mapa2);

    const llavesMapa2 = [...mapa2.keys()];
    const valoresMapa2 = [...mapa2.values()];

    console.log(llavesMapa2);
    console.log(valoresMapa2); 
