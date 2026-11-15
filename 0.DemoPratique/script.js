let body = document.querySelector('body');

body.style.backgroundColor = 'lightblue';

let h1 = document.createElement('h1');
h1.textContent = "hello javascript"
h1.style.textAlign = "center"
h1.style.fontSize = "5rem"
h1.style.textDecoration = "underline"
h1.style.textDecorationColor = "red"
h1.style.letterSpacing = "10px"

h1.addEventListener('mouseover',()=>{
    h1.style.letterSpacing = "20px"
    h1.style.textDecorationColor = "blue"

})

h1.addEventListener('mouseleave',()=>{
    h1.style.letterSpacing = "10px"
    h1.style.textDecorationColor = "red"

})

body.appendChild(h1)


let form = document.querySelector("#form_header")

form.addEventListener('submit',(el)=>{
    el.preventDefault()
    console.log(form.email.value);
    console.log(form.password.value);

    console.log(form["email"].value);
    console.log(form["password"].value);
    
})

let values = ["javascript","html","css"]

let result = values.map(v => {
    if (v.length > 5){
        console.log("plus de cinq")
        return String(5) + " " + v
    }
    else if(v.length > 3){
        console.log("plus de trois")
        return  String(3) + " " + v
        
    }else{
        console.log("moins de trois")
        return String(-3) + " " + v
        
    }
})


async function chargerUtilisateurs() {
    try {
        const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);

        const users = await reponse.json();

        users.forEach(d => {
            console.log(d.id, d.name, d.username, d.email,
                        d.address.street, d.address.suite, d.address.city);
        });

        return users; // permet de réutiliser les données ailleurs
    } catch (erreur) {
        console.error("Échec :", erreur);
    }
}

// Pour utiliser le résultat à l'extérieur, on attend la promesse :
chargerUtilisateurs().then(users => {
    if (users) console.log("Nombre d'utilisateurs :", users.length);
});


const date = new Date(2026, 5, 10); // 10 juin 2026 à minuit, heure locale (mois 5 = juin)

console.log(date.getDay());       // 3
console.log(date.getMonth());     // 5
console.log(date.getFullYear());  // 2026
console.log(date.getDate());      // 10 : le numéro du jour dans le mois