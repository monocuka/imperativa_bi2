function loopDePares(n1){
    for(let i = 0; i <=100; i++){
         if (n1 + i % 2 === 0) {
            console.log(`El numero ${n1 + i} es par `);
        }else{
            console.log(n1 + i);
        }
        //console.log(i);
    }
}
loopDePares(0)
// en esta se muestra los numeros pares como numero y los Impar como coco.
function loopDeImpares(n1, palabra){
for(let i = 0; i <=100; i++){
     if (n1 + i % 2 !== 0) {
        console.log(palabra);
    }else{
        console.log(n1 + i);
    }
    //console.log(i);
}
}
loopDeImpares(0, 'coco')
//____________________________
// esta funcion nos suma los numeros desde el 1 hasta el numero que demos por parametro ejem
 // damos 8 nos suma desde 1 hasta el 8 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36

function sumatoria(numero) {
    let sumo = 0 
    for (let i = 1; i <= numero; i++) {
        sumo += i
    }
    return sumo
}
let resultado = sumatoria(8)
console.log(resultado);

//---------------------------------------------
//en esta funcion le pedimos que con base a un numer que inicia
//en 1 nos cree (push) un array desde el 1 hasta el numero que le pasamos en este caso 
// el numero 8 como ejemplo. 
function nuevoArreglo(num){
    let arr = []
    for(let i = 1; i <= num; i++){
        arr.push(i)
    }
    console.log(arr);
}
nuevoArreglo(8)
