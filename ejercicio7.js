// Función para calcular el costo total de una póliza de seguros
function calcularPoliza(tipoPoliza, bebeAlcohol, usaLentes, tieneEnfermedad, edad) {
  let cuotaBase = 0;

  // Determinar la cuota base según el tipo de póliza
  if (tipoPoliza === "A") {
    cuotaBase = 1200; // Póliza de cobertura amplia
  } else if (tipoPoliza === "B") {
    cuotaBase = 950;  // Póliza de daños a terceros
  } else {
    console.log("Tipo de póliza inválido"); // Mensaje de error si el tipo no es A ni B
    return;
  }

  // Inicializar los cargos adicionales
  let cargos = 0;

  // Si la persona bebe alcohol, se suma un 10% al costo base
  if (bebeAlcohol) {
    cargos += cuotaBase * 0.10;
  }

  // Si usa lentes, se suma un 5% al costo base
  if (usaLentes) {
    cargos += cuotaBase * 0.05;
  }

  // Si tiene alguna enfermedad, se suma un 5% al costo base
  if (tieneEnfermedad) {
    cargos += cuotaBase * 0.05;
  }

  // Dependiendo de la edad, se suma 20% si tiene más de 40 años, o 10% si tiene 40 o menos
  if (edad > 40) {
    cargos += cuotaBase * 0.20;
  } else {
    cargos += cuotaBase * 0.10;
  }

  // Calcular el total sumando la cuota base y los cargos
  const total = cuotaBase + cargos;

  // Mostrar el resultado en consola con dos decimales
  console.log("El costo total de la póliza es: $" + total.toFixed(2));

  // Retornar el total calculado
  return total;
}


// Parámetros: tipo de póliza, bebe alcohol, usa lentes, tiene enfermedad, edad
calcularPoliza("A", true, false, true, 45);
