"use strict"
/* Javascriot de forma estricta */

/* Tipos de variantes */
let a = 20;  /* Local */
const b = 0; /* Constante y local*/

var c; /* GLobal */


const PI = 3.1416;

/* 
Scope - contexto
espacio en el que vive la variable */

if(true){
    let d = 15;
}

/* var d = "hola;" */
/* d = "hola"; */




/* console.log(d); */


/* Tipos de datos */

/* String */
let cadena = "Hola Mundo!";
let cadena2 = "Hola Mundo!";


/* Number */
let numero = 5;
let numero1 = 5.89;
let numero3 = -5.89;

/* Boolean */
let booleano= true;
let booleano2= false;

/* undefined = indefinido */
let variable;
/* console.log(variable); */



/* null */
let vacio = null;
/* console.log(vacio); */


/* NaN - Not a Number */
/* no es un numero tratar de realizar alguna operacion atirmetica con algun dato que no es un numero */

/* Plantaillas 
literales template strings 
literal strings */

/* console.log(`Esta es una cadena ${5 + 4}`);
console.log("Esta es una cadena ${5 + 4}");
 */

let nombre = "Raul";

/* let presentacion = `` */
/* console.log("Mi nombre es" + nombre);
console.log(`Yo me llamo ${nombre}`);


console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

/* Arreglos - matrices - arrays */
let arr = [1, "A", null, undefined, [true, false]]

/* notacion de corchetes */
/* console.log(arr[4][0]); */

/* if (arr[4][0] === true){
    console.log("es verdad");
} */

let arr2 = new Array("B", 2);
/* console.log(arr2); */

/* Objetos */
/* Clave / valor */

const persona = { 
    nombre: "Raul", 
    edad: 31,
    hobbies: [
        "Leer", 
        "Ver Shrek 1 y 2",
        "Comer",
    ],
    auto: {
        marca: "VW",
        modelo: "Pointer",
        year: 2000,
    },
    saludar: function (){
        return "Saludar";
    }
};

persona.nombre = "Panchito";

/* Notacion de punto */
console.log(`Mi nombre es ${persona.nombre}`);


console.log(`Mi hobbie favorito es ${persona.hobbies[1]}`);


console.log(`La marca de mi carro es ${persona.auto.marca}`);

console.log(`La accion que realizo es: ${persona.saludar()}`);

/* Arreglo de objetos */
/* [{}{}{}] */

