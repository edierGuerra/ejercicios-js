//calcular el salario de un profesor al cabo de 6 años si su salario inicial es de 1500
//tambien calcular cual sera el salario recibido en cada uno de los 6 años.

let salarioI = 1500 //variables
let incremento = 0.10
let años = 6

console.log(`El salario del primer año es $${salarioI}`)

let nuevoSalario = salarioI

console.log("salarios anuales")
for (let i = 1; i <= años; i++) {
    let aumento = salarioI * incremento//el salario inicial calculara el incremento
    nuevoSalario = nuevoSalario + aumento //luego eso se va a sumar con el nuevo salario
    console.log(`Año ${i}: $${nuevoSalario}`)
}

console.log(`el salario al cabo de 6 años del profesor es: $${nuevoSalario}`)