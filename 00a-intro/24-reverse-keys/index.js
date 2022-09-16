// 18. {value: key} kelue: vay

// Debés crear una función llamada `reverseKeys` que reciba un objeto como paŕámetro. Si ese
// paŕametro no es un objeto, deberá devolver un string que indique qué tipo de dato fue ingresado
// como input y por qué no es válido.
// Si el parámetro es un objeto, la función deberá devolver otro objeto. Deberá tener todas las
// propiedades que sean un string puestas como key y el value deberá ser el key anterior.
// Ejemplo:
// - reverseKeys(344) debería devolver “error, input can’t be a number”
// - reverseKeys([ ]) debería devolver “error, input can’t be an Array”
// - reverseKeys(‘hola’) debería devolver “error, input can’t be a string”

var prueba = {
  nombre: "santi",
  edad: 22,
  nacionalidad: "de otro planeta",
  documento: 44444444,
};

// reverseKeys(prueba) debería devolver:
// {
// santi: ‘nombre’,
// edad: 22,
// ‘’de otro planeta”: nacionalidad,
// documento: 44444444

const reverseKeys = (input) => {
  if (typeof input !== "object") {
    return `Error, input can't be a ${typeof input}`;
  } else if (Array.isArray(input)) {
    return "Error, input can't be an array";
  } else {
    const output = {};
    for (let prop in input) output[input[prop]] = prop;
    return output;
  }
};
