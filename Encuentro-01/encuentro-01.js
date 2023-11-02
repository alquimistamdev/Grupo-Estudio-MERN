/*
Tema 0: Requerimientos:
-----------------------
    - Visual Studio Code:
       Plugins:
        * Dotenv Official +Vault (dotenv)
        * Error Lens (Alexander)
        * ES7+ React/Redux/React-Native snippets (dsznajder)
        * ESLint (microsoft)
        * Import Cost (Wix)
        * IntelliCode (microsoft)
        * IntelliCode API Usage Examples (microsoft)
        * IntelliSense for CSS class names in HTML (Zignd)
        * JSON Crack (Aykut Sarac)
        * LineCount (yycalm)
        * Live Preview (microsoft)
        * Material Icon Theme (Philipp Kief)
        * MongoDB for VS Code (mongoDB)
        * Path Intellisense (Chirstian Kohler)
        * Prettier - Code formatter (Prettier)
        * StandardJS - JavaScript Standard Style (Standar)
        * Thunder Client (Thunder Client)
        * TODO Highlight (Wayou liu)
        * Todo Tree (Gruntfuggly)
        * Version Lens (pflannery)

    - NodeJS:
        * versiones y release: https://nodejs.org/en/about/previous-releases

    - NVM (Node Version Manager): Es una herramienta que permite gestionar fácilmente múltiples versiones de Node.js en nuestro sistema.
      Esto es útil cuando se necesita cambiar entre diferentes versiones de Node.js para trabajar en proyectos que requieren versiones específicas de Node.js
       o para probar código en diferentes entornos.

       Instalacion: https://tecadmin.net/install-nvm-macos-with-homebrew/


Tema 1: Introducción a JavaScript
---------------------------------
  JavaScript es un lenguaje scripting de programación interpretado de propósito general no tipado, ampliamente utilizado en el desarrollo web.
  Fue creado por Brendan Eich en 1995 y se ha convertido en un componente fundamental para la interactividad en los navegadores.

  Para el desarrollo web hay tres lenguajes fundamentales que lideran el desarrollo web:
    * HTML para el maquetado de las paginas
    * CSS para lo visual
    * JavaScript para la parte de interaccion

  - Versiones: https://www.w3schools.com/js/js_versions.asp,

    ECMAScript es un estándar para lenguajes de scripting.
    JavaScript es la implementación más popular del estándar ECMAScript.

   - Motor de Ejecucion de javascript:
     Chrome V8 es un motor de JavaScript, lo que significa que ejecuta código JavaScript. Originalmente, se escribió JavaScript para ser ejecutado por los
     navegadores web. Esta hecho en C++. Chrome V8 lleva a cabo lo que se denomina compilación justo a tiempo (JIT). En lugar de compilar JavaScript por adelantado,
     compila el código en el mismo momento en el que se ejecuta.

     V8 hace:
          Compila y ejecuta código JS
          Manejo de la pila de llamadas: ejecutar sus funciones JS en algún orden
          Administrar la asignación de memoria para objetos: el montón de memoria
          Recolección de basura — de objetos que ya no están en uso
          Proporcione todos los tipos de datos, operadores, objetos y funciones.
     V8 puede:
          Proporcione el bucle de eventos, pero esto a veces también lo implementa el navegador


Tema 2: Declaracion de Variables
--------------------------------
Los nombres de variables son case-sensitive, los nombres de las constantes se nombran como SNAKE_UPPER_CASE, vay y let como camelCase.

* Tipo de declaraciones (var, let, const)
   - var: tiene un ambito global, pero ya no es recomendable utilizarlo

   Problemas con var:
   1) no tira error las declaraciones duplicadas */
     var saludar = "hey, hola";
     var saludar = "dice Hola tambien";

//   2) no tira error si usamos una variable var previa a su declaracion, queda como undefined
     console.log (saludar);
     var saludar = "dice hola"
      
// - let: let tiene un ámbito de bloque, puede modificarse pero no puede ser declarada de nuevo en el mismo ambito
     if (tiempos > 3) {
        let hola = "dice Hola tambien";
        console.log(hola);
     }
     console.log(hola) // hola is not defined

