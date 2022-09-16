// FizzBuzz
// En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, teniendo en cuenta estos criterios:
// Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// Si es múltiplo de 5, deberá imprimir "Buzz".
// Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".

let counter = 1;

while (counter <= 100) {
  if (!(counter % 3) && !(counter % 5)) {
    console.log("FizzBuzz");
  } else {
    if (!(counter % 3)) {
      console.log("Fizz");
    } else {
      if (!(counter % 5)) {
        console.log("Buzz");
      } else {
        console.log(counter);
      }
    }
  }
  counter++;
}
