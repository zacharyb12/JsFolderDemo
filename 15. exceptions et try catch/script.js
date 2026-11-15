/*
try catch finally

le try permet d'essayer d'exécuter un code qui peut générer une erreur.


le catch attrap les erreurs qui peuvent survenir dans le bloc try.


le finally est un bloc qui s'exécute après le try et le catch, 
qu'il y ait eu une erreur ou non. Il est souvent utilisé pour libérer des ressources ou effectuer des opérations de nettoyage.

*/


// Exemple de try catch
try {
    
    throw new Error("il y  eu une erreur");
    
} catch (error) {
    console.log("An error occurred:", error.message);
}


// Exemple de try catch finally
try {
    
    throw new Error("il y  eu une erreur");
    
} catch (error) {
    console.log("An error occurred:", error.message);
}finally {
    console.log("finally block executed");
}


// exemple 

try {
    let userInput = prompt("Enter a number: ");
    let number = parseInt(userInput);

    if(isNaN(number)) {
        throw new Error("Invalid input, not a number.");
    }
    
} catch (error) {
    alert("la valeur n'est pas un nombre");
    console.log("An error occurred:", error);
}

// exemple avec finally

try {
    let userInput = prompt("Enter a number: ");
    let number = parseInt(userInput);

    if(isNaN(number)) {
        throw new Error("Invalid input, not a number.");
    }

} catch (error) {
    alert("la valeur n'est pas un nombre");
    console.log("An error occurred:", error.message);
}
finally {
    console.log("fin de bloc atteint");
}

//ne pas abuser du try catch car il peut rendre le code 
// plus difficile à lire et à maintenir. 


// les erreurs peuvent être gérées de manière plus spécifique et ciblée,
try {
    let userInput = prompt("Enter a number: ");
    let number = parseInt(userInput);

    if(number < 0) {
        throw new Error("la valeur est négative");
    }
    else 
    if(number > 10){
        throw new Error("la valeur est supérieur à 10");
    }
    else{
        alert(` la valeur est ${number}`);
    }

} catch (error) {
    alert("la valeur n'est pas un nombre");
    console.log("An error occurred:", error.message);
}
finally {
    console.log("fin de bloc atteint");
}