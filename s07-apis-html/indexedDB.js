// creamos el acceso al IndexedDB
// como la variable se llama igual a la propiedad de window debemos realizar la asociación con el objeto window para evitar errores. Si no solo utilizamos la propiedad
// const baseDatos = indexedDB()
const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

// preguntamos si la base de datos existe y si es asi trabajamos con ella
if(indexedDB && form){
    let db
    // open recibe dos parametros nombre y versión
    // con este método accedemos a la bd
    const request = indexedDB.open('tasksList',1)

    // si todo va bien
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()
    }

    // para saber si necesita actualizar
    // la creacion, lectura y eliminación de datos se realiza aqui
    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        // creamos almacen y le damos nombre (task)
        const objectStore = db.createObjectStore('tasks',{
            // es la ruta de la key y le definimos una propiedad del objeto como ruta
            keyPath: 'taskTitle'
            // generamos un key(clave) numerica automatica, la cual sirve como indice
            // autoIncrement: true
        })
    }

    // nos notifica si ocurrio un error
    request.onerror = (error) => {
        console.log('Error', error)
    }
    
    // añadir datos a la bd
    // para agregar los datos el proceso se divide en tres pasos
    // todas las operaciones sobre una bd indexada funcionan a través de una transacción
    const addData = (data) => {
        // la transacción recibe dos parametros el almacen sobre la que vamos a trabajar y el modo
        const transaction = db.transaction(['tasks'],'readwrite')
        // abrimos el almacen y realizamos la transacción
        const objectStore = transaction.objectStore('tasks')
        // en es esta petición añadimos los datos
        const request = objectStore.add(data)
        // para que lea los datos de nuevo
        readData()
    }

    // obtiene los datos a actualizar
    const getData = (key) => {
        const transaction = db.transaction(['tasks'],'readwrite')
        const objectStore = transaction.objectStore('tasks')
        // petición para obtener la inf de key
        const request = objectStore.get(key)

        request.onsuccess = () => {
            // console.log(request)
            // obtenemos los datos y los ponemos en el form
            form.task.value = request.result.taskTitle
            form.priority.value = request.result.taskPriority
            // cambiamos el data action para utilizar la funcion updata
            form.button.dataset.action = 'update'
            form.button.textContent = 'Update Task'
        }
    }

    const updateData = (data) => {
        const transaction = db.transaction(['tasks'],'readwrite')
        const objectStore = transaction.objectStore('tasks')
        // si el dato existe lo modifica y si no lo crea
        const request = objectStore.put(data)

        request.onsuccess = () =>{
            form.button.dataset.action = 'add'
            form.button.textContent = 'Add Task'
            readData()
        }
    }

    // borrar datos
    const deleteData = (key) => {
        const transaction = db.transaction(['tasks'],'readwrite')
        const objectStore = transaction.objectStore('tasks')
        // borra los datos
        const request = objectStore.delete(key)

        request.onsuccess = () => {
            readData()
        }
    }

    // leer datos de la bd
    const readData = () => {
        const transaction = db.transaction(['tasks'],'readonly')
        const objectStore = transaction.objectStore('tasks')
        // petición de lectura
        // para leer necesitamos crear un cursor
        // este recorre los objetos y devuelve de a un objeto
        const request = objectStore.openCursor()
        // documentFragment va aqui ya que cada ves que el cursor termina de leer vuelve a llamar a openCursor()
        const fragment = document.createDocumentFragment()

        // verificamos que todo salga bien
        request.onsuccess = (e) => {
            // target es el cursor
            // si cursor lee todos los datos devuelve null
            const cursor = e.target.result

            if(cursor){
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)

                const taskUpdate = document.createElement('BUTTON')
                taskUpdate.dataset.type = 'update'
                taskUpdate.dataset.key = cursor.key
                taskUpdate.textContent = 'Update'
                fragment.appendChild(taskUpdate)

                const taskDelete = document.createElement('BUTTON')
                taskDelete.textContent = 'Delete'
                taskDelete.dataset.key = cursor.key
                taskDelete.dataset.type = 'delete'
                fragment.appendChild(taskDelete)

                // console.log(cursor.value)
                // sigue leyendo hasta que se quede sin registros, para esto vuelve a llamar a openCursor()
                cursor.continue()
            } else {
                // console.log('No more data')
                // antes de añadir el fragmento a tasks, vaciamos esta para que la información no se repita en cada lectura
                tasks.textContent = ''
                tasks.appendChild(fragment)
            }
        }
    }

    // ponemos el form a la escucha y obtenemos datosta
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        // objeto a añadir a la bd
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        // console.log(data)

        // realiza la accion segun el data-action del btn
        if(e.target.button.dataset.action == 'add'){
            addData(data)
        } else if(e.target.button.dataset.action == 'update'){
            updateData(data)
        }

        form.reset()
    })
    tasks.addEventListener('click',(e)=>{
        // verificamos que el btn sea update
        if(e.target.dataset.type == 'update'){
            getData(e.target.dataset.key)
        } else if(e.target.dataset.type == 'delete'){
            deleteData(e.target.dataset.key)
        }
        
    })
}