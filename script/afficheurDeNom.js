function afficheurDeNom() {
    let prenom = document.getElementById("txtPrenom").value;
    let nomMilieu = document.getElementById("txtNomMilieu").value;
    let nomFamille = document.getElementById("txtDernierNom").value;
    let affiche = document.getElementById("divReponse");

    let initiales = prenom[0].toUpperCase() + "." + nomMilieu[0].toUpperCase() + "." + nomFamille[0].toUpperCase() + ".";

    let nomComplet = prenom[0].toUpperCase() + (prenom.slice(1)).toLowerCase() + " " + nomMilieu[0].toUpperCase() + (nomMilieu.slice(1)).toLowerCase() + " " + nomFamille[0].toUpperCase() + (nomFamille.slice(1)).toLowerCase();

    let nomUtilisateur = prenom[0].toLowerCase() + nomMilieu[0].toLowerCase() + nomFamille.toLowerCase();

    let reponse = "<br>Vos initiales sont " + initiales + "<div>Votre nom complet est: " + nomComplet + "<div>Votre nom d'utilisateur est: " + nomUtilisateur;
    
    affiche.innerHTML = reponse;
}