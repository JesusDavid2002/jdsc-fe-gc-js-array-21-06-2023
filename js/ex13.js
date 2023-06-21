// 13. Crea un objeto que contenga una receta de cocina, con propiedades asignadas a su nombre,
// tiempo de preparación e ingredientes. Haz una función que saque por consola el nombre, el tiempo y una lista de los ingredientes.

let propiedades = {
    nombre: "",
    tiempoPreparación: "",
    ingredientes: ""
};

let recetaCocina = Object.assign({}, propiedades);
recetaCocina.nombre = "Tarta de queso";
recetaCocina.tiempoPreparación = "45 minutos";
recetaCocina.ingredientes = "Queso, nata, huevos, masa de tartas";

const Preparacion = (receta) => {
    Object.entries(receta).forEach(([clave, valor]) => {
        console.log(`${clave}: ${valor}`);
    })
};

Preparacion(recetaCocina);