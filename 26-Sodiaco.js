/* 
Leer por pantalla un número entre 1 y 12, luego imprimir en letras el mes a que corresponde dicho valor y a que signo del zodiaco
pertenece, ejemplo: si es mes de Mayo, los signos a que corresponde son: Tauro-Geminis.
*/

let numero = 11;

// Arrays y signos por mes
let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let signosPorMes = {
  1: "Capricornio - Acuario",
  2: "Acuario - Piscis",
  3: "Piscis - Aries",
  4: "Aries - Tauro",
  5: "Tauro - Géminis",
  6: "Géminis - Cáncer",
  7: "Cáncer - Leo",
  8: "Leo - Virgo",
  9: "Virgo - Libra",
  10: "Libra - Escorpio",
  11: "Escorpio - Sagitario",
  12: "Sagitario - Capricornio",
};

if (numero >= 1 && numero <= 12) {
  let mes = meses[numero - 1];
  let signos = signosPorMes[numero];

  console.log(`Mes: ${mes}`);
  console.log(`Signos del zodiaco: ${signos}`);
} else {
  console.log("Número fuera de rango. Debe ser entre 1 y 12.");
}
