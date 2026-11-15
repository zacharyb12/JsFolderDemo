/*
les formulaires en javascript
*/


let list = document.getElementById('list');

let form = document.getElementById('form1');

let input = form['info'];

form.addEventListener('submit', (e) => {
    // enpecher le rechargement de la page
    e.preventDefault();

    console.log(input.value);

    let li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);
    input.value = '';
})

