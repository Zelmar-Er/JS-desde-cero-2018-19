const person = {
    name: 'Dorian',
    age: 20,
    email: 'dorian@gmail.com'
}

// FORMA TRADICIONAL
let nameObj = person.name
let ageObj = person.age
let emailObj = person.email

console.log(`Forma tradicional ${nameObj} ${ageObj} ${emailObj}`)

// DESTRUCTURING
let {name,age,email} = person
console.log(`Destructuring ${name} ${age} ${email}`)

// tambien podemos asignarles nombres
let {name:nombre,age:edad,email:correo} = person
console.log(`Destructuring con nombres ${nombre} ${edad} ${correo}`)

// Esto sirve con arrays también, si queremos acceder a un elemento en la colección, que no sea el primero, debemos también asignarle nombre a los elementos anteriores a este
const numbers = [1,3,5,6,7,2,]
let [a,b,c,d] = numbers
console.log(`${c} es igual a 5`)

// destructuring en axios
const getUsers = async () => {
    // tomamos el array data y le asignamos el nombre users
    // axios.get('url') es el objeto en este caso
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(users)
    return users
}

getUsers()
