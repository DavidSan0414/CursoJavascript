/* **********     Curso JavaScript: 70. DOM: Modificando Elementos (Old Style)      ********** */
const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true); // este metodo sirve para importar un template 

$newCard.innerHTML = `
  <img src="https://placekitten.com/640/360" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard, $cards.children[2]); // sirve para reemplazar la trjeta en la posicion 2 por el nuevo atributo $newcard.
//$cards.removeChild($cards.lastElementChild); // sirve para eleminar un nodo en este caso es una tarjeta/imagen
$cards.insertBefore($newCard, $cards.firstElementChild);
document.body.appendChild($cloneCards); 
