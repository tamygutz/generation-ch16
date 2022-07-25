/*let nombre = prompt("¿Cuál es tu nombre?:"); 

let sueldoDiario = 600;
let suedoSemanal = 5;
let sueldoMensual =  4;
let sueldoSem = sueldoDiario * sueldoSem

``````
console.log("Tu sueldo semanas es de: " + );*/ 

let nombre = prompt("Escribe tu nombre")
console.log(nombre);

const sueldo = 600;
const diasSemana = 6;
const semanasMes = 4;

console.log("Sueldo semanal: " + (sueldo * diasSemana));
console.log("Sueldo semanal: " + (sueldo * diasSemana * semanasMes));

// calculadora de porcentajes 
// 0.6 = 60% 

function calculadoraPorcentaje (numero, porcentaje){
    let resultado = numero * porcentaje;  //variable local
    return resultado; 

}

let resultadoFuncion = calculadoraPorcentaje (100,0.40); 
console.log(resultadoFuncion);

