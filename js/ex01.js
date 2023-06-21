// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por consola la longitud del array. 
// Crea otra función que obtenga un elemento aleatorio del array y lo saque por consola.

let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const Longitud = (dato) => {
    console.log(dato.length);
}

const Random = (dato) => {
    console.log(dato[Math.floor(Math.random()*array.length)]);    
}

Longitud(array);
Random(array);