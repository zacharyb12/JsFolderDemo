const form = document.getElementById('monForm');

form.addEventListener('submit', (e) => {

    e.preventDefault(); // on empeche le rechargement de la page

    const data = new FormData(form); // on recupere les donnees du formulaire

    const name = data.get('nom'); // on recupere le nom
    const email = data.get('email'); // on recupere l'email
    const password = data.get('password'); // on recupere le mot de passe
    const age = data.get('age'); // on recupere l'age
    const dateNaissance = data.get('dateNaissance'); // on recupere la date de naissance
    const pays = data.get('pays'); // on recupere le pays
    const sexe = data.get('sexe'); // on recupere le sexe
    const bio = data.get('bio'); // on recupere la bio
    const photo = data.get('photo'); // on recupere la photo

    const langues = data.getAll('langues'); // on recupere les langues

    console.log(name, email, password, age, dateNaissance, pays, sexe, bio, photo, langues); // on affiche les donnees dans la console


})