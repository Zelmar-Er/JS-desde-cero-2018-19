let names = ['Paco','José','Paula','María','Andrea'];

for(let name of names){
    console.log(`El valor es ${name}`);
}
for(let name in names){
    console.log(`La posicion es ${name}`);
}

for(let name of names){
    if(name === 'Paula'){
        break;
    }
    console.log(`Muestra del break ${name}`);
}
for(let index in names){
    if(names[index] === 'Paula'){
        continue;
    }
    console.log(`Muestra del continue ${index}, ${names[index]}`);
}