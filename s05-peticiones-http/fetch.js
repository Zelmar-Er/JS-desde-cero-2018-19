// Fetch Introducción
document.getElementById('button').addEventListener('click',obtenerDatos);

// Mi solución
/*
function obtenerDatos(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(user => {
                html += `
                    <li>
                    Nombre: ${user.name} 
                    <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Nick: ${user.username} 
                    <br/>&nbsp;&nbsp;&nbsp;
                    Email: ${user.email}
                    </li>
                `;
            })
            document.getElementById('list').innerHTML = html;
        })
}
*/

// Solucion del curso
function obtenerDatos(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list');
            const fragment = document.createDocumentFragment();
            for(const userInfo of res){
                const listItem = document.createElement('li');
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
                fragment.appendChild(listItem);
            }
            list.appendChild(fragment);
        })
        
}

// Fetch POST
document.getElementById('button-dos').addEventListener('click',postDatos);

function postDatos(){
    const newPost = {
        title: 'New Post Z',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempora incidunt distinctio, iusto obcaecati quisquam similique maiores!',
        userId: 01
    }
    // console.log(newPost)
    // console.log(JSON.stringify(newPost))
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify(newPost),
        headers:{
            // informa a la api que los datos enviados estan en formato json
            "Content-type": "application/json"
        }
    })
        .then(res=>res.json())
        .then(data=>console.log(data))
}

// fetch Lectura de archivos
document.getElementById('button-img').addEventListener('click',leerArchivo);
document.getElementById('button-pdf').addEventListener('click',leerArchivo);

function leerArchivo(e){
    if(e.target.id === 'button-img'){
        fetch('slide-4.jpg')
            .then(res=>res.blob())
            .then(img => 
                document.getElementById('img').src = URL.createObjectURL(img))
    } else if(e.target.id === 'button-pdf'){
        fetch('pdfPrueva.pdf')
            .then(res=>res.blob())
            .then(pdf =>
                document.getElementById('pdf').href = URL.createObjectURL(pdf))
    } else {
        console.log('algo malio sal')
    }
}