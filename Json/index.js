 /* **********     Curso JavaScript: 59. JSON - #jonmircha     ********** */
    /* https://www.json.org/json-es.html */
    /* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */

    // todas las propiedades de los json deben ir entre comillas. ver anexo data.json
    const json = {
        cadena: "David",
        numero: 31,
        booleano: true,
        arreglo: ["Montar bici", "programar", "Reparar Cosas"],
        objeto: {
          twitter: "@david.san414",
          email: "david.san0414@gmail.com"
        },
        nulo: null
      }
  
      console.log(json);
  
      console.log(JSON);
  
      // este metodo convierte un atributo en un dato valido para js
      console.log("*** JSON.parse ***");
      console.log(JSON.parse("{}"));
      console.log(JSON.parse("[1,2,3]"));
      console.log(JSON.parse("true"));
      console.log(JSON.parse("false"));
      console.log(JSON.parse("19"));
      console.log(JSON.parse('"Hola Mundo"'));
      console.log(JSON.parse("null"));
      //console.log(JSON.parse("undefined"));
      console.log(JSON.parse('{ "x": 2, "y": 3 }'));

      // este metodo hace lo contrario de .parse es decir convierte un objeto o valor valido para js en una cadena de texto json.
  
      console.log("*** JSON.stringify ***");
      console.log(JSON.stringify({}));
      console.log(JSON.stringify([1, 2, 3]));
      console.log(JSON.stringify(true));
      console.log(JSON.stringify(false));
      console.log(JSON.stringify(19));
      console.log(JSON.stringify("Hola Mundo"));
      console.log(JSON.stringify(null));
      console.log(JSON.stringify(undefined));
      console.log(JSON.stringify({ x: 2, y: 3 }));
  
      console.log("*** Ejemplo JSON ***");
      console.log(JSON.stringify(json));
      console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));