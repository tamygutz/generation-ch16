//Variable que simula los datos pedidos 
const saludo = "Hola Mundo"
const datos = [
    {
        nombre: "Tamy",
        apellido: "Gutz"
    },
    {
        nombre: "Tamy",
        apellido: "Gutz"
    },
    {
        nombre: "Tamy",
        apellido: "Gutz"
    }
]

//Función para simular una petición 
function obtenerDatos() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 2000)
    })


}

obtenerDatos().then((datos) => {
    console.log(datos);
})

//función reject para no obtener datos 
function obtenerDatos() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {
                resolve(datos)
            } else {

                reject("Nunca te quiso")

            }

        }, 2000)
    })


}

// Forma #1 
obtenerDatos().then((datos) => {
    console.log(datos);
}).catch((error) => {
    console.log("Existe un error en la petición 1");
    console.log(error);
})

// Forma #2 - funciones asincronas - await async
async function funcionAsincrona() {

    try {
        const datos = await obtenerDatos()
        console.log(datos);
    } catch (error) {
        console.log(error);

    }
}

funcionAsincrona()