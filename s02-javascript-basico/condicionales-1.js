// condición simple
let num = 0;
let num2 = 5;
if(num>0)console.log(`${num} es mayor que 0`);
// condicional compuesta
if(num<0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} no es menor que 0`)
}
// condicional multiple
if(num<0){
    console.log(`${num} es menor que 0`);
}else if(num>0){
    console.log(`${num} es mayor que 0`);
}else{
    console.log(`${num} es ${num}`);
}
// Operadores logicos & = and, || = or
if(num>0 & num2>0){
    console.log(`${num} y ${num2} son mayores que 0`);
    // no muestra resultado porque una de las condiciones no se cumple.
}

// Ejemplos
let nam1 = 5;
let nam2 = 0;

if(nam1>0){
    if(nam2>0){
        console.log(`${nam1} y ${nam2} son mayores que 0`)
    }
    else if(nam2<0){
        console.log(`${nam1} es mayor a 0 y ${nam2} es menor a 0`)
    }
    else{
        console.log(`${nam1} es mayor a 0 y ${nam2} es igual a 0`)
    }
}
else if(nam1<0){
    if(nam2>0){
        console.log(`${nam1} es menor que 0 y ${nam2} es mayor a 0`)
    }
    else if(nam2<0){
        console.log(`${nam1} y ${nam2} son menores que 0`)
    }
    else{
        console.log(`${nam1} es menor a 0 y ${nam2} es igual a 0`)
    }
}
else{
    if(nam2>0){
        console.log(`${nam1} es igual a 0 y ${nam2} es mayor a 0`)
    }
    else if(nam2<0){
        console.log(`${nam1} es igual a 0 y ${nam2} es menor que 0`)
    }
    else{
        console.log(`${nam1} y ${nam2} son iguales a 0`)
    }
}