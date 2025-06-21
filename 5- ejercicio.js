
// Se define la edad del estudiante
let edad = 20;

// Se define el promedio académico
let promedio = 9;

// Se inicializa la variable que almacenará el valor de la beca
let beca = 0;

// Si el estudiante es mayor de 18 años
if (edad > 18) {
    
    // Evaluamos el promedio para asignar la beca correspondiente
    if (promedio >= 9) {
        beca = 200000;
    } else if (promedio >= 7.5) {
        beca = 100000;
    } else if (promedio >= 6.0) {
        beca = 50000;
    } else {
        // Si el promedio es menor a 6, no recibe beca
        console.log("Se le enviará una carta de invitación para que estudie más.");
    }

} else {
    // Si el estudiante tiene 18 años o menos

    if (promedio >= 9) {
        beca = 30000;
    } else if (promedio >= 8) {
        beca = 20000;
    } else if (promedio >= 6) {
        beca = 10000;
    } else {
        // Si el promedio es menor a 6, no recibe beca
        console.log("Se le enviará una carta de invitación para que estudie más.");
    }
}

// Si el valor de beca fue asignado, se muestra el monto
if (beca > 0) {
    console.log("La beca será de:", beca);
}
