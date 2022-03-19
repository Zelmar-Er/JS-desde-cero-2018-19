const list = document.getElementById('list');

const newElement = document.createElement('li');
newElement.textContent = "I'm a new element";
list.insertBefore(newElement, list.children[1]);

const adjacentElement = document.createElement('li');
adjacentElement.textContent = "Soy un elemento adyacente";
list.insertAdjacentElement('afterend' ,adjacentElement)

list.insertAdjacentHTML('beforebegin','<h2>Soy un HTML Adyacente</h2>')
list.insertAdjacentHTML('beforeend','Soy un texto adyacente');

setTimeout(function(){
    newElement.textContent = 'Estoy reemplazando';
    list.replaceChild(newElement,list.children[2]);
},8000);

const jquerylike = document.createElement('li');
jquerylike.textContent = 'JQuery Like';
list.append(jquerylike);

setTimeout(function(){
    const replace = document.createElement('li');
    replace.textContent = "Ya lo reemplace";
    document.getElementById('toReplace').replaceWith(replace)
},5000);

list.insertAdjacentHTML('afterend','<h3 id="clon">Soy un clon de la lista sin modificar</h3>');
document.getElementById('clon').after(list.cloneNode(true));

setTimeout(function(){
    document.getElementById('prueba').removeChild(document.getElementById('prueba').children[5])
},3000)