// 20 - Requêtes HTTP : fetch (moderne) et XMLHttpRequest (ancienne méthode)
// Nécessite une connexion Internet (API publique : dog.ceo).

const container = document.getElementById("container");
const bouton = document.getElementById("btnChien");

function afficherImage(url) {
    container.innerHTML = "";
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Photo de chien";
    img.style.width = "300px";
    container.append(img);
}

// 1. fetch avec then / catch
function chargerChienThen() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(reponse => {
            // fetch ne rejette PAS sur un code 404/500 : il faut vérifier reponse.ok
            if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
            return reponse.json();
        })
        .then(data => afficherImage(data.message))
        .catch(erreur => console.error("Erreur :", erreur.message));
}

// 2. fetch avec async / await (même logique, plus lisible)
async function chargerChien() {
    try {
        const reponse = await fetch("https://dog.ceo/api/breeds/image/random");
        if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
        const data = await reponse.json();
        afficherImage(data.message);
    } catch (erreur) {
        console.error("Erreur :", erreur.message);
    }
}

// 3. XMLHttpRequest : ancienne méthode, encore présente dans du code existant
function chargerAvecXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
    xhr.onload = () => {
        if (xhr.status === 200) {
            afficherImage(JSON.parse(xhr.responseText).message);
        } else {
            console.error("Erreur HTTP", xhr.status);
        }
    };
    xhr.onerror = () => console.error("Erreur réseau");
    xhr.send();
}

// Choisir la méthode utilisée par le bouton (remplacer par chargerChienThen ou chargerAvecXHR)
bouton.addEventListener("click", chargerChien);
