// Reduce : Ejercicios

// Ejercicio 1 ////////////////////////////////////////////////////////////////////////////////////////////////
// Teniendo un Arreglo de números al azar (llamado numbers), usá .reduce() para obtener la multiplicación total de todos los números.
// ⚠️ Importante: Prestá atención al valor inicial del acumulador.

let numbers = [6, 1, 34, 94, 3, 17];

const mul = numbers.reduce((previous, current) => previous * current);

console.log(mul); // debería mostrar 977976

// Ejercicio 2 ////////////////////////////////////////////////////////////////////////////////////////////////
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo que contenga solo los números impares.

let numeros = [3, 7, 6, 13, 2, 24, 99];

let impares = numeros.reduce((previous, current) => {
  if (current % 2) previous.push(current);
  return previous;
}, []);

console.log(impares); // [3, 7, 13, 99]

// Ejercicio 3 ////////////////////////////////////////////////////////////////////////////////////////////////
// Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor que posea el Arreglo.

let numbers3 = [5, 4, 1, 9, 2];

let max = numbers3.reduce((previous, current) =>
  current > previous ? current : previous
);

console.log(max); // debería mostrar 9

// Ejercicio 4 ////////////////////////////////////////////////////////////////////////////////////////////////
// Completá la Función join que reciba un Arreglo de números y retorne un String con todos los números concatenados.

let join = (arr) =>
  arr.reduce((previous, current) => previous + current.toString(), "");

console.log(join([1, 2, 3])); // "123"

// Ejercicio 5 ////////////////////////////////////////////////////////////////////////////////////////////////
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo con los mismos números pero eliminando los repetidos.

let numeros5 = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11];

let sinRepetidos = numeros5.reduce((previous, current) => {
  for (const element of previous) {
    if (element === current) return previous;
  }
  previous.push(current);
  return previous;
}, []);

console.log(sinRepetidos); // debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]

// Ejercicio 6 ////////////////////////////////////////////////////////////////////////////////////////////////
// Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota promedio final de todos los trabajos prácticos de este curso.

let notasDeTPs = [4, 7, 8, 5, 10];

let notaFinal = notasDeTPs.reduce(
  (previous, current, index) => (previous * index + current) / (index + 1)
);

console.log(notaFinal); // debería mostrar 6.8
