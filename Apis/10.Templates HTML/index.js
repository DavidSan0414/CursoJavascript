/* **********     Curso JavaScript: 69. DOM: Templates HTML      ********** */
 const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardsContent = [
    {
      title: "Tecnología",
      img: "https://placekitten.com/640/360",
    },
    {
      title: "Animales",
      img: "https://placekitten.com/640/360",
    },
    {
      title: "Arquitectura",
      img: "https://picsum.photos/640/360",
    },
    {
      title: "Gente",
      img: "https://placebeard.it/640x360",
    },
    {
      title: "Naturaleza",
      img: "https://baconmockup.com/640/360",
    },
  ];

cardsContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); 

