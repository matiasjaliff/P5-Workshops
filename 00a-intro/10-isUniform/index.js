// isUniform()

// En este ejercicio deberás crear la Función isUniform que tome un Arreglo como Parámetro y devuelva true si todos los elementos del Arreglo son idénticos. De lo contrario, deberá devolver false.
// ⚠️ Importante: Salvo que sea necesario, tu Función no debe recorrer todo el Arreglo si no es idéntico. Es decir, al momento que encuentre una diferencia deberá cortar.

// Usá este código para testear tu solución:
// isUniform([1, 1, 1, 1]) // true
// isUniform([1, 2, 1, 1]) // false
// isUniform(["a", "b", "p"]) // false
// isUniform (["b", "b", "b"]) // true

const isUniform = (input) => {
  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] !== input[i + 1]) return false;
  }
  return true;
};

console.log(isUniform([1, 1, 1, 1])); // true
console.log(isUniform([1, 2, 1, 1])); // false
console.log(isUniform(["a", "b", "p"])); // false
console.log(isUniform(["b", "b", "b"])); // true
