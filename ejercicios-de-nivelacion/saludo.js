// Dale la bienvenida al sitio a los usuarios.
// Usá alert para dar la bienvenida a tus usuarios.
// Preguntale al usuario su nombre y guardalo en una Variable.
// Para preguntarle al usuario su nombre, usá la Función prompt.
// Creá otro mensaje de saludo que incluya el nombre guardado en tu Variable.
// Preguntale su edad y guardala en una Variable.
// Creá un mensaje con su edad y loguealo en la consola.
// Por último, mostrale un mensaje que incluya su nombre y edad.

const { stdin, stdout, exit } = require("node:process");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let name, age;

rl.setPrompt("Ingrese su nombre por favor: ");
rl.prompt();
rl.on("line", (input) => {
  if (input) {
    name = input;
    console.log(`Te damos la bienvenida ${name}`);
    rl.close();
  }
});

// rl.question("Ingrese su nombre por favor: ", (input) => {
//   rl.setPrompt("");
//   rl.on("line");
// });

rl.on("close", () => {
  console.log("Muchas gracias por visitarnos!");
});
