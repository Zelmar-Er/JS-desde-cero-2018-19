const btnPrueva = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

// btnPrueva.addEventListener('click',()=>{
//     alert('click');
// })

// btnPrueva.addEventListener('dblclick',()=>{
//     alert('doble click sobre el boton');
// })

// btnPrueva.addEventListener('mouseenter',()=>{
//     console.log('en la zona');
// })

// btnPrueva.addEventListener('mouseleave',()=>{
//     console.log('saliendo de la zona')
// })

// btnPrueva.addEventListener('mousedown',()=>{
//     console.log('boton presionado');
// })

// btnPrueva.addEventListener('mouseup',()=>{
//     console.log('boton suelto');
// })

// btnPrueva.addEventListener('mousemove',()=>{
//     console.log('mause en movimiento');
// })

box.addEventListener('mouseenter',()=>{
    box.classList.replace('green','blue');
})
box.addEventListener('mouseleave',()=>{
    box.classList.replace('blue','green');
})

// input.addEventListener('keydown',()=>{
//     console.log('teclas precionadas');
// })

input.addEventListener('keyup',()=>{
    console.log('has soltado una tecla');
})
input.addEventListener('keypress',()=>{
    console.log('estas pulsando');
})