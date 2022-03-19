let numeros = [];
let animales = ['delfin','hamster','tucan','burro','ballena','lobo','gato','tortuga','lagarto','iguana','caballo','loro'];
let algunosAnimales = animales.splice(1,2);
let nuevosAnimales = animales.splice(2,0,'coballo','perro','conejo');
let menosAnimales = animales.splice(3);
// seleccionamos un array y le agregamos n elmentos de forma decreciente
function agregar(arr,n){
    for(i=n;i>0;i--){
        arr.push(i);
    }
    return arr;
}
// nos dice que elemenot se encuentra en el indice i ingresado del array ingresado
function indice(arr,i){
    console.log(arr[i]);
}

// tenemos 7s para ingresar elementos en el arrai y luego setTimeout nos dira el elemento con el indice 5
// setTimeout(()=>{
//     console.log(numeros[5]);
// },7000);

// nos dice las cantidas de letras que tiene la palabra hubicada en dicho indice
function letras(arr,i){
    console.log(`La palabra ${arr[i]}, tiene ${arr[i].length} letras`);
}

// elimina el primer elemento de array si es true y el ultimo si es false
function eliminarElementos(arr,boolean){
    if(boolean === true){
        arr.shift()
    }
    else{
        arr.pop()
    }
    console.log(arr);
    return 
}

// agrega elementos al principio si es true o al final si es false
function agregarElemento(arr,arr2,i,boolean){
    if(boolean === true){
        arr.push(arr2[i]);
    }
    else{
        arr.unshift(arr2[i]);
    }
    console.log(arr);
}

// busca la primera coincidenci y devuelve el indice si es true o la ultima si es false
function encontrar(arr,i,boolean){
    let indice;
    if(boolean === true){
        indice = arr.indexOf(i)
    }
    else{
        indice = arr.lastIndexOf(i)
    }
    console.log(indice);
}
