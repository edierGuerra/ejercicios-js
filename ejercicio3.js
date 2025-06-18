/* Determinar cuanto debe cobrar el dueño 
de un estacionamiento por su uso a sus clientes*/

// Se define la cantidad de horas que el vehículo estuvo estacionado
let horas = 6;

// Se inicializa la variable total que almacenará el costo a cobrar
let total = 0;

// Si las horas son 0 o negativas, muestra un error
if (horas <= 0) {
    console.log("Error: la cantidad de horas no es válida.");
} 

// Si las horas son 2 o menos, se cobra $5000 por cada hora
else if (horas <= 2) {
    total = horas * 5000;
} 

// Si las horas son mayores a 2 pero hasta 5, se cobra:
// - Las primeras 2 horas a $5000
// - Las siguientes a $4000
else if (horas <= 5) {
    total = (2 * 5000) + ((horas - 2) * 4000);
} 

// Si las horas son mayores a 5 pero hasta 10, se cobra:
// - 2 horas a $5000
// - 3 horas a $4000 (de la 3 a la 5)
// - El resto hasta la hora actual a $3000
else if (horas <= 10) {
    total = (2 * 5000) + (3 * 4000) + ((horas - 5) * 3000);
} 

// Si son más de 10 horas, se cobra:
// - 2 horas a $5000
// - 3 horas a $4000
// - 5 horas a $3000
// - Y las horas adicionales (más de 10) a $2000
else {
    total = (2 * 5000) + (3 * 4000) + (5 * 3000) + ((horas - 10) * 2000);
}

// Se imprime el valor total que debe pagar el cliente
console.log("Debe cobrar por el estacionamiento un valor de:", total);

