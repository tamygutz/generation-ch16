"use strict";

/* conversion de tipos de datos */
/* casteo parseo */
/* casting parsing */


/* coersion de tipo de datos */
/* conersion automatico de datos */
let num = "Raul";
let num2 = "10";

/* concatenacion */
/* resultado de unir dos cadenas de texto */
/* unimos un numero con una cadena de texto */
console.log(num - num2);


/* Number() */
/* convierte cadenas o booleanos a numeros */

let num3 = "4.02";
console.log(Number(num3));
console.log(num3);

/* String() */
/* convierte numero o boleanos a cadenas */
let num4 = String(0);
console.log(num4);
console.log(typeof (num4));


/* Boolean */
/* convierte numero y cadenas a booleanos */
/* 0 - "" - null - undefined - NaN - false*/
/* faultsy values - valores que tienden a falso */
/* todos los demas numeros los convierte a true */
let num5 = Boolean(NaN);
console.log(num5);
console.log(typeof num5);