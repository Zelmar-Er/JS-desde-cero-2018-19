const smile = document.getElementById('smile')
const dropZone = document.getElementById('drop-zone')

// smile.addEventListener('dragend',()=>{
//     console.log('ok')
// })


dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    console.log('Drag Over')
})
dropZone.addEventListener('drop',(e)=>{
    e.preventDefault()
    console.log('Drop')
})
dropZone.addEventListener('dragleave',(e)=>{
    e.preventDefault()
    console.log('Drag Leave')
})

// Practica guiada
const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

// dataTransfer
// setData: Establece la información que queremos compartir
// getData: Establece la información que queremos obtener
pendingTasks.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain', e.target.id)
    // console.log(e.dataTransfer.getData('text'))
})

// animacion
pendingTasks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend',(e)=>{
    e.target.classList.remove('active');
})
// este evento es obligatorio le avisa al navegador donde podemos soltar el elemento
finishedTasks.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

finishedTasks.addEventListener('drop',(e)=>{
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    // remueve element de tareas pendientes y lo pone en terminadas
    finishedTasks.appendChild(pendingTasks.removeChild(element))
    element.classList.remove('active')
})