/* **********     Curso JavaScript: 50. Sets    ********** */

//Los set es una estructura de datos y parecen un arreglo pero finalmente no lo son ya que no permiten objetos
// duplicados es decir solo permiten datos unicos y no son iterables es decir no funcionan como un arreglo
    const set = new Set([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"]);
    console.log(set);
    console.log(set.size);

    const set2 = new Set();
    set2.add(1);
    set2.add(2);
    set2.add(2);
    set2.add(3);
    set2.add(true);
    set2.add(false);
    set2.add(true);
    set2.add({});

    console.log(set2);
    console.log(set2.size);

    console.log("Recorriendo set");
    for (item of set) {
      console.log(item);
    }
    console.log("Recorriendo set2");
    set2.forEach(item => console.log((item)));

    let arr = Array.from(set); //aca se convierte a arreglo para poder conecer el valor en la posicion n
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[9]);

    set.delete("HOla");
    console.log(set);

    console.log(set.has("hola"));
    console.log(set.has(19));

    set2.clear();
    console.log(set2); 
