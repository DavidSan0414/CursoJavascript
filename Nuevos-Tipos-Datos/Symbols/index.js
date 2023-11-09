/* **********  Symbols   ********** */

//Tipo de dato primitivo asi como string, boolean, number, undefined => es un tipo de dato el 
//cual mantiene su valor privado y mantiene su valor y crea identificadores de referencias unicos

console.log(Symbol)

let idNorm = ("Hola");
let id2Norm = ("Hola");

console.log(idNorm === id2Norm); // devuelve true ya que compara sin el identificador simbol


//creando las mismas variables pero de forma symbol

let idSymb = Symbol("id");
let id2Symb = Symbol("id2");

console.log(idSymb === id2Symb) // false por que el sistema lo toma como identificador unico distinto
console.log(idSymb, id2Symb);
console.log(typeof idSymb, typeof id2Symb);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "John",
    edad: 35
};
console.log(persona);

persona.NOMBRE = "Jonathan MirCha"
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
    console.log(`Hola`);
}
console.log(persona);
persona[SALUDAR]();

//aca se esta recorriendo las propiedaes del objeto persona
for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona)); // getOwnPropertySymbols sirve para listar los atributos privados del objeto(symbols)
