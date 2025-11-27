function calculeModulo() {
    //Chercher les données dans le formulaire
    var affiche = document.getElementById("divAffiche");
    var nombre1 = parseFloat(document.getElementById("nbre1").value);
    var nombre2 = parseFloat(document.getElementById("nbre2").value);
    var radioOperation = document.getElementsByName("operation");

    var operation = "";

    for (var i = 0; i < radioOperation.length; i++) {
        if (radioOperation[i].checked) {
            operation = radioOperation[i].value;
        }
    }
                
    //Calculer
    var resultat;

    if (operation == "+") {
        resultat = nombre1 + nombre2;
    }
    else if (operation == "-") {
        resultat = nombre1 - nombre2;
    }
    else if (operation == "*") {
        resultat = nombre1 * nombre2;
    }
    else if (operation == "/") {
        resultat = nombre1 / nombre2;
    }
    else {
        resultat = nombre1 % nombre2;
    }

    //Message
    var message = "<br>Résultat: " + nombre1 + " " + operation + " " + nombre2 + " = " + resultat.toFixed(2);
    //Afficher le message sur la page web
    affiche.innerHTML = message;
}