// 12. Crea un array que contenga al menos tres objetos con las mismas propiedades (al menos tres) y distintos valores. 
// Crea una función que saque por consola el valor de una de las propiedades para todos los objetos.

let propiedades = {
    marca: "",
    modelo: "",
    color: "",
    matricula: ""
};

let objeto1 = Object.assign({},propiedades);
objeto1.marca = "Seat";
objeto1.modelo = "Ibiza";
objeto1.color = "Blanco";
objeto1.matricula = "1578 GAD";

let objeto2 = Object.assign({},propiedades);
objeto2.marca = "Audi";
objeto2.modelo = "A4";
objeto2.color = "Negro";
objeto2.matricula = "9750 PAQ";

let objeto3 = Object.assign({},propiedades);
objeto3.marca = "Nissan";
objeto3.modelo = "GT-R 2007";
objeto3.color = "Gris";
objeto3.matricula = "2483 QNS";

let array = [objeto1, objeto2, objeto3];

const Valores = (newArray, newPropiedad) =>{
    for (let i = 0; i < newArray.length; i++) {
        console.log(array[i][newPropiedad]);
    }
}

Valores (array, "marca");
