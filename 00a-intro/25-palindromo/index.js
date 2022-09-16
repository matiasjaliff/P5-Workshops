// 19. Palindromo

// Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no,
// debe retornar true en el caso que sea, y false en el caso que no.
// Definición de palíndromo aquí.

// Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

const palindromo = (word) => word === word.split("").reverse().join("");
