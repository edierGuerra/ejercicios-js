//averiguar a cuanto asciende la utilidad en el total de ventas
// partiendo del numero de articulos vendidos por dia

const prompt = require("prompt-sync")(); //dependencia que permite pedir datos por consola

const utilidad = 0.35 //utilidad

const precioshoe = parseInt(prompt("cual es el precio de cada zapato: ")) //precio fijo
const cantshoes = parseInt(prompt("cual es la cantidad de zapatos vendidos por dia: "))

let utilidadshoe

utilidadshoe = precioshoe * utilidad //se calcula la utilidad de cada zapato
utilidadtotal = utilidadshoe * cantshoes //esta utilidad se multiplica por la cantidad de zapatos

console.log(`En el almacen, la utilidad en el total de las ventas es de: $${utilidadtotal}`)

