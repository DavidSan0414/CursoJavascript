        let texto = "Hola mi nombre es david sanchez " 
        const hablar =(texto)=>speechSynthesis. // arrow function
        speak(new SpeechSynthesisUtterance(texto));
        hablar(texto)



        // segunda clase

        console.log("**********Elementos del documento html************") 
        console.log(window) // toda la informacion del documento
        console.log(window.document)// busca en el documento la seccion document y muestra su info
        console.log(document.head)//muestra la informacion del encabezado
        console.log(document.header)//muestra la informacion del header del documento
        console.log(document.body)//muestra la informacion del cuerpo del documento
        console.log(document.html)//no se encuentra defininido en la consola, muestra mensaje por consolo de undefined
        console.log(document.documentElement)//simula como si fuera la informacion del html
        console.log(document.doctype)//muestra el tipo del documento
        console.log(document.characterSet)//juego de caracteres
        console.log(document.title)//muestra el titulo del documento
        console.log(document.links)//muestra los links-enlaces que esten relacionados en la pagina
        console.log(document.images)//muestra las imagenes del documento
        console.log(document.forms)//muestra los formularios del documento
        console.log(document.styleSheets)//muestra las hojas de estilo
        console.log(document.scripts)//muestra los scripts que tenga el documento
        console.log(document.getSelection(toString))// muestra los elementos que se esten seleccionando cuando se este ejecuntando el codigo
        // para verlo funcionar se debe hacer mediante una funcion que retrase la ejecucion del codigo
        setTimeout(()=>{
                console.log(document.getSelection(toString))  
        },4000);

        document.write("<h2>Hola mundo desde el DOM </h2>");// permite insertar codigo mediante el script al documento html, lo inserta al final y antes de cerrar la etiqueta body 


        



        
