/*
Tema 6: Structuras de Datos
------------------------------------ */

//* Datos Strucutrados
//  -JSON: JavaScript Object Notation

  const jsonString = '{"nombre": "Juan", "edad": 30}';
  const jsonObject = JSON.parse(jsonString);
  const jsonToString = JSON.stringify(objeto);


//* Indexed Colelctions
//  -Array: los array pueden tener cualquier tipo de datos

      const mezclado = [1, "dos", true, { nombre: "Ejemplo" }];

      // push(): Agrega elementos al final del array.
      const numeros = [1, 2, 3];
      numeros.push(4, 5);
      console.log(numeros) // El array numeros ahora es [1, 2, 3, 4, 5]
      
      // pop(): Elimina el último elemento del array.
      const frutas = ["manzana", "plátano", "uva"];
      const ultimaFruta = frutas.pop();
      console.log(frutas) // ultimaFruta es "uva"
      console.log(ultimaFruta) // frutas es ["manzana", "plátano"]  

      // unshift(): Agrega elementos al principio del array.
      const colores = ["rojo", "verde"];
      colores.unshift("azul");
      console.log(colores) // El array colores ahora es ["azul", "rojo", "verde"]

      // shift(): Elimina el primer elemento del array.
      const ciudades = ["Nueva York", "Los Ángeles", "Chicago"];
      const primeraCiudad = ciudades.shift();
      console.log(ciudades) // primeraCiudad es "Nueva York"
      console.log(primeraCiudad) // ciudades es ["Los Ángeles", "Chicago"]

      // concat(): Combina dos o más arrays en uno nuevo.
      const numeros1 = [1, 2];
      const numeros2 = [3, 4];
      const numerosCombinados = numeros1.concat(numeros2);
      console.log(numerosCombinados) // El array numerosCombinados es [1, 2, 3, 4]

      // join(): Convierte un array en una cadena de texto utilizando un separador.
      const frutasA = ["manzana", "plátano", "uva"];
      const cadena = frutasA.join(", ");
      console.log(cadena) // cadena es "manzana, plátano, uva"

      // slice(): Copia una porción del array en un nuevo array.
      const numerosA = [1, 2, 3, 4, 5];
      const subArray = numerosA.slice(1, 4); // 1 inclusivo hasta 4 exclusivo
      console.log(subArray)  // subArray es [2, 3, 4]

      // splice(): Modifica un array eliminando, reemplazando o agregando elementos en una posición específica.
      const coloresA = ["rojo", "verde", "azul", "amarillo"];              
      colores.splice(1, 1); // Eliminar elementos (elimina 1 elemento desde el índice 1)
      console.log(coloresA) // colores es ["rojo", "azul", "amarillo"]

      // Reemplazar elementos (reemplaza 2 elementos desde el índice 0)
      colores.splice(0, 2, "naranja", "violeta"); // colores es ["naranja", "violeta", "amarillo"]

      // Agregar elementos (agrega elementos desde el índice 1)
      colores.splice(1, 0, "verde claro", "azul claro"); // colores es ["naranja", "verde claro", "azul claro", "violeta", "amarillo"]

      // indexOf(): Devuelve el índice de la primera ocurrencia de un elemento en el array.
      const numerosB = [10, 20, 30, 40, 50];
      const indice = numerosB.indexOf(30);  // indice es 2

      // lastIndexOf(): Devuelve el índice de la última ocurrencia de un elemento en el array.
      const numerosC = [10, 20, 30, 20, 40];
      const ultimoIndice = numerosC.lastIndexOf(20);
      console.log(ultimoIndice); // ultimoIndice es 3

//* Keyed Collections 
//  - MAP: Un Map es una colección de pares clave-valor en la que cada clave está asociada con un valor. Se utiliza para almacenar y recuperar datos estructurados y relacionados.

      // Crear un nuevo Map vacío
      const miMap = new Map();

      // set(clave, valor): Agrega un par clave-valor al Map.
      miMap.set('nombre', 'Juan');
      miMap.set('edad', 30);

      // get(clave): Obtiene el valor asociado con una clave específica.
      const valor = miMap.get('nombre'); // valor es "Juan"

      // has(clave): Comprueba si una clave existe en el Map.
      const existe = miMap.has('nombre'); // existe es true

      // delete(clave): Elimina un par clave-valor del Map basado en la clave.
      miMap.delete('nombre'); // Elimina el par clave-valor con la clave "nombre" -> devuelve true/false

      // clear(): Elimina todos los pares clave-valor del Map, dejándolo vacío.
      miMap.clear(); // Elimina todos los pares clave-valor
      
      // size: Propiedad que devuelve el número de pares clave-valor en el Map.
      const tamañoMap = miMap.size; // tamaño es el número de pares clave-valor en el Map

      // keys(): Devuelve un iterable con todas las claves del Map.
      const claves = miMap.keys(); // Un iterable con las claves
      for (const clave of claves) {
        console.log(clave);
      }

      // values(): Devuelve un iterable con todos los valores del Map.
      const valores = miMap.values(); // Un iterable con los valores
      for (const valore of valores) {
        console.log(valore);
      }
      
      // entries(): Devuelve un iterable con todos los pares clave-valor del Map.
      const pares = miMap.entries(); // Un iterable con los pares clave-valor
      for (const valore of pares) {
        console.log(valore);
      }

      // forEach(callback): Itera sobre todos los pares clave-valor y aplica una función de devolución de llamada a cada par.
      miMap.forEach((valor, clave) => {
        console.log(`${clave}: ${valor}`);
      });


