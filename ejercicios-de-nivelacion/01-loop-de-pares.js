// 1. Loop de pares
// Debés crear una función llamada loopDePares que reciba como parámetro un número y haga un
// loop de 0 a 100 mostrando en la consola cada número del loop.
// En caso de que el número de la iteración, sumado con el número pasado por parámetro, sea par,
// mostrá en la consola “El número x es par”.

const { stdin, stdout, exit } = require("node:process");

function loopDePares(number) {
  for (let i = 0; i <= 100; i++) {
    (number + i) % 2
      ? console.log(`${i}`)
      : console.log(`El número ${number + i} es par`);
  }
}

stdout.write("Ingrese un número: ");

stdin.on("data", function (data) {
  const input = Number(data);
  console.log(`El número ingresado es: ${input}`);
  loopDePares(input);
  exit();
});
