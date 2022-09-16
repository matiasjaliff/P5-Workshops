// FizzBuzz II : La Venganza de FizzBuzz
// En este ejercicio, deberás escribir una nueva versión de FizzBuzz (fizzBuzz2) que tome dos Strings como Argumento y reimplemente el FizzBuzz original. Elegí una palabra para cada String (palabra1 y palabra2) que reemplace a Fizz y a Buzz.
// ¿Cuáles Eran las Instrucciones de Fizzbuzz?
// Para completar este ejercicio, deberás:
// Lograr que fizzBuzz2 devuelva un String con los números separados por comas.
// Mejorar la Función para que el usuario pueda decidir hasta qué número tiene que contar fizzBuzz2.
// Mejorar la Función para que el usuario pueda ingresar fizz_num y buzz_num para que la sustitución de palabras ocurra en los números múltiplos de los nuevos argumentos de entrada (en vez de solo 3 y 5).
// ⚠️Importante: Intentá no ayudarte con tu código anterior de Fizzbuzz.

function fizzBuzz2(palabra1, palabra2, limite, fizz_num, buzz_num) {
  let text = "";
  let counter = 1;

  while (counter <= limite) {
    !(counter % fizz_num) && !(counter % buzz_num)
      ? (text += palabra1 + palabra2)
      : !(counter % fizz_num)
      ? (text += palabra1)
      : !(counter % buzz_num)
      ? (text += palabra2)
      : (text += counter.toString());
    text += counter < limite ? ", " : ".";
    counter++;
  }

  return text;
}
