// 6. Similar String.split()

// Debés crear una función llamada `split` que reciba un `string` y simule el comportamiento de la
// función original Si no sabés cómo funciona, Google puede ayudarte..

// Importante: No podés usar el String.split()

// Ejemplo:
// - split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// - split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

const split = (cadena) => {
  const output = [];
  for (const letra of cadena) {
    output.push(letra);
  }
  return output;
} 