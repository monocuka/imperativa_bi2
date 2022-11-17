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