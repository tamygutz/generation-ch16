/* Control de Flujo */
/* Condicionales */
/* If */

let condicion = "C";

if (condicion === "A") {
    /* 
    Codigo que se hace si se cumple la condición A
    */

    console.log("Entro en la condición A");

} else if (condicion === "B") {
    /* 
    Codigo que se hace si se cumple la condición B
    */

    console.log("Entro en la condición B");

} else if (condicion === "C") {
    /* 
    Codigo que se hace si se cumple la condición C
    */

    console.log("Entro en la condición C");

} else {
    /* 
    Codigo que se hace si no se cumple ninguna de las condiciones anteriores 
    */
   console.log("No cumple con ninguna condición");
}

/* Un igual es una asignación =  */

/*  == igual que, devuelve un verdadero cuando se cumple la condición  */

/* === es un estrictamente igual0 */

/* Switch */

let nuevaCondición = 1;
switch(nuevaCondición){

    case "Hola": 
    console.log("Buenos días");
    console.log("Espero que te encuentres bien");
    break;

    case "Adios": 
    console.log("Nos vemos");
    break;

    case "Saludo": 
    console.log("Te mando un saludo");
    break; 

    default: 
    console.log("No entendí tu mensaje");
}


let edad = 30

    switch(edad >= 18){
        case true:
            console.log("mayor");
            break
        case false:
            console.log("menor");
    }


switch(eleig){
    case "sumar":
        console.log("Vamos a sumar");
        break
    case "restar":
        console.log("Vamos a restar");
        break
    case "dividir":
        console.log("Vamos a dividir");
        break
    case "multiplicar":
        console.log("Vamos a multiplicar");
        break
        default: 
        console.log("No entiendo");
}

if(evaluar === "sumar"){
    console.log("Vamos a sumar");
}else if(evaluar === "restar"){
    console.log("Vamos a restar");
}else if(evaluar === " dividir"){
    console.log("Vamos a dividir");
}else if(evaluar === "multiplicar"){
    console.log("Vamos a multiplicar");
}else {
    console.log("No entiendo");
}