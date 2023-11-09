
/* **********     Curso JavaScript: 62. DOM: Nodos, Elementos y Selectores      ********** */
//https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
console.log(document.getElementsByTagName("li"));// muestra todos los li que tiene el documento
console.log(document.getElementsByClassName("card"));//muestra todos los card que tiene el documento
console.log(document.getElementsByName("nombre"));//muestra todos los elementos que tengan el nombre que tiene el documento
console.log(document.getElementById("menu"));// busca un elemento por id y lo mapea

// los atributos anteriores fueron reemplazodos por QUERYSELECTOR; sin embargo en el caso de getelementbyid es mas eficaz que queryselector
console.log(document.querySelector("#menu"));//busca los id del documento
console.log(document.querySelector("a"));// busca el primer selector del tipo link
console.log(document.querySelectorAll("a"));// con queryselectorall trae todos los tipos de elementos de link
console.log(document.querySelectorAll("a").length);//cuenta todos los enlaces del documento
document.querySelectorAll("a").forEach((el) => console.log(el));//por cada elemento imprime el codigo html en la consola
console.log(document.querySelector(".card"));//solo trae la primer tarjeta que encuentra
console.log(document.querySelectorAll(".card"));//trae un note list con todas las tarjetas
console.log(document.querySelectorAll(".card")[2]);// busca el objeto seleccionado en una posicion especifica
console.log(document.querySelector("#menu li"));//solamente muestra los elementos que este con el id menu
console.log(document.querySelectorAll("#menu li")); 





