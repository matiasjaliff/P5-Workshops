// Fibonacci
// 🤓 ¿Qué Es La Serie Fibonacci?
// La sucesión de Fibonacci comienza con los números 0 y 1. A partir de estos, «cada término es la suma de los dos anteriores». Por ejemplo, los primeros diez números de la serie son:

// 0,1,1,2,3,5,8,13,21,34

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 5 = 8

// // ¡Y así, sucesivamente, la serie seguirá realizando
// // la suma de los últimos dos números!

// ⚠️ Importante: La relación de recurrencia define a la serie de Fibonacci.

// 👉 Ejercicio
// En este ejercicio deberás escribir una Función que acepte un número X (que indica la posición) y que devuelva otro número (el que se encuentra en esa posición) en la serie de Fibonacci. En otras palabras, imprimirá el número que está en la posición contando X cantidad de lugares.

// Serie: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55…

// Fibonacci (2): 1
// Fibonacci (5): 3
// Fibonacci (8): 13

const Fibonacci = (number) => {
  if (number === 1) return 0;
  else if (number === 2) return 1;
  else {
    let a = 0,
      b = 1;
    for (let i = 3; i <= number; i++) {
      if (i === number) return a + b;
      else {
        const aux = a + b;
        a = b;
        b = aux;
      }
    }
  }
};
