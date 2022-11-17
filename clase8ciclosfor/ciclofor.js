const numDiez = (numero) => {
    for(let i = 0; i <= 10; i++){
      numero =  numero + 1
    console.log(numero)
    }
    
}
//numDiez(5)

//


const sumatoria = () => {
    let suma = 0
    for (let i = 1; i <= 100; i++){
        suma = suma + i
        
    }
    console.log(suma);
    
}
sumatoria()


//suma con while 
/*let numero=1;
let suma=0

while(numero<=100){ 
      suma+=numero;
      numero++;
}
console.log(suma);*/

const numeroEntero = (x) => {
    let multiplicar = 1
    for (let i = 1; i <= x; i++) {
        multiplicar *= i 
    }
    console.log(multiplicar);
}

numeroEntero(5)