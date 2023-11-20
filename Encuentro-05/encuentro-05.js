/*
Tema 9: Loops and Interations
------------------------------------ */
// - For Statement

      for (let i = 0; i < 5; i++) {
        console.log(i);
      }

//   bucle inversor:
      for (let i = 5; i > 0; i--) {
        console.log(i);
      }

//   Iteracion sobre un array
      const array = [1, 2, 3, 4, 5];

      for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
      }

// - for...in Statement (para objetos)
      const person = {
        name: 'John',
        age: 30,
        city: 'New York'
      };

      for (const key in person) {
        console.log(`${key}: ${person[key]}`);
      }

// - for..of Statement
      const array1 = [1, 2, 3, 4, 5];
      for (const element of array1) {
        console.log(element);
      }

// - For infinito
      let i = 0;
      for (;;) {
        console.log(i);
        if (i === 5) {
          break; // Sale del bucle cuando i es igual a 5
        }
        i++;
      }

/* - Diferencias 
    for...in:
      Uso: Itera sobre las propiedades enumerables de un objeto.
      Consideraciones: Puede iterar sobre todas las propiedades del objeto, no solo las numéricas.  No garantiza el orden de iteración.
      Rendimiento: Por lo general, es menos eficiente para iterar sobre arrays debido a las consideraciones mencionadas.

    forEach:
      Uso: Proporciona una forma más declarativa de iterar sobre un array.
      Consideraciones:  No se puede detener mediante break o return, lo que podría ser una limitación en algunos casos.
      Rendimiento: Puede ser ligeramente menos eficiente en algunas situaciones en comparación con for cuando se busca la máxima eficiencia.

    map:
      Uso: Crea un nuevo array transformado a partir de otro array.
      Consideraciones: Devuelve un nuevo array, lo que puede ser beneficioso si necesitas crear una nueva colección basada en la transformación de los elementos originales.
      Rendimiento: Similar a forEach en términos de rendimiento, pero se utiliza cuando necesitas crear un nuevo array basado en la transformación de los elementos originales.

    for clásico:
      Uso: La forma tradicional de iterar sobre arrays.
      Consideraciones: Puede ser más explícito y controlable, especialmente si necesitas interrumpir la iteración con break.
      Rendimiento: Por lo general, se considera una de las opciones más eficientes.
*/

// - do.. while Statement
//    es una estructura de bucle en JavaScript que se utiliza para ejecutar un bloque de código al menos una vez y luego repetir la ejecución mientras se cumple una condición

      do {
        // Código a ejecutar
      } while (condición);
      
      /*
        El bloque de código se ejecutará al menos una vez antes de verificar la condición.
        Si la condición es verdadera, el bloque de código se ejecutará nuevamente.
        Si la condición es falsa, el bucle se detendrá y la ejecución continuará con el código siguiente después del bucle.
        Aquí tienes un ejemplo simple de un bucle do...while:
      */
      
        let contador1 = 0;

      do {
        console.log(contador1);
        contador1++;
      } while (contador1 < 5);

// - while Statement

      do {
        // Código a ejecutar
      } while (condición);

      /*
      El bloque de código se ejecutará al menos una vez antes de verificar la condición.
      Si la condición es verdadera, el bloque de código se ejecutará nuevamente.
      Si la condición es falsa, el bucle se detendrá y la ejecución continuará con el código siguiente después del bucle.
      Aquí tienes un ejemplo simple de un bucle do...while:
      */
    
      let contador = 0;

      do {
        console.log(contador);
        contador++;
      } while (contador < 5);


/*
Tema 10: Functios
------------------------------------ */
//  En JavaScript, las funciones son bloques de código reutilizables que realizan una tarea específica cuando son invocadas o llamadas. 
//  Estas funciones pueden aceptar parámetros como entrada, realizar operaciones en función de esos parámetros y devolver un resultado.

    function name() {
        
    }

    function saludar() {
      return "Hola"   
    }

    function getName(name) {
      return `Hola ${name}`   
    }

// - parameteros por default
  
      function saludar1(nombre = 'invitado') {
        console.log(`¡Hola, ${nombre}!`);
      }

      saludar1('Juan'); // Muestra por consola: ¡Hola, Juan!
      saludar1(); // Muestra por consola: ¡Hola, invitado!

// - rest parameter
    function sumar(...numeros) {
      let resultado = 0;
      for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
      }
      return resultado;
    }

    console.log(sumar(1, 2, 3)); // Muestra por consola: 6
    console.log(sumar(5, 10, 15, 20));

// - funcion flecha
    let func1 = () => {};
    let func2 = (arg1) => {};
    let func3 = arg1 => {};
    let func4 = (arg1, arg2, ...argN) => {};

//  es lo mismo que :

    let func = function(arg1, arg2, ... argN) {
      return expression;
    };

    let sum = (a, b) => {  // la llave abre una función multilínea
      let result = a + b;
      return result; // si usamos llaves, entonces necesitamos un "return" explícito
    };

// - Diferencias entre funciones regulares y funciones flechas:

      const names = 'Pedro'

      const myPerfil = {
          names: 'Martin',
          age: '45',
          street: 'lugones 25',
          saludarme: () => {
            console.log(`hola ${names}`)
          },
          saludo: function () {
            console.log(`hola ${this.names}`)
          }
      }

      myPerfil.saludarme()
      myPerfil.saludo()



