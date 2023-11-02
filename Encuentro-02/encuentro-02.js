/*
Tema 5: Funciones de String y Number
------------------------------------ */
// Funciones de String

//  * Obtener la longitud de una cadena: 
      const texto = "Hola, mundo";
      console.log(texto.length); // longitud será 11

//  * Acceder a caracteres individuales:
      console.log(texto[0]); // primerCaracter será "H"

//  * Buscar y reemplazar:
      const frase = "La manzana es roja";
      const nuevaFrase = frase.replace("manzana", "pera"); // nuevaFrase será "La pera es roja"

//  * Dividir una cadena en partes:
      const lista = "manzana,pera,uva";
      const frutas = lista.split(","); // frutas será ["manzana", "pera", "uva"]  

//  * Convertir a mayúsculas y minúsculas: 
      const enMayusculas = texto.toUpperCase(); // enMayusculas será "HOLA, MUNDO"  

//  * Eliminar espacios en blanco:
      const texto1 = "   Hola, Mundo   ";
      const limpio = texto1.trim(); // limpio será "Hola, Mundo"

//  * Extraer subcadenas:
      const texto2 = "JavaScript";
      const subcadena = texto2.slice(0, 4); // subcadena será "Java"   
      const subcadena2 = texto2.substring(0, 4); // subcadena será "Java"
    
      // No hay diferencias de performance entre slice y substring. Si hay diferencias a nivel de funcionalidad:

      // Manejo de argumentos negativos:
      //  substring(): Si se le proporcionan argumentos negativos, substring() los considerará como si fueran 0. Por ejemplo, substring(-3, 2) se comportará como substring(0, 2).
      //  slice(): Puede manejar argumentos negativos y los interpreta como contando desde el final de la cadena. Por ejemplo, slice(-3, 2) extraerá los últimos 3 caracteres de la cadena.
      const texto3 = "JavaScript";
      console.log(texto3.substring(-3, 2))
      console.log(texto3.slice(-3))

// Funciones de Number
//  * toFixed(): Este método se usa para especificar la cantidad de decimales que deseas en un número de punto flotante.
      const numero = 3.14159;
      const numeroRedondeado = numero.toFixed(2); // numeroRedondeado será 3.14

//  * toPrecision(): Este método se utiliza para especificar la cantidad total de dígitos significativos en un número.
      const numero1 = 123.456789;
      const numeroPreciso = numero1.toPrecision(5); // numeroPreciso será 123.46
    
//  * toExponential(): Este método convierte un número en notación exponencial (notación científica).
      const numero2 = 12345;
      const numeroExponencial = numero2.toExponential(2); // numeroExponencial será "1.23e+4"

//  * toString(): Convierte un número en una cadena de texto.
      const numero3 = 42;
      const numeroComoString = numero3.toString(); // numeroComoString será "42"

//  * isFinite(): Verifica si un número es un valor finito. Devuelve true si el número es finito y false si es NaN o infinito.
      const numero4 = 42;
      const numero5 = Infinity;
      const esFinito1 = Number.isFinite(numero4); // esFinito1 será true
      const esFinito2 = Number.isFinite(numero5); // esFinito2 será false

//  * isNaN(): Verifica si un valor es NaN.
      const valor1 = 42;
      const valor2 = "hola";
      const esNaN1 = Number.isNaN(valor1); // esNaN1 será false
      console.log(Number.isNaN(Number(valor2)))

//  * parseInt() y parseFloat(): Aunque son funciones globales, son comúnmente utilizadas con valores numéricos para convertir cadenas en números enteros o de punto flotante.
      const cadenaEntera = "42";
      const cadenaDecimal = "3.14";
      const numeroEntero = parseInt(cadenaEntera); // numeroEntero será 42
      const numeroDecimal = parseFloat(cadenaDecimal); // numeroDecimal será 3.14
