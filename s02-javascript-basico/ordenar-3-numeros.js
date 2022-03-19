// Ordenar 3 números de mayor a menor o viceversa
let num1 = 3;
let num2 = 2;
let num3 = 1;

if(num1 > num2 && num1 > num3){
    if(num2 > num3){
        console.log(`El orden de los números es ${num1} ${num2} y ${num3}`);
    }
    else{
        console.log(`El orden de los números es ${num1} ${num3} y ${num2}`);
    }
}
else if(num2 > num1 && num2 > num3){
    if(num1 > num3){
        console.log(`El ordende los números es ${num2} ${num1} y ${num3}`);
    }
    else{
        console.log(`El orden de los números es ${num2} ${num3} y ${num1}`);
    }
}
else{
    if(num1 > num2){
        console.log(`El orden de los números es ${num3} ${num1} y ${num2}`);
    }
    else{
        console.log(`El orden de los números es ${num3} ${num2} y ${num1}`);
    }
}

// TRA

const numeros = document.getElementById('numeros');
const resultado = document.getElementById('resultado');

let a = prompt('Introdusca el primer número');
let b = prompt('Introdusca el segundo número');
let c = prompt('Introdusca el tercer número');

numeros.textContent = `Los números introducidos son ${a}, ${b}, ${c}`

if(a > b && a > c){
    if(b > c){
        resultado.textContent = `El ordende los números es ${a} ${b} y ${c}`
    }
    else{
        resultado.textContent = `El ordende los números es ${a} ${c} y ${b}`
    }
}
else if(b > a && b > c){
    if(a > c){
        resultado.textContent = `El ordende los números es ${b} ${a} y ${c}`
    }
    else{
        resultado.textContent = `El ordende los números es ${b} ${c} y ${a}`
    }
}
else{
    
    if(a > b){
        resultado.textContent = `El ordende los números es ${c} ${a} y ${b}`
    }
    else{
        resultado.textContent = `El ordendelos números es ${c} ${b} y ${a}`
    }

}