// 14. Reutiliza la receta del ejercicio anterior y añádela a un array que contenga varias recetas
// similares, con las mismas propiedades. Utiliza también la función del ejercicio anterior y
// saca por consola todas las recetas de tu array

let propiedades = {
    nombre: "",
    tiempoPreparación: "",
    ingredientes: ""
};

let recetaCocina1 = Object.assign({}, propiedades);
recetaCocina1.nombre = "Tarta de queso";
recetaCocina1.tiempoPreparación = "45 minutos";
recetaCocina1.ingredientes = "Queso, nata, huevos, masa de tartas";

let recetaCocina2 = Object.assign({}, propiedades);
recetaCocina2.nombre = "Tarta de fresas";
recetaCocina2.tiempoPreparación = "40 minutos";
recetaCocina2.ingredientes = "Fresas, nata, huevos, masa de tartas";

let arrayRecetas = [recetaCocina1, recetaCocina2];

const Preparacion = (receta) => {
    for (let i = 0; i < receta.length; i++) {
        console.log(receta[i]);
    }
};

Preparacion(arrayRecetas);