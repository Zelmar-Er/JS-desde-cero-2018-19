const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    // recibe tres parametros 1 obligatorio y 2 opcionales
    geolocation.getCurrentPosition(getPosition,error,options)
})

const options = {
    enableHightAcuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) => {
    console.log(position)
}

const error = (error) => console.log(error)