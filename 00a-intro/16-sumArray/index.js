// sumArray()
// En este ejercicio, deberás crear una Función sumArray que acepte un Arreglo de números y devuelva la suma de todos ellos. Usá este código para testear tu Función:

// sumArray([1,2,3]) // 6
// sumArray([10, 3, 10, 4]) // 27
// sumArray([-5,100]) // 95

const sumArray = (arr) => arr.reduce((previous, current) => previous + current);
