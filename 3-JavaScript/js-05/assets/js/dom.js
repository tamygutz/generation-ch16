//console.log(document.URL);

//getElementById()


console.log(document.getElementById("parrafo1"));

const parrafo1 = document.getElementById('parrafo1');

console.log(parrafo1.textContent);

parrafo1.style.color = 'red';
parrafo1.style.backgroundColor = 'green';

//querySelector()
//etiqueta = p 
//clase = .parrafo 
//id = #parrafo1

const parrafo2 = document.querySelector('.parrafo');
console.log(parrafo2.textContent);

parrafo2.textContent += "\n Modificando el contenido desde JavaScript";

//querySelectorALL() // Lista de nodos

const parrafos = document.querySelectorAll('p');
console.log(parrafos[2]);

parrafos[2].style.backgroundColor = 'yellow'; 

//Modificar los atributos de html 
const enlace = document.getElementById('enlace'); 
console.log(enlace.href);

enlace.href = 'https://www.youtube.com/';
enlace.target = '_blank';
enlace.textContent = 'Enlace de YouTube';

/*Reemplazar contenido */

const parrafo4 = document.getElementById('parrafo4') ;
console.log(parrafo4.nodeName);
console.log(parrafo4.textContent);
console.log(parrafo4.innerHTML); //muestra el HTML que hay dentro de el elemento
console.log(document.body.innerHTML);
console.log(parrafo4.outerHTML); //muestra el contenido html, incluyendo al elemento

//parrafo4.innerHTML = '<a href="http://google.com">Enlace</a>'; //Nos permite insertar y reemplazar el contenido
//parrafo4.outerHTML = '<a href="http://google.com">Enlace</a>'; //Reemplazar el elemento completo

//parrafo4.innerHTML = '<div class = "elemento">Este es un div</div>'


//Js nos permite modificar las clases con CSS
//utilizando style 
//usando classlist 

const cambiarColor = () => {
    parrafo4.classList.toggle('elemento');
}

cambiarColor(); //Se agrega la clase 
cambiarColor(); //Se quita la clase 