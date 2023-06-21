// 11. Utiliza el objeto del ejercicio anterior y mediante desestructuración accede únicamente
// a tres de esas propiedades

let persona = {
    nombre: "Juan",
    apellidos: "Gómez",
    edad: 30,
    telefono: 648754545,
    dirección: "Calle Principal 123",
    ciudad: "Madrid",
    país: "España",
};

let {apellidos, edad, telefono, dirección, ...resto} = persona;

console.log(resto);