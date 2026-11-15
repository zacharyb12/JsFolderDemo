
// je recupere mon boutton
let btn =  document.getElementById("ajouterBtn");
let list = document.getElementById("liste");


// j'ajoute un evenement sur le bouton
btn.addEventListener('click' , () => {
    
    // debut du try pour tenter quelque chose
    try {

        // je recupere la valeur de mon prompt
        const saisie = prompt("Entrez un mot ");

        if(!saisie || !isNaN(saisie)) {
            throw new Error("Vous devez entrez un mot !");
        }
        else{
            const li = document.createElement("li");
            li.textContent = saisie;
            list.appendChild(li);

        }

    } catch (error) {
        alert(" il y a eu une erreur : " + error.message);
    }
})
