// Calculador De Abastecimiento De Por Vida

// Ejercicio 1
// ¿Cuántos snacks vas a comer por el resto de tu vida? ¡Averigualo!
// Almacená tu edad en una Variable.
// Guardá tu edad máxima en otra Variable.
// Declará una Variable con el nombre de tu snack favorito.
// Estimá cuántos snacks comerás por día y guardalo como un número en una Variable.
// Calculá cuántos snacks te quedan por comer en el resto de tu vida.
// Mostrá el resultado en un alert: "Necesitarás NN snacks para que te alcancen hasta los XX años."
// Agregale un precio por unidad y descubrí cuánto vas a gastar en snacks el resto de tu vida.

// Ejercicio 2
// Estás organizando tus vacaciones y tenés que calcular cuánto dinero vas a necesitar para comida.
// Almacená en una Variable la cantidad de días que vas a estar de viaje.
// Estimá tu presupuesto máximo por todo el viaje y guardalo en una Variable.
// Declará la Variable comida.
// Estimá cuántas comidas vas a tener en todo tu viaje. Guardá este valor en una Variable.
// Teniendo en cuenta tu presupuesto máximo, calculá cuánto podés gastar en cada comida.
// Mostrá el resultado en un alert: "Podés gastar XX en cada comida para que te alcance la plata durante los XX días de viaje".

const edad = prompt("Ingrese su edad: ");
const esperanza = prompt("Hasta qué edad cree que vivirá: ");
const snack = prompt("Cual es su snack favorito: ");
const diario = prompt("Cuántos snacks comés por día: ");

const abastecimiento = (esperanza - edad) * 365 * diario;

alert(
  `Vas a necesitar ${abastecimiento} ${snack} para cubrir tus necesidades para el resto de tu vida.`
);
