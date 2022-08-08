let payasosTotales = parseInt(prompt("¿Cual es el número de payasos vendidos?"));
let muñecasTotales = parseInt(prompt("¿Cual es el número de muñecas vendidos?"));


let pesoTotal = (payasosTotales* 112) + (muñecasTotales* 75);

alert(`El peso total del producto payaso es: ${payasosTotales*112} gramos`);
alert(`El peso total de muñecas es: ${payasosTotales*75} gramos`);

alert(`El total de paquetes que se enviaran son de: ${(pesoTotal/1000).toFixed(0)} paquetes`);
//Math.round((pesoTotal/1000))