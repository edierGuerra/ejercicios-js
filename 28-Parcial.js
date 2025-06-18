/* 
Elaborar un algoritmo para que calcule la nota definitiva de un estudiante de lógica, se debe leer las siguientes notas por pantalla:
seguimiento 60%, I parcial 20%, II parcial 20%; al final debe imprimir un mensaje que indique si ganó o perdió la materia.
*/

// Leer notas desde el usuario
let seguimiento = 4.5;
let parcial1 = 3.0;
let parcial2 = 2.5;

// Validar que las notas estén entre 0 y 5
if (
  seguimiento < 0 || seguimiento > 5 ||
  parcial1 < 0 || parcial1 > 5 ||
  parcial2 < 0 || parcial2 > 5
) {
  console.log("⚠️ Las notas deben estar entre 0 y 5. Intente de nuevo.");
} else {
  // Calcular nota definitiva
  let definitiva = (seguimiento * 0.6) + (parcial1 * 0.2) + (parcial2 * 0.2);

  // Mostrar la nota definitiva con dos decimales
  console.log(`Nota definitiva: ${definitiva.toFixed(2)}`);

  // Evaluar si ganó o perdió
  if (definitiva >= 3.0) {
    console.log("Ganaste");
  } else {
    console.log("Perdiste la materia. Mejor estudie bago");
  }
}
