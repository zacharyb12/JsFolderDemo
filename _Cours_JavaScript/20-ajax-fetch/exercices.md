# 20 - Requêtes HTTP (fetch)

## Niveau 1
1. Avec `fetch("https://jsonplaceholder.typicode.com/users/1")`, convertis la réponse en JSON et affiche le `name`.
2. Ajoute la vérification `response.ok` et lève une erreur si elle est fausse.

## Niveau 2
3. Récupère la liste `https://jsonplaceholder.typicode.com/users` et affiche chaque nom dans un `<ul>` créé en JavaScript.
4. Copie `19.Les requettes AJAX/dataList.json` dans `20-ajax-fetch/`, charge-le avec `fetch("dataList.json")` (il faut un serveur local : `python -m http.server` dans le dossier) et affiche les pays dans un `<select>`.

## Niveau 3
5. Si la requête échoue (404 ou réseau), affiche le message d'erreur dans la page au lieu de la console.

---
### Corrections
```js
// 1 et 2
async function chargerUser() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const user = await reponse.json();
    console.log(user.name);
}
chargerUser();

// 3
async function listerUsers() {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await reponse.json();
    const ul = document.createElement("ul");
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = u.name;
        ul.append(li);
    });
    document.body.append(ul);
}

// 4 : python -m http.server puis ouvrir http://localhost:8000/...
async function chargerPays() {
    const reponse = await fetch("dataList.json");
    const pays = await reponse.json();
    const select = document.createElement("select");
    pays.forEach(p => select.append(new Option(p.country, p.code)));
    document.body.append(select);
}

// 5 : dans le catch, document.body.append(message) au lieu de console.error
