// Mensaje Con Variables
// Declará las siguientes Variables y asignales un valor:
// nombre.
// edad.
// cumpleaños.
// ciudad.
// ocupacion.
// pasatiempos.
// Usá console.log para escribir un párrafo que combine Strings con la información guardada en las Variables.
// Ahora creá múltiples Variables en una única línea de código.

console.log(
  "Le damos la bienvenida. A continuación le vamos a pedir información personal."
);

let nombre, edad, cumple, ciudad, ocupacion, pasatiempos;

nombre = prompt("Nombre: ");
edad = prompt("Edad: ");
cumple = prompt("Cumpleaños: ");
ciudad = prompt("Ciudad: ");
ocupacion = prompt("Ocupación: ");
pasatiempos = prompt("Pasatiempos: ");

console.log(
  `Usted es ${nombre}, tiene ${edad} años y nació el ${cumple}. Vive en ${ciudad}, es ${ocupacion} y en sus tiempos libres usted se dedica a ${pasatiempos}.`
);

console.log("Muchas gracias por visitarnos!");
