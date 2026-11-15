/*
les formulaires en javascript
*/

// on recupere les elements necessaires pour utiliser le formulaire
let form = document.querySelector('form');

// on peut preciser ce qu'on veut recuperer dans le formulaire
let input =  document.querySelector('form input')

// on peut preciser ce qu'on veut recuperer dans le formulaire
let btn = document.querySelector('form button')

// je recupere mon ul pour y ajouter les li
let ul = document.getElementById('info')

let error = document.getElementById('error')
error.style.color = 'red';
error.style.fontSize = '10px';

btn.addEventListener('click' , (e) => {
    // permet de ne pas recharger la page
    e.preventDefault();
    console.log(input.value);


    if(!input.value){
        // on affiche un message d'erreur
        error.innerText= 'Le nom doit etre rempli';
    }else if(input.value.length < 4){
        error.innerText= 'Le nom doit faire au moins 4 caractères';
        
    }

    let li = document.createElement('li');
    li.innerText = input.value;
    ul.appendChild(li);

    //  on remets la valeur de l'input a 0
    input.value = '';
})


// deuxieme methode 

