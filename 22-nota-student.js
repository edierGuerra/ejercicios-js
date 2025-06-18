//se desea saber cual es la nota final de un estudiante
//en base a sus notas parciales
//seguimiento 40%
// parcial 20%
// proyecto 10%
//exam final 30%

const prompt = require("prompt-sync")(); //dependencia que permite pedir datos por consola



const seguimiento = parseFloat(prompt("ingresa la nota de seguimiento: "))
const parcial = parseFloat(prompt("ingresa la nota del parcial: "))
const proyecto = parseFloat(prompt("ingresa la nota del proyecto: "))
const examF = parseFloat(prompt("ingresa la nota del examen final: "))

let nseguimiento
let nparcial
let nproyecto
let nexam
let total

nseguimiento = seguimiento * 0.40
nparcial = parcial * 0.20
nproyecto = proyecto * 0.10
nexam = examF * 0.30

total = nseguimiento + nparcial + nproyecto + nexam

console.log(`La nota final del estudiante de sus 4 notas es de ${total.toFixed(2)}`)