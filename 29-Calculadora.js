/* 
Hacer un algoritmo para implementar una calculadora de las cuatro operaciones básicas y que le permita al usuario elegir que operación
va a realizar; con palabras, es decir: sumar, restar, multiplicar o dividir.
*/

let operacion = "sumar";
let num1 = 220;
let num2 = 3;

let resultado;

// Evaluar operación
if (operacion === "sumar") {
  resultado = num1 + num2;
  console.log("Resultado de la suma:", resultado);

} else if (operacion === "restar") {
  resultado = num1 - num2;
  console.log("Resultado de la resta:", resultado);

} else if (operacion === "multiplicar") {
  resultado = num1 * num2;
  console.log("Resultado de la multiplicación:", resultado);

} else if (operacion === "dividir") {
  if (num2 === 0) {
    console.log("Error: no se puede dividir por cero.");
  } else {
    resultado = num1 / num2;
    console.log("Resultado de la división:", resultado);
  }

} else {
  console.log("Operación no válida. Debe escribir: sumar, restar, multiplicar o dividir.");
}
