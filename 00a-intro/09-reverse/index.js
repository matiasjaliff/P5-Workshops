// Reverse
// En este ejercicio deberás crear una Función que devuelva un Arreglo con sus elementos invertidos, sin modificarlo. Luego, deberás hacer una Función que lo modifique e invierta el orden de sus elementos.

const reverseNotDestructive = (input) => {
  const aux = [];
  input.forEach((element) => aux.unshift(element));
  return aux;
};

const reverseDestructive = (input) => input.reverse();
