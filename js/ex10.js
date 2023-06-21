// 10. Crea un objeto que almacene los datos de una persona (nombre, apellidos, edad,
//     dirección, ciudad, país... y lo que quieras). Crea una función que saque por consola el
//     nombre completo (nombre y apellidos) de la persona a modo de string.

let persona = {
    nombre: "Juan",
    apellidos: "Gómez",
    edad: 30,
    telefono: 648754545,
    dirección: "Calle Principal 123",
    ciudad: "Madrid",
    país: "España",
};

const Datos = (datos) => {
    console.log(`${datos.nombre} ${datos.apellidos}`)
};

Datos(persona);