// objeto persona
const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura','Diego','Pepe','Rosa','Tomás']
}

// muestra el objeto
// console.log(person);

// muestra la propiedad
// console.log(person.name);
// console.log(person['name']);

// imprimimos primero las keys y despues los valores
// for( const key in person){
//     console.log(`Estos es la key: ${key}`);
//     console.log(`Y este el valor: ${person[key]}`);
// }

// de esta forma solo recorremos el array sons y obtener el valor utilizamos of. Si utilizamos in nos dara el index
// for( const sons of person.sons){
//     console.log(sons);
// }

console.log(`Hola ${person.name}, tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')}`);