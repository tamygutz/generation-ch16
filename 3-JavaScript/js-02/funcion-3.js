/* Funciones como Objetos */
function miFuncion(a, b) {
    /* Esta seria mi atributo */
    let res = 0; /* Este es el estado desde donde va a partir */
    /* Esta seria mi accion o proceso */
    res = (a * b);
    return (a * b);
}
/* Los parametros son las propiedades que se están implementando a esta función */
/* En esta función tenemos 3 parámetros y una acción */

console.log(typeof miFuncion);
var miFuncion = miFuncion.toString();
console.log(miFuncion);
