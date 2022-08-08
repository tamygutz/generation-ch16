/* Casa de Tauro */

let carreritas =["Lucía", "Roberto", "Maria", "Jesus", "Andrea", "Jose"]
console.log(carreritas);

carreritas.unshift ("federico");
console.log(carreritas);


carreritas.pop ("Jose")
console.log(carreritas);

carreritas.splice (3,4,"Maria")
carreritas.splice (5,2, "Andrea")
carreritas.splice (5,5, "jesus")
console.log(carreritas);

carreritas.splice (2,0, "cristobal", "fernanda", "armando")
console.log(carreritas);

console.log("Al final de la carrera las posiciones de primero al ultimo fueron" +  carreritas);