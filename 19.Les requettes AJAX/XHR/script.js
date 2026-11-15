// XMLHttpRequest (XHR) : l'ancienne façon de faire des requêtes HTTP en JavaScript.
// fetch l'a largement remplacé, mais on la rencontre encore dans du code existant.

const bouton = document.getElementById("btnXhr");
const liste = document.getElementById("liste");

function chargerUtilisateurs() {
    const xhr = new XMLHttpRequest();

    // 1. open(méthode, url) : prépare la requête (n'envoie rien encore)
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    // 2. responseType "json" : le navigateur convertit la réponse en objet JavaScript
    xhr.responseType = "json";

    // 3. onload : appelé quand la réponse est arrivée (quel que soit le code HTTP)
    xhr.onload = () => {
        if (xhr.status === 200) {
            liste.innerHTML = "";
            xhr.response.forEach(user => {
                const li = document.createElement("li");
                li.textContent = user.name;
                liste.append(li);
            });
        } else {
            console.error("Erreur HTTP :", xhr.status);
        }
    };

    // 4. onerror : appelé en cas d'échec réseau (pas de connexion, DNS...)
    xhr.onerror = () => console.error("Erreur réseau");

    // 5. send() : envoie réellement la requête
    xhr.send();
}

bouton.addEventListener("click", chargerUtilisateurs);
