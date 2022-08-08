/* Casa de Escorpio */

alert('Bienvenido a la 🦂CASA DE ESCORPIO🦂 donde tendras que encontrar el "Número Mágico" para pasar... \n\nPara salir del juego ingresa el número "0"');

let max = 100;
let min = 1;

let secretNum = Math.random() * (max-min) + min;
secretNum = parseInt(secretNum);

console.log(secretNum);

let message = "Adivina el número mágico..."

while (true) {

    let userNum = prompt(message,"0");
    userNum = parseInt(userNum);

    if (userNum === secretNum) {
        alert("🎉Felicidades, adivinaste el número mágico.🎉");
        break;

    }else if (userNum === 0) {
        break;
        
    } else if (userNum > secretNum) {
        message = "El número " + userNum + " es mayor al número mágico...";
    } else if (userNum < secretNum) {
        message = "El número " + userNum + " es menor al número mágico...";
    }
}