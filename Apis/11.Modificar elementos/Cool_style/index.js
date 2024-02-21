/* **********     Curso JavaScript: 71. DOM: Modificando Elementos (Cool Style) -     ********** */
/*    **********Referencias de javascrip mozilla developer network - documentacion oficial de js
.insertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones:
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
  */

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");


/* ******** esta es la forma menos eficiente de insertar nodos en html sin embargo funciona

$newCard.innerHTML =  `
    <img src="https://img.freepik.com/vector-gratis/etiqueta-engomada-linda-perno-relampago-vector-imagenes-predisenadas-tiempo-imprimible_53876-136807.jpg?w=740&t=st=1708533205~exp=1708533805~hmac=5895a84ca09387713a8688452393985ffa8bb180133f135e74442ccbe331ab6c" alt="Any">
    <figcaption>Any</figcaption>
`;
$newCard.classList.add("card")
$cards.insertAdjacentElement("beforebegin",$newCard)


$newCard.classList.add("card");*/ 
/* **** esta es una forma mas eficiente de insertar nodos en html

*/

let $contenCard = `
  <img src="https://i.pinimg.com/564x/1a/d3/44/1ad344dfa9149e3e640e5afd02ea512e.jpg" alt="Any">
  <figcaption></figcaption>
`;

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("beforeend", "Any"); 
$cards.insertAdjacentElement("afterbegin", $newCard);
//
//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);
//$cards.after($newCard);

