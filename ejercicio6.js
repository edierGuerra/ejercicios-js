function calcularBono(sueldo, antiguedad) {
  let bonoAntiguedad = 0; // Inicializa el bono por antigüedad
  let bonoSueldo = 0;     // Inicializa el bono por sueldo

  // --- Calcular bono por antigüedad ---
  if (antiguedad > 2 && antiguedad < 5) {
    // Si la antigüedad es mayor a 2 años pero menor a 5, se otorga el 20% del sueldo
    bonoAntiguedad = sueldo * 0.20;
  } else if (antiguedad >= 5) {
    // Si la antigüedad es de 5 años o más, se otorga el 30% del sueldo
    bonoAntiguedad = sueldo * 0.30;
  }

  // --- Calcular bono por sueldo ---
  if (sueldo < 1000) {
    // Si el sueldo es menor a $1000, se otorga el 25% del sueldo
    bonoSueldo = sueldo * 0.25;
  } else if (sueldo <= 3500) {
    // Si el sueldo está entre $1000 y $3500 (inclusive), se otorga el 15%
    bonoSueldo = sueldo * 0.15;
  } else {
    // Si el sueldo es mayor a $3500, se otorga el 10%
    bonoSueldo = sueldo * 0.10;
  }

  // --- Asignar el mayor bono ---
  const bonoAsignado = Math.max(bonoAntiguedad, bonoSueldo);
  // Se compara cuál de los dos bonos es mayor y se asigna ese

  // Mostrar en consola el bono final, redondeado a 2 decimales
  console.log("El bono asignado es: $" + bonoAsignado.toFixed(2));

  return bonoAsignado; // Devuelve el bono calculado
}

// --- Ejemplo de uso ---
calcularBono(1200, 3);
// Esto calcula el bono para una persona con sueldo $1200 y antigüedad de 3 años
