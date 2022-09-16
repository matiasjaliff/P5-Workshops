// Map : Ejercicios

// Ejercicio 1
// Tenemos un arreglo de números en la variable numbers y deberás crear uno nuevo que contenga el doble de cada número, usando .map().

// let numbers = [3, 7, 13, 99];
// // CODEA LA SOLUCIÓN
// console.log(numbers); // [3, 7, 13, 99]
// console.log(dobles); // [6, 14, 26, 198]

// Ejercicio 2
// Tenemos un arreglo en la variable frases con varias sentencias al azar. Usá la función map() para que cada frase empiece y termine con signos de exclamación.

// let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
// console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem amet.!' ]

let numbers = [3, 7, 13, 99];
const dobles = (input) => input.map((element) => element * 2);
console.log(numbers);
console.log(dobles(numbers));

let frases = ["Labore sea dolor.", "Justo rebum dolor.", "Stet lorem amet."];
const frasesExclamadas = (input) => input.map((element) => element + "!");
console.log(frases);
console.log(frasesExclamadas(frases));
