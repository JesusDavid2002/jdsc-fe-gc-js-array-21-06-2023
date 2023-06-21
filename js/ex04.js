// 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

let palabra = "Hola"

console.log(palabra);

const Convertidor = (array) => {
    separarPalabra = array.split('');
    console.log(separarPalabra)

    invertirPalabra = separarPalabra.reverse();
    console.log(invertirPalabra)
    
    juntarPalabra = invertirPalabra.join("");
    console.log(juntarPalabra)
}

Convertidor(palabra);