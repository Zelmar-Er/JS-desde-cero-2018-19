/*
    document.getElementById('id') - Acceder a un elemento através de su id

    document||element.querySelector('SelectorCSS') - Accede al primer elmento que coincida con el selector CSS

    document||element.querySelectorAll('SelectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList que no es lo mismo que un array.
*/
// getElementById
const title = document.getElementById('title');
console.log(title);
setTimeout(()=>{
    title.textContent = 'DOM - Accediendo a Nodos';
},3000);
// querySelector
const paragraph = document.querySelector('.paragraph');
console.log(paragraph);

const span = paragraph.querySelector('span');
console.log(span);
setTimeout(()=>{
    span.textContent = 'Accedimos ateves de un elemento al span'
},5000);
// querySelectorAll
const paragraphs = document.querySelectorAll('.paragraph');
console.log(paragraphs);
// con el operador spread podemos volverlo un array, pero este metodo no es compatible todavia con todos los navegadores.
const paragraphSpread = [...document.querySelectorAll('.paragraph')];
console.log(paragraphSpread);
setTimeout(()=>{
    paragraphSpread.map(p=>p.style.color = 'blue');
},6000);
// otra forma es con Array.from
const paragraphArray = Array.from(document.querySelectorAll('.paragraph'));
console.log(paragraphArray);
setTimeout(()=>{
    paragraphArray.map(p=>p.style.color = 'black');
},10000);

