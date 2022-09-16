// Biggest Smallest
// En este ejercicio deberás:
// 1- Escribir una Función llamada biggest_smallest que tenga un Argumento (que haga referencia a un Arreglo de números).
// 2- Utilizar el método forEach() para encontar el número más grande y el número más chico.
// 3- La función debe devolver por consola un Arreglo que contenga los números mínimo y máximo.
// 💡 Ejemplo:
// [111, 27, 31, 44, 101, 213, 33, 58]
// // Salida: 27, 213

const biggest_smallest = (input) => {
  let smallest = input[0],
    biggest = input[0];
  input.forEach((element) => {
    if (element < smallest) smallest = element;
    else if (element > biggest) biggest = element;
  });
  return [smallest, biggest];
};

console.log(biggest_smallest([111, 27, 31, 44, 101, 213, 33, 58]));
