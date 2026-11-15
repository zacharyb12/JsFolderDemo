function afficherImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        
        const container = document.getElementById('container');
        container.innerHTML = "";


        const img = document.createElement('img');
        img.src = data.message;
        img.style.width = '500px';

        container.appendChild(img);

    })
    .catch(error => {
        console.error('Erreur:', error);
    });
}

let btn = document.querySelector('button');
btn.addEventListener('click', afficherImage);