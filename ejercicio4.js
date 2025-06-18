/* 4.Se tiene el nombre y la edad de tres personas. 
Se desea saber el nombre y la edad de la persona de menor edad. 
Realice el algoritmo correspondiente. */

// Se define el primer nombre y su edad
let nombre1 = "Sara";
let edad1 = 18;

// Segundo nombre y su edad
let nombre2 = "Charif";
let edad2 = 20;

// Tercer nombre y su edad
let nombre3 = "Jose";
let edad3 = 22;

// Por defecto, se asume que la primera persona es la menor
let menorNombre = nombre1;
let menorEdad = edad1;

// Se compara la edad de la segunda persona con la menor edad actual
if (edad2 < menorEdad) {
    menorEdad = edad2;        // Si es menor, se actualiza la edad
    menorNombre = nombre2;    // y también el nombre
}

// Se compara ahora la edad de la tercera persona con la menor actual
if (edad3 < menorEdad) {
    menorEdad = edad3;
    menorNombre = nombre3;
}

// Se muestra en consola quién es la persona más joven y su edad
console.log("La persona de menor edad es:", menorNombre, "con", menorEdad, "años.");