// - const: son iguales a let pero no se puede modificar. Este comportamiento es algo diferente cuando se trata de objetos declarados con const. 
//          Mientras que un objeto const no se puede actualizar, las propiedades de este objeto sí se pueden actualizar.
  
//   Declarion de una constante
     const PI_NUMBER = 3.1416

//  Podemos declarar un objeto const como este:
    const MESSAGE = {
      mensaje: "dice Hola",
      tiempos: 4
    }
          
//  Pero no podemos asinarle un nuevo valoar a la constante
    MESSAGE = {
      palabras: "Hola",
      numero: "cinco"
    } // error:  Assignment to constant variable.
          
    // Pero si se pueden modificar sus propiedades
    saludar.mensaje = "dice Hola tambien";


// - Hoisting: Hoisting es un mecanismo de JavaScript en el que las variables y declaraciones de funciones se mueven a la parte superior de su ámbito
//             antes de la ejecución del código. 
//             Las declaraciones let se elevan a la parte superior. A diferencia de var que se inicializa como undefined, la palabra clave let no se inicializa. 
//             Sí se intenta usar una variable let antes de declararla, se obtendrá un Reference Error.

//  No tira error si usamos una variable var previa a su declaracion, queda como undefined
    console.log (saludar);
    var saludar = "dice hola"

    // El codigo anterior se podria interpretar de esta forma:
    var saludar;
    console.log(saludar); // saludar is undefined
    saludar = "dice hola"

/*
Tema 3: Tipos de Variables
--------------------------
    Javascript es un lenguaje de tipado dinámico, es decir que no hace falta definir el tipo de una variable.
    Ya que la variable recibe el tipo en el momento que se le asigna un valor.

  * Tipos Primitivos
    - String
    - Number
    - Boolean
    - undefined
    - null
    - bigint
    - Symbol

  * No primitivos
    - Objects (date, arrays, object)
    - Function

para saber el tipo de variable usamos typeof que devuelve un string con el nombre:
*/
  const age = 45
  console.log(typeof age)

// para saber de que tipo es un objeto se utiliza instanceof:  
  const miArray = [1, 2, 3, 4]
  console.log(miArray instanceof Array)

/*
  Tema 4: Tipos de Casteos:
  --------------------------
    -Explictos (Type Conversion)
      parseInt()
      parseFloat()
      toString()
*/
      var num = 42;
      var strNumero = num.toString(); // Casting explícito a cadena de texto
      console.log(strNumero); // "42"

      var strNumero = "5.7";
      var numero = parseFloat(strNumero); // Casting explícito a número decimal
      console.log(numero); // 5.7

//  - Implicitos (Type Coercion)
      var numero = 42;
      var cadena = "El número es " + numero; // Aquí, JavaScript convierte automáticamente el número en una cadena de texto.
      console.log(cadena); // "El número es 42"


// Diferencias entre parseIn vs casteo implicto vs Number: Hay diferencias a nivel de funcionalidad y de performance. Por temas de performance
// es preferible Number y por ultimo parseInt()

//  - Diferencias entre parseIn y Number a nivel de funcionalidad
    // parsing:
      parseInt("20px");       // 20
      parseInt("10100", 2);   // 20
      parseInt("2e1");        // 2

    // type conversion
      Number("20px");       // NaN
      Number("2e1");        // 20, exponential notation

      typeof parseInt("123") // number
      typeof Number("123") // number
      typeof new Number("123") // object (Number primitive wrapper object) Esto no se deberia usar nunca

//      Number() Or Number(null) Or Number('') // returns 0
//      parseInt() Or parseInt(null)          // returns NaN

//  - Diferencias entre parseIn y Number a nivel de Performance:
      function benchmark(name, cb) {
        const t0 = performance.now()
        for (let i = 0; i < 15e7; i++) {
          cb()
        }
        const t1 = performance.now()
        console.log(`${name} took ${t1 - t0} ms`)
      }

      const process1 = () => Number('15')
      const process2 = () => parseInt('15', 10)
      const process3 = () => parseFloat('15')
      const process4 = () => +'15'

      benchmark('process1', process1) // 94.70 ms
      benchmark('process2', process2) // 651.5 ms
      benchmark('process3', process3) // 764.69 ms
      benchmark('process4', process4) // 668.79 ms
