// seleccionamos todas las cajas
const boxes = document.querySelectorAll('.box')


// callback, recibe cada uno de los parameros a observar
const callback = (entries) => {
    // console.log(entries)
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target.id,'is intersecting')
        }
    })
}

const options = {
    // root:
    // funciona igual que css
    // rootMargin: '200px' //nos da el vp + 200px
    // valores de 0 y 1, 0 defecto.
    // hasta que el % del elemento no se vea no salta la intersectio
    threshold: 0.25 // = a 25% de la caja en este caso

}

// creamos el intersection observer, el cual recibe dos parametros 1° una funcion y el 2° es opcional y es un objeto que recibe tres propiedades y las mismas son opcionales
const observer = new IntersectionObserver(callback, options)


boxes.forEach(element => observer.observe(element))
