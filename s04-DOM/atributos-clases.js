const title = document.getElementById('title');
const input = document.getElementById('name');

console.log(title.getAttribute('class'));
console.log(input.getAttribute('type'));


const titleClass = title.classList;
console.log(`Lista de clases del h1 ${titleClass}`);
setTimeout(function(){
    title.classList.add('titulo','main-title');
    console.log(`Añadimos clases ${titleClass}`)
    setTimeout(function(){
        console.log(`Solo las mostramos si esta main-title, entre las clases ${title.classList.contains('main-title')}`);
        if(title.classList.contains('main-title')){
            setTimeout(function(){
                title.classList.remove('main-title','title');
                console.log(`Y si estaba borramos algunas ${titleClass}`);
                setTimeout(function(){
                    title.classList.replace('titulo','main-title');
                    console.log(`Al final solo dejamos ${titleClass}`);
                },3000)
            },3000);
        }
    },3000)
},3000);

console.log(input.value)