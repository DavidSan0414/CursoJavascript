import { VecesRepite } from "./js/NumeroVecesRepite.js";
import { invertirTexto } from "./js/InvertirTextoft.js";
import { palindromo } from "./js/palindromos.js";
import { eliminarCaracteres,eliminarCaracteres1,eliminarCaracteres2 } from "./js/eliminarCaracteres.js";

console.log(invertirTexto("Hola Mundo"))
console.log(invertirTexto("David"))

VecesRepite("hola mundo adios mundo","mundo")

console.log(palindromo("A man, a plan, a canal. Panama"))

eliminarCaracteres("xyz1 xyz2 xyz3 xyz4 y xyz5", "xyz")
eliminarCaracteres1("xyz1 xyz2 xyz3 xyz4 yy xyz5", "x")
eliminarCaracteres2("xyz1 xyz2 xyz3 xyz4 yy xyz5", "")