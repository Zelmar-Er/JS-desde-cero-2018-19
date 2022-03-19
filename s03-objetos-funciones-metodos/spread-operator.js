let numbersToAdd = [1,2,3]

const addNumbers = (a,b,c) => {
    console.log(a+b+c)
}

let users = ['pablo','javier','alejo'];
let newUsers = ['valentina','rosa','juana'];

// console.log(users);

users.unshift(...newUsers);

// console.log(users);

const restParams = (...x) =>{
    console.log(x)
}