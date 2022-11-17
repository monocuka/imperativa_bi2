const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

const edadesMenores =(arr)=>{
    let menores = []
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < 18){
            menores.push(arr[i])
        }
    }
    return menores
}

let menores18 = edadesMenores(edades)
console.log(menores18);

const edadesMayores = (arr) =>{
    let mayores = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>= 18){
            mayores.push(arr[i])
        }
    }
    return mayores
}
let mayores18 = edadesMayores(edades)
console.log(mayores18);

const diesiocho = (arr1)=>{
    let iguales = []
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i]=== 18){
            iguales.push(arr1[i])
        }
    }
    console.log("longitud array " + arr1.length);
    return iguales
}
let resulIguales = diesiocho(edades)
console.log(resulIguales);

//::::::::::::::::::::::::::::
//este es el metodo largo para saber coo sacar el numero menor de un array por medio de comparacion con el anterior. 
const numeroMenor = (arr) => {
     let menor = arr[0]
     for(let i = 0; i < arr.length; i++){
        //console.log(`estoy comparando si ${arr[i]} es menor a ${menor}`);
        if (arr[i] < menor) {
            menor = arr[i];
        //console.log(`el nuevo menor es ${menor}`);
        }
     }
     return menor
}
let numMenor = numeroMenor(edades)
console.log(`el numero menore es ${numMenor}`);
//____________________
//esta es la version simple usando el metodo math.min  con los 3 ùntos antes del arr para desestructurar el array 
const numeroMenorv2 = (arr) => Math.min(...arr);

    console.log(numeroMenorv2(edades));

const numMayor = (arr) => Math.max(...arr)

    console.log(numMayor(edades));

//version larga de buscar el mayor 

const numeroMayor = (arr) => {
    mayor = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > mayor){
            mayor = arr[i]
        }
    }
    return mayor
}
let numeMay = numeroMayor(edades)
console.log(`es el numero mayor ${numeMay}`);

//promedio 

const promedioNum = (arr) => {
    let sumatoria = 0

    for(let i = 0 ; i < arr.length; i ++){
        sumatoria += arr[i]
    }

    let promedio = sumatoria / arr.length
    return promedio
}
let resultado = promedioNum(edades)
console.log(resultado);

// incrementa 1 en todas las edades 

const sumameUno = (arr) => {
    for(let i = 0 ; i < arr.length; i++){
        arr[i] += 1
    }
    return arr
}
// forma corta de sumar uno a cada numero del array es con map es mapeo de todo el array (similar a ciclo for) recorre los elementos 
const sumameUnov2 = (arr) => arr.map(el => el += 1);
let resultado1 = sumameUno(edades)
console.log(resultado1);

console.log(sumameUnov2(edades));