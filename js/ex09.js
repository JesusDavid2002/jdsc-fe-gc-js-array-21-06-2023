// 9. Imagina que estamos en una carrera y los nombres de las personas que van llegando a la meta se van almacenando en un 
// array (el primero quedaría en la primera posición del array, el segundo en la segunda, etc.). 
// Crea un array con por lo menos cinco nombres. Desestructura el array utilizando el operador rest de manera que puedas llamar al
// ganador, al segundo y al resto de competidores por separado

let competidores = ["Fernando", "Javi", "Xavi", "Roberto", "David"];

let [ganador, segundo, ...resto] = competidores;

console.log(ganador);
console.log(segundo);
console.log(resto);
