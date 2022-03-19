// RTA del Curso
class Book{
    constructor(title,author,year,gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor(){
        return this.author
    }

    getGender(){
        return this.gender
    }

    bookInfo(){
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}`
    }
}

let books = []

while (books.length < 3){
    let title = prompt('Introduce el título del libro')
    let author = prompt('Introduce el autor del libro')
    let year = prompt('Introduce el año del libro')
    let gender = prompt('Introduce el género del libro').toLowerCase()

    if (title != '' &&
        author != '' &&
        !isNaN(year) &&
        year.length == 4 &&
        /*comprovacion unica */
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasía')) {
            books.push(new Book(title,author,year,gender))
        }
}

const showAllBooks = () =>{
    console.log(books);
}

const showAuthor = () =>{
    let authors = []
    for (const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showGender = () =>{
    const gender = prompt('Introduce el género a buscar')
    for (const book of books){
        if(book.getGender() == gender) {
            console.log(book.bookInfo())
        }
    }
}