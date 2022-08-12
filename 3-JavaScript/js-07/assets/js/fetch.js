const url = "https://dog.ceo/api/breeds/image/random"
fetch(url).then((respuesta) => {
    console.log(respuesta);
})

//Obtener la información de la petición
//Forma #1  
fetch(url).then((respuesta) => respuesta.json()).then((datos) => {
    console.log(datos);
})

//Forma #2 
function obtenerPerritoAleatorio() {
    const respuesta = await fetch(url);
    const datos = await respuesta.json()

    console.log(datos);

}

obtenerPerritoAleatorio()