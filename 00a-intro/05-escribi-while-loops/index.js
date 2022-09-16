// Escribí while Loops
// En este ejercicio deberás imprimir en la consola:
// 1. Todos los números entre -10 y 19.
// 2. Todos los números pares entre 10 y 40.
// 3. Todos los números impares entre 300 y 333.
// 4. Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.

let counter;

console.log("Todos los números entre -10 y 19:");

counter = -10;

while (counter < 20) {
  console.log(counter);
  counter++;
}

console.log("Todos los números pares entre 10 y 40:");

counter = 10;

while (counter <= 40) {
  console.log(counter);
  counter += 2;
}

console.log("Todos los números impares entre 300 y 333:");

counter = 301;

while (counter <= 333) {
  console.log(counter);
  counter += 2;
}

console.log(
  "Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo:"
);

counter = 5;

while (counter <= 50) {
  if (!(counter % 5) && !(counter % 3)) console.log(counter);
  counter++;
}
