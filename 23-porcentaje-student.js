//calcular el porcentaje de hombre y mujeres en un salon

const prompt = require("prompt-sync")(); //dependencia que permite pedir datos por consola

const hombres = parseInt(prompt("ingresa la cantidad de hombres del salon: ")) //valores de entrada
const mujeres = parseInt(prompt("ingresa la cantidad de mujeres del salon: "))

let porcentajeH
let porcentajeM
let total

total = hombres + mujeres //obtener total

porcentajeH = (hombres / total) * 100 //formula para calcular porcentaje
porcentajeM = (mujeres / total) * 100

console.log(`Porcentaje de hombres: ${porcentajeH.toFixed(0)}%`);
console.log(`Porcentaje de mujeres: ${porcentajeM.toFixed(0)}%`);

let verificar

verificar = porcentajeH + porcentajeM
console.log(verificar) //verficar el porcentaje