/*
l'asynchrones et les promesses en JavaScript
*/

// les promesses sont des objets qui permettent de gerer l'asynchronisme en JavaScript
// une promesse est un objet qui peut etre dans l'un des trois etats suivants :
// 1. en attente (pending) : l'operation n'est pas encore terminee
// 2. resolue (fulfilled) : l'operation est terminee avec succes
// 3. rejetee (rejected) : l'operation a echoue

// exemple de promesse


let promise =  new Promise((resolve, reject) => {
    setTimeout(() => {

        let random = Math.random();


        if(random < 0.5){
            resolve('la promesse est resolue');
            console.log('la promesse est resolue');
            console.log(resolve)

        }else{

            reject('la promesse est rejetee');
            console.log('la promesse est rejetee');
            console.log(reject)
        }
        
    }, 5000);
})


// Exemple

promise
.then((result) => {
    console.log(result);

    if(result === 'la promesse est rejetee'){
        throw new Error('la promesse a echoue');
    }
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('la promesse est terminee');
})


// Exemple Verif utilisateur

function verifUser(email , password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === 'admin' && password === 'admin'){

                resolve('bienvenue admin');
            }else{
                reject('email ou mot de passe incorrect');
            }
        }, 2000);
    })

}

verifUser('admin' , 'admin')
.then((result) => {

    console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('la promesse est terminee');
})