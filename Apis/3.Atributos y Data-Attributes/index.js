/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes -     ********** */
console.log(document.documentElement.lang); // para acceder a la etiqueta del html
console.log(document.documentElement.getAttribute("lang")); // tambien sirve para acceder a las etiquetas del atributo lang en el codigo html
console.log(document.querySelector(".link-dom").href);// sirve para acceder a la etiqueta href del html pero en este caso trae toda la url del navegador
console.log(document.querySelector(".link-dom").getAttribute("href"));// en este caso solamente trae el valor que esta escrito en el atributo del enlace

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom"); // se le coloca el simbolo del dolar por que se trata de una variable del DOM

$linkDOM.setAttribute("target", "_blank");// abre en una nueva ventana 
$linkDOM.setAttribute("rel", "noopener");// se aconseja como buena practica para controlar un poco el hackeo es decir que no hay una dependencia entre la ventana origen y la que se esta abriendo
$linkDOM.setAttribute("href", "https://youtube.com/");// le asigna la url que queramos
console.log($linkDOM.hasAttribute("rel")); // valida si se tiene un atributo
$linkDOM.removeAttribute("rel");// elimina el atributo que queramos
console.log($linkDOM.hasAttribute("rel"));// valida si se tiene un atributo

//Data-Attributes - Se requiere que deben llevar la palabra data y guion medio (-)
console.log($linkDOM.getAttribute("data-description"));// captura el atributo de la etiqueta link dom en especifico el atributo data description
console.log($linkDOM.dataset);//muestra el atributo como un map
console.log($linkDOM.dataset.description);// captura el atributo de la etiqueta link dom en especifico el atributo data description
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");// le asigna a la etiqueta el atributo que queramos
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscríbete a mi canal y comparte";
console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); 