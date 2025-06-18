// Algoritmo para una secretaria de salud
// que determina que tipo de vacuna se le debe aplicar a un paciente
// dependiendo de su edad y de su sexo

const prompt = require("prompt-sync")(); //dependencia que permite pedir datos por consola

const nombre = prompt("Cual es su nombre: ") //pedimos datos de entrada
const edad = prompt("Cual es su edad: ")

if (edad >= 70) {
    console.log(`El paciente ${nombre} al tener ${edad} años se le debe aplicar la vacuna tipo: C`)
} else if (edad < 16) {
    console.log(`El paciente ${nombre} al tener ${edad} años se le debe aplicar la vacuna tipo: A`)
} else {
    const sexo = prompt("Cual es su sexo: ").toLocaleUpperCase()
    console.log(sexo)

    if (edad >= 16 && edad <=69 && sexo == "F") {
        console.log(`La paciente ${nombre} al tener ${edad} años y ser mujer se le debe aplicar la vacuna tipo: B`)
    } else {
        console.log(`El paciente ${nombre} al tener ${edad} años y ser Hombre se le debe aplicar la vacuna tipo: A`)
}}