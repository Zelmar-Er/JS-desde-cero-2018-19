function ejercicio1(){
    let nombre = prompt('Ingrese su nombre');
    let edad = prompt('Ingrese su edad.');
    let anios = parseInt(edad);
    // En la solución del curso se parsea edad a número en la misma linea
    // let edad = parseInt(prompt('Ingrese su edad'));
    console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendrás ${anios+1} años`);
}

function ejercicio2(){
    let figura = prompt('Ingrese el nombre de la figura a calcular el área. (triángulo, rectángulo o círculo)');
    let base,hipo,altura,radio,a,b,h,r;
    const pi = 3.1415;
    switch(figura){
        case "triangulo" || "triángulo":
            base = prompt('Ingrese la base.');
            hipo = prompt('Ingrese la hipotenusa.');
            b = parseInt(base);
            h = parseInt(hipo);
            console.log(`El area es: ${b*h/2}`);
        break;
        case "rectangulo" || "rectángulo":
            base = prompt('Ingrese la base.');
            altura = prompt('Ingrese la altura.');
            b = parseInt(base);
            a = parseInt(altura);
            console.log(`El area es: ${b*a}`);
        break;
        case "circulo" || "círculo":
            radio = prompt(`Ingrese el radio.`)
            r = parseInt(radio);
            console.log(`El area es: ${pi*(r*r)}`);
        break;
        default:
            console.log(`La figura introducida no corresponde.`)
    }
}
// Solucion del curso
function solucion2(){
    let figure = prompt('Introduce la figura géometrica de la que quieres calcular el área: triangle, rectangle or circle');
    let base;
    let height;
    let radius;

    switch(figure){
        case 'triangle':
            base = prompt('Introdusca la base del triángulo');
            height = prompt('Introdusca la altura del triángulo');
            console.log(`El área del triángulo es ${(base*heigth)/2}`);
        break;
        case 'rectangle':
            base = prompt('Introdusca la base del rectángulo');
            height = prompt('Introdusca la altura del rectángulo');
            console.log(`El área del rectángulo es ${base*heigth}`);
        break;
        case 'circle':
            radius = prompt('Introdusca el radio del círculo');
            console.log(`El área del círculo es ${Math.PI*Math.pow(radius,2)}`);
        break;
        default:
            console.log(`La figura géometrica introducida no es valida.`)
    }
}

function ejercicio3(){
    let num = prompt('Ingrese un número');
    // En la silución de curso num se parsea en la misma linea en la que se declara.
    // let num = parseInt(prompt('Ingrese un número.'));
    let n = parseInt(num);
    for(let i = 0; i <= n; i++){
        if(i%2 === 0){
            console.log(`${i} es par`)
        }
        else{
            console.log(`${i} es inpar`)
        }
    }
}

function ejercicio4(){
    let num = prompt('Ingrese un número entero mayor a 1 y le diremos si es primo.')
    let n = parseInt(num);
    const lista = [];
    for(let i = 1; i <= n; i++){
        if(n%i === 0){
            lista.push(i);
        }
        console.log(lista);
    }
    if(lista.length > 2){
        console.log(`El número ${num} no es primo`);
    }
    else{
        console.log(`El número ${num} es primo`);
    }
}
// Solucion del curso
function solucion4(){
    let num = parseInt(prompt('Introduce un número'))
    let divisores = 0;

    if( num === 1)
        console.log('El número no es válido')
    else{
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                console.log(`${num} / ${i} = ${num / i} No es primo`)
                divisores++
                break
            }
        }
    }

    if(divisores == 0)
        console.log(`${num} es primo`);
}

function ejercicio5(){
    let num = prompt('Ingrese un número mayor a 0');
    let n = parseInt(num);
    let factorial = [];
    let r;
    for(let i = n; i > 0; i--){
        factorial.push(i);
    }
    for(let f of factorial){
        if(f === n){
            r = n;
        }
        else{
            r = r*f;
        }
    }
    console.log(r)
}
// Solucion del curso
function solucion5(){
    let num = parseInt(prompt('Introduce un número'))
    let result = 1

    for(let i = num; i>1; i--){
        result *= i
    }
    console.log(`El factorial de ${num} es ${result}`)
}

function ejercicio6(){
    let total = prompt('Ingrese un número.');
    let t = parseInt(total);
    for(let i = 1;t < 50; i++){
        let n = prompt('Ingrese un número');
        np = parseInt(n);
        t = t + np;
        console.log(`La sume es ${t} y se han introducido ${i+1} números`);
        console.log(typeof(t));
    }
}
// Solucion
function solucion6(){
    let sum = 0
    let cont = 0

    while(sum < 50){
        sum += parseInt(prompt('Introduce un número para añadir a la suma'))
        cont ++
    }

    console.log(`La suma total es de: ${sum}`);
    console.log(`El total de números introducidos es: ${cont}`);
}

function ejercicio7(){
    let numeros = [1,2,3,4,5];
    let pares = [];
    let impares = [];
    for( numero of numeros){
        // En la solucion del curso se utiliza Math.round() para tener un número aleatorio redondo.
        let aleatorio = (Math.floor((Math.random()*10)+1));
        let resultado = numero * aleatorio;
        if(resultado % 2 === 0){
            pares.push(resultado);
        }
        else{
            impares.push(resultado);
        }
        console.log(`${numero} x ${aleatorio} = ${resultado}`);
    }
    console.log(`Pares: ${pares}`);
    console.log(`Impares: ${impares}`);
}

function ejercicio8(){
    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];
    let posicion = prompt('Ingresa tu DNI para saber la letra que te corresponde');
    let p = parseInt(posicion);
    let i = p % 23;
    console.log(i);
    for( letra of letras){
        console.log(letras[i]);
    }
}
// Solucion
function solucion8(){
    const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

    const dni = prompt('Intrdoduce tu DNI')

    if(dni.length == 8 && parseInt(dni) > 0){
        console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`)
    }
}

function ejercicio9(){
    let palabra = prompt('Ingrese una palabra');
    let vocal = [];
    let consonante = [];
    for(l of palabra){
        switch(l){
            case 'a'||'A':
            case 'e'||'E':
            case 'i'||'I':
            case 'o'||'O':
            case 'u'||'U':
                vocal.push(l);
            break;
            default:
                consonante.push(l);
        }
        // console.log(vocal);
        // console.log(consonante);
    }
    console.log(`La palabra ${palabra} contiene ${consonante.length} consonantes, ${vocal.length} vocales y un total de ${palabra.length} letras.`);
}
// Solucion
function solucion9(){
    const palabra = prompt('Introduce una palabra').toLowerCase()

    let consonante = 0
    let vocal = 0

    for(const letra of palabra){
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') vocal++
        else consonante++
    }

    console.log(`Tu palabra tiene ${vocal} vocales, ${consonante} consosnantes y tiene un total de ${palabra.length} letras.`)
}

function ejercicio10(){
    const colores = ["azul","amarillo","rojo","verde","rosa"];
    // En la solucion pasa la variable a minusculas cuando la define
    let color = prompt('Introduzca un color');
    // En la solucion utiliza indexOf para la varificacion
    // if(colors.indexOf(color) !== -1)
    if(colores.includes(color.toLowerCase()) === true){
        console.log(`El color ${color} esta en la coleccion`);
    }
    else{
        console.log(`El color ${color} no esta en la coleccion`);
    }
}