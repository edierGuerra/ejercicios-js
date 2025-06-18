/* 
Diseñar un algoritmo para que lea una fecha de nacimiento de una persona, luego imprima lo siguiente: Numero de años – meses- días, tener en cuenta las fechas antes y después del cumpleaños.
*/

// Leer fecha de nacimiento (formato AAAA-MM-DD)
let fechaNacimientoStr = "2004-06-14";
let fechaNacimiento = new Date(fechaNacimientoStr);

// Obtener fecha actual
let hoy = new Date();

// Calcular 
let años = hoy.getFullYear() - fechaNacimiento.getFullYear();
let meses = hoy.getMonth() - fechaNacimiento.getMonth();
let dias = hoy.getDate() - fechaNacimiento.getDate();

// Ajustar si todavía no ha cumplido años este año
if (meses < 0 || (meses === 0 && dias < 0)) {
  años--;
  meses += 12;
}

// Ajustar días si el día actual es menor al día de nacimiento
if (dias < 0) {
  // Restamos un mes y sumamos los días del mes anterior
  meses--;
  let mesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0);
  dias += mesAnterior.getDate();
}

// Mostrar resultado
console.log(`Tienes ${años} años, ${meses} meses y ${dias} días.`);
