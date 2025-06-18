/* 
Una distribuidora de huevos quiere contratarlo a usted para que realice un algoritmo que calcule el precio de venta para una cantidad
de huevos a llevar por un determinado cliente.
*/

let tipoHuevo = "AA"; // "A" o "AA"
let cantidad = 320;

let precioUnitario;
let descuento = 0;

// Definir precio según tipo de huevo
if (tipoHuevo === "A") {
  precioUnitario = 220;
} else if (tipoHuevo === "AA") {
  precioUnitario = 250;
} else {
  console.log("Tipo de huevo no válido. Debe ser 'A' o 'AA'.");
}

// Calcular descuento según cantidad
if (cantidad >= 1 && cantidad <= 100) {
  descuento = 0.03;
} else if (cantidad >= 101 && cantidad <= 200) {
  descuento = 0.05;
} else if (cantidad >= 201 && cantidad <= 300) {
  descuento = 0.08;
} else if (cantidad >= 301) {
  descuento = 0.10;
}

// Cálculos
let subtotal = precioUnitario * cantidad;
let valorDescuento = subtotal * descuento;
let total = subtotal - valorDescuento;

// Salida
console.log("Tipo de huevo:", tipoHuevo);
console.log("Cantidad:", cantidad);
console.log("Precio unitario:", precioUnitario);
console.log("Subtotal:", subtotal);
console.log("Descuento aplicado:", (descuento * 100) + "%");
console.log("Total a pagar:", total);
