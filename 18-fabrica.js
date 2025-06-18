//algoritmo para calcular el precio final de venta de una fabrica de pantalones
//y cuanto se ganara por los n pantalones que produzca con el corte de algunos de sus modelos

const prompt = require("prompt-sync")(); //dependencia que permite pedir datos por consola

const modelo = prompt("ingresa el modelo: (A - B): ").toLocaleUpperCase()

if (modelo !== "A" && modelo !== "B") {
    return(console.log("En la empresa solo se cuenta con los modelos A y B")) //validamos
}

const cantjeans = parseInt(prompt("ingresa la cantidad de pantalones a fabricar: "))
const costela = parseFloat(prompt("ingresa el costo por metro de la tela: "))

//constantes
const telaA = 1.50
const telaB = 1.80

const mobraA = 0.80
const mobraB = 0.95

const ganancia = 0.30
const cargatm = 0.04

let costotela //definimos variables
let manodeobra
let carga
let final

if (modelo == "A") { //calculamos el costo de la tela y la mano de obra
    costotela = costela * telaA
    manodeobra = costotela * mobraA
} else {
    costotela = costela * telaB
    manodeobra = costotela * mobraB
}
let total = (costotela + manodeobra)
console.log(total)

const talla = parseInt(prompt("ingresa una talla disponible (30, 32 o 36): "))
if (talla != 32 && talla != 30 && talla != 36) {
    return(console.log("Solo hay tallas 30, 32 y 36")) //validamos
} else if (talla == 32 || talla == 36) {
    console.log("a las tallas 32 y 36 se les carga un 4%")
    carga = total + (total * cargatm) //le cargamos el 4%
} else {
    carga = total //sino pasa normal
}
final = carga + (carga * ganancia) //carga multiplicada por la ganancia
console.log(`el total por la venta de ${cantjeans} pantalones es: $ ${(final * cantjeans)}`) //total venta
console.log(`la ganancia por" ${cantjeans} pantalones es $ ${(final-(costotela+manodeobra))* cantjeans}`) //a final le restamos el costo de la tela mas la mano de obra que son gasto y lo quede se multiplica por la cantidad de pantalones
