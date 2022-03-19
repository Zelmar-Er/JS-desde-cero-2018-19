let cadena = "Hola Mundo";

// Propiedades
// length -> devuelve la longitud de la cadena

console.log(cadena.length);

// Métodos
// Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

// toUpperCase() -> Devuelve la cadena en mayúsculas

console.log(cadena.toUpperCase());

// toLowerCase() -> Devuelve la cadena en minúsculas

console.log(cadena.toLowerCase());

// indexOf(string) -> Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1

console.log(cadena.indexOf('Hola'));

// replace(valor a buscar, valor nuevo) -> Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo

console.log(cadena.replace('Mundo','Putos'));

// substring(incio[,fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)

console.log(cadena.substring(3,7));
// Si no se incluye el fin extrae hasta el final.

console.log(cadena.substring(3));

// slice(inici[,fin]) -> Igual que substrind pero admite valores negativos, si ponemos valores negativos empezará desde atrás

// Si no se incluye el final extrae hasta el final

// (2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera

console.log(cadena.slice(-3));
console.log(cadena.slice(3));
console.log(cadena.slice(0,-2));

// trim() -> Elimina los espacios al inicio y al final de la cadena

let cadena2 = "   Hola    Mundo    ";
console.log(cadena2.trim());

// --ES6--
// startsWith(valor[,inicio]) -> Sirve para saber si la cadena empiez con un valor. Devuelve true o false

console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M',5));

// endsWith(valor[,longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuelve true o false

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('n',8));
console.log(cadena.endsWith('Mundo'));

// includes(valor[,inicio]) -> Igual que indexOf() pero devuelve true o false

console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));

// repeat(valor) -> Repite el número de veces que le indiquemos

console.log(cadena.repeat(2));
console.log('r'.repeat(7));

// Template String

let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años y el año que viene tendras ${edad+1}`);




