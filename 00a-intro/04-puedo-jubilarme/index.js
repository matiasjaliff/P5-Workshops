// 🚀¿Puedo Jubilarme?

// Parte 1
// En este ejercicio, crearás un programa que le indique a las mujeres si están en edad, o no, de jubilarse.
// ⚠️ Importante: En Argentina, las mujeres pueden jubilarse a los 60 años.

// Parte 2
// En este ejercicio, modificarás tu programa para informar, tanto a las mujeres como a los hombres, si están en edad de jubilarse.
// ⚠️ Importante: En Argentina, los hombres pueden jubilarse a los 65 años.

// Extra Bonus
// Optimizá tu código de modo que, todo el ejercicio, se resuelva con un solo if. Usá operadores lógicos y de relación.

let genero = prompt(
  "Veamos si usted se puede jubilar. Ingrese a continuación su género (M o F): "
).toLowerCase();

while (genero !== "m" && genero !== "f") {
  genero = prompt(
    "El valor ingresado no es válido. Recuerde que las opciones son M o F. Ingrese de nuevo: "
  ).toLowerCase();
}

let edad = prompt("Ahora ingrese su edad por favor: ");

while (edad <= 0) {
  edad = Number(prompt("Ingrese una edad válida por favor: "));
}

(genero === "f" && edad >= 60) || (genero === "m" && edad >= 65)
  ? alert("Usted ya se puede jubilar")
  : alert("Usted aún no está en edad de jubilarse");
