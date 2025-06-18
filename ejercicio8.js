// Función para determinar a qué destino puede viajar una persona
function calcularDestinoVacaciones(presupuesto, costoPorKm) {
// Distancias (solo ida) a los destinos ofrecidos por la empresa
  const distancias = {
    "Cancún": 1800,
    "Acapulco": 1200,
    "Puerto Vallarta": 800,
    "México": 750
  };

// Objeto donde se guardarán los costos totales de ida y vuelta por destino
  const costosTotales = {};

// Recorremos cada destino para calcular su costo total (ida y vuelta)
  for (let destino in distancias) {
    costosTotales[destino] = distancias[destino] * 2 * costoPorKm;
// Multiplicamos por 2 porque es ida y vuelta, y luego por el costo por kilómetro
}

// Verificamos si el presupuesto alcanza para ir a alguno de los destinos
// Comenzamos por el más lejano (más costoso) y vamos descendiendo

  if (presupuesto >= costosTotales["Cancún"]) {
    console.log("Puede ir a Cancún");
    return "Cancún";
  } else if (presupuesto >= costosTotales["Acapulco"]) {
    console.log("Puede ir a Acapulco");
    return "Acapulco";
  } else if (presupuesto >= costosTotales["Puerto Vallarta"]) {
    console.log("Puede ir a Puerto Vallarta");
    return "Puerto Vallarta";
  } else if (presupuesto >= costosTotales["México"]) {
    console.log("Puede ir a México");
    return "México";
  } else {
// Si no alcanza para ninguno de los destinos, debe quedarse en casa
    console.log("Debe quedarse en casa");
    return "Casa";
  }
}

// Ejemplo de uso:
// presupuesto = 5000 pesos, costo por kilómetro = 2 pesos
calcularDestinoVacaciones(5000, 2);
