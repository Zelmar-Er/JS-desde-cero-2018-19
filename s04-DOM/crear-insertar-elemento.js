const days = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const daysSelect = document.getElementById('daysSelect');

title.innerHTML = 'DOM - <span>Crear e insertar elementos I</span>'

/*
    for(const day of days){
        const li = document.createElement('li');
        li.textContent = day
        daysList.appendChild(li);
    }

    for(const day of days){
        daysList.innerHTML += `<li>${day}</li>`
    }
*/

const fragment = document.createDocumentFragment();

for(const day of days){
    const li = document.createElement('li');
    li.textContent = day;
    fragment.appendChild(li);
}

daysList.appendChild(fragment);

const fragmentOption = document.createDocumentFragment();
for(const day of days){
    const option = document.createElement('option');
    option.setAttribute('value',day.toLowerCase());
    option.textContent = day;
    // option.value = day.toLowerCase();
    fragmentOption.appendChild(option);
}

daysSelect.appendChild(fragmentOption);