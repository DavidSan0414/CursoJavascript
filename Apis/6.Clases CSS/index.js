/* **********     Curso JavaScript: 65. DOM: Clases CSS    ********** */
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);// sirve para mirar la cadena de texto que tiene la etiqueta card
console.log($card.classList);// sirve para mirar el dom token list y lo muestra como se fuera un arreglo
console.log($card.classList.contains("rotate-45"));// verifica con el contains si tiene el elemneto que estamos preguntando
$card.classList.add("rotate-45");// aca se esta agregando el atributo a la clase
console.log($card.classList.contains("rotate-45"));// verifica si tiene el atributo que estamos prewguntando en este caso es true por que en el paso anterior le agregamos el atributo
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");/// toggle en ingles es palanca // sirve para eliminar o agregar un atributo, es decir si la clase nbo tiene el elemento se la agrega y si la tiene se la quita
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45"); // usualmente toggle se usa como por ejemplo asignar el modo oscuro en una pagina
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");// replace se utiliza para reemplazar un atributo en un elemento
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia"); 
