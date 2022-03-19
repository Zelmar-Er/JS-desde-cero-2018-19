// Clase
class Libro{
    constructor(titulo,autor,anio,genero){
        this.titulo = titulo
        this.autor = autor
        this.anio = anio
        this.genero = genero
    }

    informacion(){
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Año: ${this.anio}, Género: ${this.genero}`
    }
}

// Variables
const libros = [];

// Introducir libros
for(;libros.length < 3;){
    // Pido los datos del libro para el constructor y verifico que no sean campos vacios
    let titulo = prompt('Ingrese el titulo del libro');
    if(titulo == ''){
       titulo = prompt('Titulo incorrecto, vuelva a ingresarlo')
    }
    let autor = prompt('Ingrese el nombre del autor del libro');
    if(autor == ''){
        autor = prompt('Autor incorrecto, vuelva a ingresarlo')
    }
    let anio = prompt('Ingrese el año de publicación del libro');
    if(anio == '' || anio.length != 4){
        anio = prompt('Año incorrecto, vuelva a ingresarlo')
    }
    let genero = prompt('Ingrese el género del libro');
    switch(genero.toLowerCase()){
        case '':
            genero = prompt('Género incorrecto, vuelva a ingresarlo')
        break;
        case 'aventura':
        case 'terror':
        case 'fantasia':
        break;
        default: 
            genero = prompt('Género incorrecto, vuelva a ingresarlo')
        break;
    }

    // Creo el libro
    titulo = new Libro(titulo,autor,anio,genero);

    // Ingreso el libro al array
    libros.push(titulo);
}
// Muesta los libros con su informacion
function mostrarLibros(){
    for (const libro of libros){
        console.log(libro.informacion())
    }
}
// Muestra los autores en orden alfabetico
function mostrarAutores(){
    let autores = [];
    for(const autor of libros){
        autores.push(autor.autor)
    }
    for(let i = 0; i < autores.length; i++){
        autores.sort()
        console.log(autores[i])
    }
}
// Pide un género y retorna la información de los libros de dicho género
function mostrarGenero(x){
    for(let i = 0; i < libros.length; i++){
        if(libros[i].genero == x){
            return libros[i].informacion();
        }
    }
}