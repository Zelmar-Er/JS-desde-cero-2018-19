const form = document.getElementById('form');
const input = document.getElementById('input');

// input.addEventListener('keyup',()=>{
//     console.log(input.value);
// })

// nos devuelve la tecla pulsada
// input.addEventListener('keyup',(e)=>{
//     console.log(e.key);
// })

// const btn = document.getElementById('btn');
// btn.addEventListener('click',(e)=>{
//     console.log(e.target);
// })

// const enviar = document.querySelector('form input[type="submit"]')
// enviar.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(e.target);
// })
// console.log(enviar)

const gallery = document.getElementById('gallery');

gallery.addEventListener('click',(e)=>{
    console.log(e.target.textContent);
    if(e.target.classList.contains('red') && e.target.classList.contains('gallery_item')){
        e.target.classList.remove('red');
    } else if(e.target.classList.contains('gallery_item')){
        e.target.classList.add('red');
    }
})