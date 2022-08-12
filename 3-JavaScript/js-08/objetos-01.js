let x = 10; 
console.log(x.lenght);

/* let persona = {
    nombre: 'Tamara',
    apellido: 'Flores',
    edad: 25,
    correo: "correo@gmail.com"
} */


let personas = new Object ();
personas.nombre = 'Tamara'; 
personas.edad = 25; 
personas.correo = "correo@gmail.com";

console.log(personas);
console.log(personas.nombre);
console.log(personas.edad);
console.log(personas.correo);

let persona = {
    nombre: 'Sarai',
    apellido: 'Flores',
    edad: 25,
    correo: "correo@gmail.com",
    nombreCompleto: function (){
        return this.nombre + ' ' + this.apellido;
    }
}

//La palabra reservada this es como la conciencia 
console.log(persona.nombre);
console.log(persona.nombreCompleto());
