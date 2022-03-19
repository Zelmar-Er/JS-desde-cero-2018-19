document.getElementById('button-get').addEventListener('click',getData);

function getData(){
        axios({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'
        }).then(res=>{
                const list = document.getElementById('list')
                const fragment = document.createDocumentFragment()
                for(const userInfo of res.data){
                        const listItem = document.createElement('li')
                        listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                        fragment.appendChild(listItem)
                }
                list.appendChild(fragment)
        })
        .catch(error=>console.log(error))
}

// post
document.getElementById('button-post').addEventListener('click',postData)

function postData(){
        axios({
                method: 'POST',
                url: 'https://jsonplaceholder.typicode.com/posts',
                data:{
                        title: 'New Post ss',
                        body: 'Axios es una libreria basada en promesas para el cliente y para el servidor.',
                        userId: 01
                }
        })
        .then(res=>console.log(res.data))
}