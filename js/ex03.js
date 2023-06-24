// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del array. 
// Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su lugar el elemento "ArraysDifíciles". 
// Haz una copia del array que solo incluya los últimos dos elementos. Obtén el índice del elemento "Funciones".

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let valor_elim_i = javascript1.shift();
let valor_nuevo_i = javascript1.unshift("Objetos");
let valor_elim_f = javascript1.pop();
let valor_nuevo_f = javascript1.push("ArraysDifíciles");

console.log(javascript1);

let copia = javascript1.splice(2);

console.log(copia);