//  - SET: Un Set es una colección de valores únicos, lo que significa que no permite elementos duplicados. Se utiliza para almacenar una lista de valores únicos sin una relación clave-valor

      // add(valor): Agrega un elemento al Set.
      const miSet = new Set();
      miSet.add(10);
      miSet.add(20);
      miSet.add(30);

      // has(valor): Comprueba si un valor específico existe en el `Set.
      const existeA = miSet.has(10); // existe es true

      // delete(valor): Elimina un valor específico del `Set.
      miSet.delete(10); // Elimina el valor 10 del Set

      // clear(): Elimina todos los elementos del Set, dejándolo vacío.
      miSet.clear(); // Elimina todos los elementos del Set

      // size: Propiedad que devuelve el número de elementos en el Set.
      const tamaño = miSet.size; // tamaño es el número de elementos en el Set

      // values() o keys(): Estos métodos devuelven un iterable con todos los elementos del Set. Ambos métodos son equivalentes, ya que los elementos en un Set` son su propia clave y valor.
      const elementos = miSet.values(); // Un iterable con los elementos
      // O también:
      const elementosA = miSet.keys(); // Otro iterable con los elementos

      // forEach(callback): Itera sobre todos los elementos del `Set y aplica una función de devolución de llamada a cada elemento.
      miSet.forEach(elemento => {
        console.log(elemento);
      });




/*
Tema : Operadores
------------------------------------ */
// - Operadores Aritmeticos:
/*    + (Addition)
      - (Subtraction)
      * (Multiplication)
      ** (Exponentiation)
      / (Division)
      % (Modulus i.e. Remainder)
      ++ (Increment) (Prefijo y postfijo)
      -- (Decrement)
*/
    let x = 5
    let y = x++ // y obtiene el valor original de x (5), luego x se incrementa en 1
    console.log(x) // Muestra 6
    console.log(y) // Muestra 5

    let a = 5
    let b = ++a // a se incrementa en 1 y b obtiene el nuevo valor de a (6)
    console.log(a) // Muestra 6
    console.log(b) // Muestra 6

// - Operadores de Comparacion:
//    Los operadores de comparación en JavaScript se utilizan para comparar dos valores y determinar si una condición es verdadera o falsa
          
    // Igualdad (==): Compara si dos valores son iguales, pero no considera el tipo de dato. Si los valores son equivalentes, devuelve true; de lo contrario, devuelve false.
      5 == "5" // true

    // Igualdad estricta (===): Compara si dos valores son iguales y tienen el mismo tipo de dato. Si los valores son equivalentes y del mismo tipo, devuelve true; de lo contrario, devuelve false.
      5 === 5 // true
      5 === "5" // false

    // Desigualdad (!=): Compara si dos valores no son iguales, sin tener en cuenta el tipo de dato. Si los valores no son equivalentes, devuelve true; de lo contrario, devuelve false.
      5 != "3" // true

    // Desigualdad estricta (!==): Compara si dos valores no son iguales o no tienen el mismo tipo de dato. Si los valores no son equivalentes o no son del mismo tipo, devuelve true; de lo contrario, devuelve false.
      5 !== 5 // false
      5 !== "5" // true

    // Mayor que (>): Compara si el valor de la izquierda es mayor que el valor de la derecha. Si es cierto, devuelve true; de lo contrario, devuelve false.
      10 > 5 // true

    // Menor que (<): Compara si el valor de la izquierda es menor que el valor de la derecha. Si es cierto, devuelve true; de lo contrario, devuelve false.
      3 < 7 // true

    // Mayor o igual que (>=): Compara si el valor de la izquierda es mayor o igual que el valor de la derecha. Si es cierto, devuelve true; de lo contrario, devuelve false.
      10 >= 10 // true

    // Menor o igual que (<=): Compara si el valor de la izquierda es menor o igual que el valor de la derecha. Si es cierto, devuelve true; de lo contrario, devuelve false.
      3 <= 3 // true

      