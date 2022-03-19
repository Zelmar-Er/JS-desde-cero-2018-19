
const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr
    // Pregunta si window posee dicho protocolo y si no utiliza uno más antiguo, esto es solo para tener compatibilidad con windows explorer menor a 10
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response)

        const list = document.getElementById('list')
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('LI')
            listItem.innerHTML = `
                ${userInfo.id} - ${userInfo.name}<br />
                 Info de Contacto:<dd>
                    Telefono: ${userInfo.phone}<br />
                    Email: ${userInfo.email}<br />
                    Pagína Web: ${userInfo.website}<br />
                    Ciudad: ${userInfo.address.city}
                    </dd>
                `
            list.appendChild(listItem)
        }
    })

    xhr.send()
})