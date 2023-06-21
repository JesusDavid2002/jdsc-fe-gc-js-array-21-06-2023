// 6. Crea un array con al menos 10 números y una función que los divida en otros dos arrays: uno para pares y otro para impares. 
// A continuación, saca por consola ambos arrays resultantes concatenados.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayPar=[];
let arrayImpar=[];

const Separacion = (numero) => {
    for (let i = 0; i < numero.length; i++) {
        if(numero[i] % 2 == 0){
            array = arrayPar.push(numero[i]);
        } else{
            array = arrayImpar.push(numero[i]);
        }   
    }
    console.log(arrayPar);
    console.log(arrayImpar);
}

Separacion(numeros);