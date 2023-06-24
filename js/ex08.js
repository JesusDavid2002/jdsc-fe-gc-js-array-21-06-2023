// 8. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y javascript2 =["Objetos", "Arrays", "ParseInt"], 
// crea una función que determine si se repite algún elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["Objetos", "Arrays", "ParseInt"];
let repetidos = [];

const Comprobador = (newArrayA, newArrayB) => {
    for (let i = 0; i < newArrayA.length; i++) {
        for (let j = 0; j < newArrayB.length; j++) {
            if(newArrayA[i] === newArrayB[j]){
                array = repetidos.push(newArrayA[i]);  
            }
        }   
    }
    console.log(repetidos);
}

Comprobador(javascript1, javascript2);