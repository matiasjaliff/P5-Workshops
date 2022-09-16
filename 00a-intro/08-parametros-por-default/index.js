// Parámetros Por Default : Ejercicios

// Ejercicio 1
// En este ejercicio deberás agregar Parámetros por default a la Función, para que al ejecutarla no devuelva ningún error.

// const longitudDelNombre = (nombre) => nombre.length
// console.log( longitudDelNombre() ); // 0
// console.log( longitudDelNombre('Ana') ); // 3

// Ejercicio 2
// En este ejercicio deberás refactorizar la Función para obtener el mismo resultado usando un código más reducido.

// const saludarVisitanteWeb = (nombreUsuario) => {
//  if (nombreUsuario === undefined) {
//    return '¡Hola, anónimo!';
//  } else {
//    return `¡Hola, ${nombreUsuario}!`;
//  }
// }
// console.log( saludarVisitanteWeb() ); // ¡Hola, anónimo!
// console.log( saludarVisitanteWeb('José') ); // ¡Hola, José!

const longitudDelNombre = (nombre) => (nombre || "").length;
console.log(longitudDelNombre());
console.log(longitudDelNombre("Ana"));

const saludarVisitanteWeb = (nombreUsuario) =>
  `¡Hola, ${nombreUsuario || "anónimo"}!`;
console.log(saludarVisitanteWeb());
console.log(saludarVisitanteWeb("José"));
