//calcular el saldo actual del cliente, el pago minimo y el pago para no generar intereses

const prompt = require("prompt-sync")(); //dependencia que permite pedir datos por consola


let saldoAnterior = parseFloat(prompt("Ingresa el saldo anterior del cliente: ")) //parse float para pasarlos a flotante
let montoCompras = parseFloat(prompt("Ingresa el monto de las compras: "))
let corteAnterior = parseFloat(prompt("Ingresa el pago del corte anterior: "))

let saldoActual //es lo que debe
let pagoMinimo
let pagoSinIntereses

//calcular el saldo actual sin intereses ni multa
//lo que debia antes se le suman sus compras y se le resta lo que pago
saldoActual = saldoAnterior + montoCompras - corteAnterior

//calcular el pago minimo
pagoMinimo = saldoActual * 0.15

//si el pago realizado es menor al minimo, aplicar intereses y multa
if (corteAnterior < pagoMinimo) {
    saldoActual += (saldoActual * 0.12) + 200
}


//calcular el pago para no generar intereses
pagoSinIntereses = saldoActual * 0.85

console.log(`el saldo actual es ${saldoActual.toFixed(2)}`)
console.log(`el pago minimo es ${pagoMinimo.toFixed(2)}`)
console.log(`el pago para no generar intereses es ${pagoSinIntereses.toFixed(2)}`)
