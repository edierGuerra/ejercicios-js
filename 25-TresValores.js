/* 
Leer tres valores por pantalla, determinar e imprimir el mayor, el medio y el menor
*/

// Leer 3 números del usuario
let a = 30;
let b = 40;
let c = 80;

// Guardarlos en un array y ordenarlos de mayor a menor
let numeros = [a, b, c].sort((x, y) => y - x);

// Mostrar los resultados
console.log("Mayor: " + numeros[0]);
console.log("Medio: " + numeros[1]);
console.log("Menor: " + numeros[2]);

