function miFuncion(a,b){
    return(a + b);
}

/* Creamos una variable para guardar ahí mi resultado */
/* Esta función me solicita los valores que requiere esa funcion */
let resultado = miFuncion (3,6);

/* Procedo a llamar a mi funcion */
/* Aquí voy a utilizar mi variable que cree para llamar a la función */
console.log("El resultado es: " + resultado);

/* Función Expresión o Anónima */
/* Esta función no tienen nombre a diferencia de una función normal*/
/* Especificamos los parámetros y abrimos llaves de bloque en donde definimos la acción de esa expresión */
/* Ya automáticamente esta función está asignada a una variable */

let suma = function (a,b) {return (a + b)};
let res = suma(3,5);
console.log("El resultado de la suma es: " + res);

let resta = function (a,b) {return (a - b)};
let resResta = resta(10,3);
console.log("El resultado de la resta es: " + resResta);

let multi = function (a,b) {return (a * b)}; 
let resMulti = multi(2,7);
console.log("El resultado de la multiplicación es: " + resMulti);

let cociente = function (a,b) {return (a / b)};
let resCociente = cociente(10,5);
console.log("El resultado de la división es: " + resCociente);

/* Funciones Self Invoking */
/* Esta función no se puede reutilizar */
/* No ocupa mucha memoria */


(function(a,b){
    console.log("El resultado es: " + (a + b));
} 
) (3,4);


