/* 
Se desea saber cuántos pinos y cuantos cedros se pueden sembrar en un terreno que mide n cantidad de metros. El dueño ha establecido 
que sembrará el 35% del terreno en pinos y el 65% en cedros. Las normas de agricultura establecen que en 10 metros cuadrados se pueden 
sembrar 4 pinos y en 15 metros cuadrados 5 cedros.
*/

let cantidad_metros = 1000; 

let cantidad_pinos = (((35 / 100) * cantidad_metros) / 10) * 4

let cantidad_cedros = (((65 / 100) * cantidad_metros) / 15) * 5

console.log(cantidad_pinos)
console.log(cantidad_cedros.toPrecision(3))