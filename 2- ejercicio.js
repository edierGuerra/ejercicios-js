/* 
2.El 14 de febrero una persona desea comprarle un regalo 
al ser querido que más aprecia en ese momento, 
su dilema radica en qué regalo puede hacerle, 
las alternativas que tiene son las siguientes:  */


// Se define el presupuesto disponible para el regalo
let presupuesto = 150000; 

// Se declara la función que elegirá el regalo en función del presupuesto
function elegirRegalo(presupuesto) {

  // Si el presupuesto es igual o menor a 10.000
  if (presupuesto <= 10000) {
    console.log("Puedes regalar una tarjeta.");
  } 
  
  // Si el presupuesto está entre 11.000 y 100.000 (inclusive)
  else if (presupuesto >= 11000 && presupuesto <= 100000) {
    console.log("Puedes regalar chocolates.");
  } 
  
  // Si el presupuesto está entre 101.000 y 250.000 (inclusive)
  else if (presupuesto >= 101000 && presupuesto <= 250000) {
    console.log("Puedes regalar flores.");
  } 
  
  // Si el presupuesto es mayor a 251.000
  else if (presupuesto > 251000) {
    console.log("Puedes regalar un anillo.");
  } 
  
  // Si el presupuesto no entra en ninguno de los rangos anteriores
  else {
    console.log("No hay un regalo disponible para ese presupuesto exacto.");
  }
}

// Se llama a la función con el valor definido previamente
elegirRegalo(presupuesto);
