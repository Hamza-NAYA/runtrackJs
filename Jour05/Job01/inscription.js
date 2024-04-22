document.addEventListener("DOMContentLoaded", function() {
    const inscriptionForm = document.getElementById("inscriptionForm");
    const errorMessages = document.getElementById("errorMessages");

    inscriptionForm.addEventListener("submit", function(event) {
        event.preventDefault();


        const nom = inscriptionForm.nom.value.trim();
        const prenom = inscriptionForm.prenom.value.trim();
        const email = inscriptionForm.email.value.trim();
        const password = inscriptionForm.password.value.trim();
        const adresse = inscriptionForm.adresse.value.trim();
        const codePostal = inscriptionForm.codePostal.value.trim();

        let errors = "";
        if (nom === "") {
            errors += "Veuillez saisir votre nom.\n";
        }
        if (prenom === "") {
            errors += "Veuillez saisir votre prénom.\n";
        }
        if (email === "") {
            errors += "Veuillez saisir votre email.\n";
        }
        if (password === "") {
            errors += "Veuillez saisir votre mot de passe.\n";
        }
        if (adresse === "") {
            errors += "Veuillez saisir votre adresse.\n";
        }
        if (codePostal === "") {
            errors += "Veuillez saisir votre code postal.\n";
        }

        errorMessages.textContent = errors;

        if (errors === "") {

            alert("Inscription réussie ! (Note: Ce formulaire ne soumet pas réellement les données)");
        }
    });
});
