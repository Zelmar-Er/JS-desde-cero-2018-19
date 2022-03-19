// const getName = async () => {
//         return new Promise((resolve,reject) => {
//                 setTimeout(()=>{
//                         resolve('Dorian')
//                 },1500);
//         })
// }

// const sayHellow = async () => {
//         const name = await getName()
//         return `Hello ${name}`
// }

// sayHellow()
//         .then(res=>console.log(res))

const users = [{ id: 1, name: 'Dorian' }, { id: 2, name: 'Laura' }, { id: 3, name: 'Carlos' }]
const emails = [{ id: 1, email: 'dorian@gmail.com' }, { id: 2, email: 'laura@gmail.com' }]

// funcion asincrona
const getUser = async (id) => {
        const user = users.find(user => user.id == id)
        if(!user) throw new Errod(`Doesn´t exist an user with id ${id}`)
        else return user
}

// funcion asincrona
const getEmail = async (user) => {
        const email = emails.find(email => email.id == user.id)
        if(!email) throw new Error(`${user.name} hasn´t email`)
        else return ({
                id: user.id,
                name: user.name,
                email: email.email
        })
}

// funcion asincrona
const getInfo = async (id) => {
        try {
                // corte
                const user = await getUser(id)
                // corte
                const res = await getEmail(user)
                return `${user.name} email is ${res.email}
                `
        }catch (error){
                console.log(error)
        }
}

getInfo(1).then(res=>console.log(res));