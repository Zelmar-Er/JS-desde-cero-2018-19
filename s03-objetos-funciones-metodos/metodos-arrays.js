let word = 'Hola Mundo';
const letters = ['c','b','a','z'];
const numbers = [2,8,4,20,80,40];
let animals = ['loro','papagayo','tigre','perro','gato','hipopotamo'];

function metodoFrom(x){
    console.log(Array.from(x));
}

function metodoSort(x){
    if(typeof x[0] == 'number'){
       return console.log(x.sort((a,b)=>a-b))
    }
    console.log(x.sort())
}
/* Funcionamiento de la callbak utilizada en .sort()
menorMayor(a,b){
    if(a-b < 0) return -1;
    if(a-b > 0) return 1;
    if(a == b) return 0;

    mayorMenor(a,b){
    if(b-a < 0) return -1;
    if(b-a > 0) return 1;
    if(b == a) return 0;
} */

function metodoForEach(x){
    x.forEach((e,i)=>console.log(`El elemenot ${e} esta en la posición ${i} de la colección`))
}

function metodoMap(x){
    if(typeof x[0] != 'number'){
        x = parseInt(prompt('El parametro deve ser un número una colección de números'))
        return x * 2;
    }
    x.map(n=> console.log(n * 2));
}