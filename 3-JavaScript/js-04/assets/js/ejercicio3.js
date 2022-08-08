//Ciclo 1
/* let xValue = 5;
while(xValue >= 0){
    console.log(xValue);
    xValue=xValue-0.5;
} */

//ciclo dos
/* let numero = 0;
while (numero<100){
    numero+=1
    if( numero%2 != 0) //Si el resto de dividir numero entre 2 es distinto de 0
        console.log(numero);
}
 */
//ciclo 3
/* let n = 5;
for(let i=1; i<=n; i++){
    console.log(`[${i}]`);  
} 
 */
//ciclo 4
/* let top = 5;
let suma = 0;
for(let i=1; i<=top; i++){ 
    suma = suma + i;
}
console.log(suma); */

// definimos la anchura máxima
let max=11;
// variables de interación
let j=1,k=1;
// contiene el resultado a mostrar
let result="";


    for(let i=k;i<=max;i+=2){
        result+="\n"+(Array((1+(Math.ceil(max/2))-j)).join(" ")+Array(i+1).join("*"));
        j=j+1;
    }
    k=5;
    j=3;

//tronco
if(max>=7)
{
    result+="\n"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
    result+="\n"+(Array((1+(Math.ceil(max/2))-2)).join(" ")+Array(4).join("*"));
}
console.log(result);