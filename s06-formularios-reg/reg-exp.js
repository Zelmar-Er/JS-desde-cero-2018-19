// Reg Exp I
const textUno = document.getElementById('text-uno').textContent
// busca todas las coincidencias sin importar mayúsculas
const regEx = /lorem/gi
// const regEx2 = new RegExp('lorem', 'gi')
// const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(textUno)) //true
