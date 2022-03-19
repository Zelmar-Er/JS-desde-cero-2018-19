const users = [
    { id: 1, name: 'Dorian' },
    { id: 2, name: 'Laura' },
    { id: 3, name: 'Carlos' }
]
const emails = [
    { id: 1, email: 'dorian@gmail.com' },
    { id: 2, email: 'laura@gmail.com' }
]

const getUser = (id) => {
    const user = users.find(user => user.id == id)
    // creamos la promesa con sus dos callbacks(resolve, reject)
    return promise = new Promise((resolve,reject)=>{
        // si user es undefined
        if(!user) reject(`Doesn´t exist an user with id ${id}`)
        else resolve(user)
    })
}

const getEmail = (user) => {
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve,reject)=>{
        if(!email) reject(`${user.name} hasen´t email`)
        else resolve({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}


/* devuelve Promise {<fulfilled>: {…}} que es la promesa, el 
estado fulfilled significa que la promesa a terminado. Si la desplegamos veremos que tenemos la propiedad 'value', para leer este contenido en las promesas tenemos el metodo .then() el cual resuelve el contenido de la promesa. En sus parentecis ponemos lo que aremos con el resultado o lo que la promesa devuelve. Para los errores(reject) tenemos .catch()
*/
console.log(getUser(1));
getUser(3)
    .then(user => {
       return getEmail(user)
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

/*
getUser(3)
    .then(user => getEmail(user))
    .then(res => console.log(res))
    .catch(err => console.log(err))
*/
/*
getUser(3)
    .then(getEmail)
    .then(console.log)
    .catch(console.log)
*/