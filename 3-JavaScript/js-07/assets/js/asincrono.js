const num = 10; 

console.log(num);
console.log(2);

// Le voy a decir que espere cierto tiempo y que se espere dos segundo para que lance el mensaje de hola 
setTimeout( () =>{
    console.log("Hola");
}, 2000 )

console.log(3);

setTimeout( () =>{
    console.log("Adiós");
}, 0 )

console.log(4);


console.log(5);