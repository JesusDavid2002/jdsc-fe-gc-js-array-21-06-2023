// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3] 
// y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

let arrayUno = [1, 2, 3];
let arrayDos = [4, 5, 6];

const MezclarArrays = (newArrayUno, newArrayDos) =>{
    console.log(arrayMix = newArrayUno.concat(newArrayDos));
    newArrayUno.splice(0, arrayUno.length);
    newArrayDos.splice(0, arrayDos.length);
    console.log(newArrayUno); 
    console.log(newArrayDos);
}

MezclarArrays(arrayUno, arrayDos);