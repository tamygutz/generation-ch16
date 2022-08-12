/* Tipo cadena */
//Acabo de declarar un objeto 
let cadena = 'Esto es una cadena';

//Puedo definirla como un objeto si le asigno el operador new
let cadena_obj = new String('Esto es otra cadena obj');

//New define un objeto porque llama a la clase a la que le voy a asignar el objeto
console.log(cadena);
console.log(cadena_obj);

/* Tipo numérico */
let numero = 13;
let numero_obj = new Number(13.13);
console.log(numero);
console.log(numero_obj);

let lista = ['2','3', '5', '7'];
let lista_obj = new Array ('1','4', '6', '8', '9');
console.log(lista);
console.log(lista_obj);