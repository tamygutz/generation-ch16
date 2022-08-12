/* URL a consumir */
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/161"



/* Elementos del DOM */
const imgPokemon = document.getElementById("img-pokemon")

const idPokemon = document.getElementById("id-pokemon")

const nombrePokemon = document.getElementById("nombre-pokemon")

const listaHabilidades = document.getElementById("lista-habilidades")
console.log(listaHabilidades);

const listaTipos = document.getElementById("lista-tipos")


/* Funciones */

async function obtenerPokemon(url) {

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);

    const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        id: datos.id,
        tipo: datos.types,
        imagen: datos.sprites.other["official-artwork"].front_default,

    }

    //Imagen nombre y ID
    console.log(pokemon.imagen);
    imgPokemon.src = pokemon.imagen;
    idPokemon.textContent = `ID: ${pokemon.id}`;
    nombrePokemon.textContent = pokemon.nombre;

    //Habilidades del pokemon
    //La variable template es para que agregemos más elemetos sin tener que modificar tanto. 

    /* console.log(pokemon.habilidades.length); */

    let template = ``


    for (let i = 0; i < pokemon.habilidades.length; i++) {
       const nombreHabilidad = pokemon.habilidades[1].ability.name
       console.log(nombreHabilidad);
       
       //Con las comillas chuequitas podemos interpolar y ponerle habilidad 
       template = `<li class="list-group-item"> ${nombreHabilidad} </li>`
        
    }

    listaHabilidades.innerHTML += template;

    //Tipos 
    console.log(pokemon.tipo);

    let templateTipos = ``

    pokemon.tipo.forEach((tipo) => {
        
        const nombreTipo = tipo.type.name;
        console.log(nombreTipo);
        

        templateTipos += `<li class="list-group-item"> ${templateTipos}</li>`
    });

    listaTipos.innerHTML += templateTipos; 



}

obtenerPokemon(urlPokemon)