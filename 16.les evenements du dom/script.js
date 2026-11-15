/*
les evenements du dom 
*/

// exemple simple

let h1 = document.querySelector('h1');

let container = document.querySelector('.container');

let h3 = document.querySelector('h3');

let card = document.querySelector('.card');

let img = document.querySelector('img');

let texte = document.querySelector('.texte');

function changeColor() {
    if(h1.style.backgroundColor == 'white'){
        h1.style.backgroundColor = 'black';
        h1.style.color = 'white';
    }
    else {
        h1.style.backgroundColor = 'white';
        h1.style.color = 'black';
    }
}

function changeSize(){
    if(container.style.width == '60%'){
        container.style.width = '90%';
    }
    else {
        container.style.width = '60%';
    }
}

h3.onmouseover = () => {
    h3.style.color = 'red';
}

h3.onmouseout = () => {
    h3.style.color = 'black';
}


// Les Event Listeners - S’abonner à un événement

h3.addEventListener('click', () => {
h3.innerText = 'Vous avez cliqué sur le titre';
},{once:true});


img.addEventListener('click', () => {
    img.style.width = '100%';
}, { passive: true });

texte.addEventListener('click', () => {
    texte.innerText = 'Vous avez cliqué sur le paragraphe';
}, { capture: true });


//retirer  un evenement 


let card2 = document.querySelector('.card2');

function changeColor2(){
    if(card2.style.backgroundColor == 'white'){
        card2.style.backgroundColor = 'black';
        card2.style.color = 'white';
    }
    else {
        card2.style.backgroundColor = 'white';
        card2.style.color = 'black';
    }
}

card2.addEventListener('click', changeColor2);

card2.removeEventListener('click', changeColor2);

card2.addEventListener('click', (e) => {
    console.log(e);
});