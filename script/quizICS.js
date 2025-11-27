function correctionReponses() {
    let divReponse = document.getElementById("divReponse");
    let question1 = document.getElementsByName("question1");
    let calculeur = 0;

    for (i = 0; i < question1.length; i++) {
        if (question1[i].checked) {
            if (question1[i].value == 4) {
                calculeur++;
            }
        }
    }

    let message = "<br>Réponses correctes:<br>" + calculeur + "/1";

    divReponse.innerHTML = message;
}