// Simulación del Array.join()
// En este ejercicio deberás crear una Función llamada join que reciba un Arreglo y simule el comportamiento del método Array.join().

// ⚠️Importante: No podés usar el método Array.join() original.

// Por ejemplo:

// join(["h","o","l","a"]) debe retornar el string "hola".

// join(["c","h","a","u"]) debe retornar el string "chau".

const join = (arr) => arr.reduce((previous, current) => previous + current);
