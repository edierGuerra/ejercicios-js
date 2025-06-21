/* 1.Realice un algoritmo para determinar el sueldo semanal de un trabajador 
con base en las horas trabajadas y el pago por hora, considerando que después 
de las 40 horas cada hora se considera como excedente y se paga el doble. */

/*Se define la cantidad de horas trabajadas por el empleado  */
let horas_trabajadas = 80;

/* Se define el pago por cada hora trabajada*/
let pago_por_hora = 50000;

/* Inicializamos la variable donde se almacenará el total del pago semanal*/
let pago_total = 0;

/*  Verificamos si el empleado trabajó más de 40 horas*/
if (horas_trabajadas > 40) {
/* Si trabajó más de 40, se calculan 40 horas normales*/    
let horas_normales = 40;


/*  Se calculan las horas excedentes (las que se pagan doble)*/    
let horas_excedentes = horas_trabajadas - 40;

/* Se calcula el pago total:
- las 40 horas normales se pagan al valor normal
- las horas excedentes se pagan al doble del valor por hora */
pago_total = (horas_normales * pago_por_hora) + (horas_excedentes * pago_por_hora * 2);

/*     Se muestra el pago total en consola*/    
console.log("El pago semanal es igual a:", pago_total);
}
/* Si no trabajó más de 40 horas (trabajó 40 o menos)*/
else if (horas_trabajadas <= 40) {
/* Se calcula el pago normal multiplicando las horas por el valor por hora*/    
pago_total = horas_trabajadas * pago_por_hora;

/* Se muestra el pago total en consola*/    
console.log("El pago semanal es igual a:", pago_total);
}


