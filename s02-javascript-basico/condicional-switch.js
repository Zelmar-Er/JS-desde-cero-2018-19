let num = Math.floor(Math.random()*10);
console.log(num);
switch(num){
    case 0: console.log('num tiene el valor de 0');
    break;
    case 1: console.log('num tiene el valor de 1');
    break;
    case 2: console.log('num tiene el valor de 2');
    break;
    case 3: console.log('num tiene el valor de 3');
    break;
    case 4: console.log('num tiene el valor de 4');
    break;
    case 5: console.log('num tiene el valor de 5');
    break;
    case 6: console.log('num tiene el valor de 6');
    break;
    case 7: console.log('num tiene el valor de 7');
    break;
    case 8: console.log('num tiene el valor de 8');
    break;
    case 9: console.log('num tiene el valor de 9');
    break;
}

switch(num){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
        console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
    case 6:
    case 8:
        console.log(`${num} es par`);
    break;
    default:
        console.log(`${num} es neutro`);
}
// Sintaxis múltiple encadenada