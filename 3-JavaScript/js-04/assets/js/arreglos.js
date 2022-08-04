/* Arreglos es una colección de elementos 
Casa elemento ocupa una posición 
Esa posición se conoce como índice y comienza a partir de 0
*/

/* let arr = []; 
console.log(arr); */

//Propiedades - describen el objeto
//Métodos - acciones que puede realizar el objeto 

let arr1 = [1,2,3,4]; 
console.log(arr1[2]);

// métodos 
const arreglo = ["adiós"]; 


// push() método para agregar un elemento al final de la lista 
arreglo.push(2);
arreglo.push(true); 
console.log(arreglo);

let num = 500; 
arreglo.push(num); 

// shift()  método para agregar elementos al principio del arreglo 

arreglo.unshift("A"); 
arreglo.unshift("B"); 

console.log(arreglo);

//typeof para saber que tipo de dato tenemos.

console.log(typeof (arreglo[3]));

//pop() quita un elemento 

let dato1 = arreglo.pop(); 
console.log(dato1);

console.log(arreglo);

// splice()
//Quita una parte de cualquier posición de nuestro arreglo 

arreglo.splice(1,0, "parangaricutirimicuaro");

/* Splice (
    posición de inicio, 
    cantidad de elementos a afectar, 
    elementos que queremos insertar)
) */

//todos los métodos modifican nuestro arreglo original 

//Métodos que no modifican el arreglo original 
//hacen una copia, modifican esa copia 

//slice()
//Cortar partes de un arreglo
/* slice(
    posición a parte de la cual va a cortar, 
    
    )
*/

//debemos de indicar un rango
//genera una copia del array

let dato3 = arreglo.slice(0,2);

console.log(arreglo);
console.log(dato3);

