//funciones 

function calcularSueldo (){
    let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = 600;
const diasSemana = 6;
const semanasMes = 4;

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));

}

calcularSueldo()