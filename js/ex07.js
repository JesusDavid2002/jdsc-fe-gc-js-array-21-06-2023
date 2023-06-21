// 7. Utilizando el array del ejercicio anterior, crea una función que saque por consola únicamente los números mayores que 5.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayMayor=[];

const Separacion = (numero) => {
    for (let i = 0; i < numero.length; i++) {
        if(numero[i] > 5){
            array = arrayMayor.push(numero[i]);
        }   
    }
    console.log(arrayMayor);
}

Separacion(numeros);