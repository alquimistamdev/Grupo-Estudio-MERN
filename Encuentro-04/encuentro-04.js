/*
Tema 7: Operadores
------------------------------------ */
// - Operadores Logicos:
//    Los operadores lógicos, como && (y), || (o) y ! (no), se utilizan para combinar o negar condiciones.
//    Operador a nivel de Bits (& y | )

      const esJoven = edad >= 13 && edad <= 19; // Es verdadero si la edad está entre 13 y 19

      const condicion1 = false;
      const condicion2 = false;
      const resultado = condicion1 && hola(); // Devuelve false
      console.log(resultado)

      function hola() {
        console.log('hola que tal')
        return true
      }

// - "operador de fusión nula" o "nullish coalescing operator ?? y || 
//    Operador ?? (fusión nula): Devuelve el valor de la izquierda (valor1) si es null o undefined. Solo devuelve el valor de la derecha (valor2) si el valor de la izquierda es estrictamente igual a null o undefined.
      const nombre = null;
      const nombrePredeterminado = nombre ?? "Invitado";
      console.log(nombrePredeterminado); // Muestra "Invitado" porque nombre es null.

//    Operador || (OR lógico): Devuelve el valor de la izquierda (valor1) si es falsy (null y undefined, false, 0, "", NaN). Devuelve el valor de la derecha (valor2) si el valor de la izquierda es falsy.
      const nombre2 = '';
      const nombrePredeterminado2 = nombre2 || "Invitado";
      console.log(nombrePredeterminado); // Muestra "Invitado" porque nombre es falsy.

// - Operador condicional
      condition ? val_for_true : val_for_false

// - Operadore Spread
// Array: 
//    * Copiar un Array:
        const originalArray = [1, 2, 3];
        const copiedArray = [...originalArray];
        console.log(copiedArray); // [1, 2, 3]

//    * Combinar Array:
        const array1 = [1, 2];
        const array2 = [3, 4];
        const combinedArray = [...array1, ...array2];
        console.log(combinedArray); // [1, 2, 3, 4]  

// Object:
//    * Copiar un objeto:
        const originalObject = { name: 'John', age: 30 };
        const copiedObject = { ...originalObject };
        console.log(copiedObject); // { name: 'John', age: 30 }

//    * Combinar objetos:
        const object1 = { a: 1, b: 2 };
        const object2 = { b: 3, c: 4 };
        const combinedObject = { ...object1, ...object2 };
        console.log(combinedObject); // { a: 1, b: 3, c: 4 }


 /*
Tema 8: Control de Flujo
------------------------------------ */
// - Condicionales
//    * If: La declaración if es una estructura de control de flujo que permite ejecutar un bloque de código si se cumple una condición:

  if (condición) {
    // Código a ejecutar si la condición es verdadera
  } else {
    // Código a ejecutar si la condición es falsa (opcional)
  }

  if (condición) {
    // Código a ejecutar si la condición es verdadera
  } else if (condicion) {
    // Código a ejecutar si la condición es verdadera
  } else {
    // Código a ejecutar si la condición es falsa (opcional)
  }


// * Switch
  switch (expresion) {
    case valor1:
      // Código a ejecutar si la expresión coincide con valor1
      break;
    case valor2:
      // Código a ejecutar si la expresión coincide con valor2
      break;
    // Más casos...
    default:
      // Código a ejecutar si la expresión no coincide con ningún caso
  }

  let diaDeLaSemana = 3;
  let nombreDelDia;

  switch (diaDeLaSemana) {
    case 1:
      nombreDelDia = "Lunes";
      break;
    case 2:
      nombreDelDia = "Martes";
      break;
    case 3:
      nombreDelDia = "Miércoles";
      break;
    case 4:
      nombreDelDia = "Jueves";
      break;
    case 5:
      nombreDelDia = "Viernes";
      break;
    case 6:
      nombreDelDia = "Sábado";
      break;
    case 7:
      nombreDelDia = "Domingo";
      break;
    default:
      nombreDelDia = "Día no válido";
  }

  console.log(nombreDelDia); // Output: Miércoles
