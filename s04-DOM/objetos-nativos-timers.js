const button = document.getElementById('button')

// Objeto window 

/* if (confirm('Acepta?')) {
    console.log('El usuario acepto');
} else {
    console.log('El usuario no acepto');
} */


// Objeto console


const person = {
    name: 'Dorian',
    age: 30,
    email: 'dorian@gmail.com'
}

//console.table([1,2,3,4])

// Objeto location 

// console.log(location.href)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.pathname)
// console.log(location.hash)
//location.reload()

//location.href = 'https://google.com'

// Objeto history
// history.back();

// Objeto date

/* const date = new Date()
console.log(date) */


//Timers

/* button.addEventListener('click', () => {
    //setTimeout(saludar,3000)
    const timeout = setTimeout(() => {
        console.log('ADIOS');
    }, 3000)
    
    clearTimeout(timeout)
}) */

/* const timeout = setTimeout(() => {
    console.log('ADIOS');
}, 3000)
button.addEventListener('click', () => {
    clearTimeout(timeout)
}) */


const saludar = () => {
    console.log('Hola')
}

let cont = 0

//const interval = setInterval(saludar, 3000)

// const interval = setInterval(() => {
//     console.log(cont)
//     cont++
// }, 1000)

// button.addEventListener('click', () => {
//     clearInterval(interval)
// })