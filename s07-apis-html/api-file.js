const fileInput = document.getElementById('file')
const img = document.getElementById('img')
const text = document.getElementById('text')
const images = document.getElementById('images')

// fileInput.addEventListener('change',(e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsText(file)
//     // muestra el texto cuando se termina de cargar
//     fileReader.addEventListener('load',(e)=>{
//         text.textContent = e.target.result
//     })
// })

// fileInput.addEventListener('change',(e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     // muestra la imagen cuando termina de cargarse
//     fileReader.addEventListener('load',(e)=>{
//         img.setAttribute('src',e.target.result)
//     })
// })

// cargar multiples archivos
fileInput.addEventListener('change',(e)=>{
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    // iteramos el array(files) para crear una etiqueta img por cada archivo subido
    for(const file of files){
        // el obj FileRader() va dentro, ya que despues de su uso de "destruye" y necesitamos uno en cada iteracion
        const fileReader = new FileReader()
        const img = document.createElement('IMG')
        fileReader.readAsDataURL(file)
        // muestra la imagen cuando termina de cargarse
        fileReader.addEventListener('load',(e)=>{
            img.setAttribute('src',e.target.result)
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})

// API II
const fileInputDos = document.getElementById('file-dos')
const progress = document.getElementById('progress')

// fileInputDos.addEventListener('change',(e)=>{
//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsDataURL(file)
//     fileReader.addEventListener('progress',(e)=>{
//         progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
//     })
//     fileReader.addEventListener('loadend',()=>{
//         progress.style.width = '100%';
//     })
// })

// variable de la raiz del archivo, para acceder a las variables css
const root = document.documentElement

fileInputDos.addEventListener('change',(e)=>{
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('progress',(e)=>{
        root.style.setProperty('--bar-width',Number.parseInt(e.loaded * 100 / e.total) + '%')
    })
    fileReader.addEventListener('loadend',()=>{
        root.style.setProperty('--bar-width','100%')
    })
})

// practica guiada
const fileInputTres = document.getElementById('file-tres')
const dropZone = document.getElementById('drop-zone')

dropZone.addEventListener('click',()=>fileInputTres.click())

dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault()
    dropZone.classList.add('drop-zone--active')
})
dropZone.addEventListener('dragleave',(e)=>{
    e.preventDefault
    dropZone.classList.remove('drop-zone--active')
})

dropZone.addEventListener('drop',(e)=>{
    e.preventDefault()
    fileInput.files = e.dataTransfer.files
    console.log(fileInput.files)
})
fileInputTres.addEventListener('change',(e)=>{
    console.log(fileInput.files)
})