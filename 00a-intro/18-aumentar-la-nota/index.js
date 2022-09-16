// Aumentar La Nota
// Tenés una lista de estudiantes con su desempeño académico actual. Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.

// Ejemplo:

//  { Estudiante: "Juan", nota: 6 },
//  { Estudiante: "Mario", nota: 8 },
//  { Estudiante: "Julia", nota: 10 },
//  { Estudiante: "Sofia", nota: 2 },
// Output:

//  { Estudiante: "Juan", nota: 8 },
//  { Estudiante: "Mario", nota: 10 },
//  { Estudiante: "Julia", nota: 10 },
//  { Estudiante: "Sofia", nota: 2 },

const aumentar = (obj) => {
  if (obj.nota > 5 && obj.nota <= 8) obj.nota += 2;
  else if (obj.nota > 8 && obj.nota < 10) obj.nota = 10;
  return obj;
};
