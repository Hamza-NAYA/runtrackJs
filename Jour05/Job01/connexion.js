document.addEventListener("DOMContentLoaded", function() {
    const connexionForm = document.getElementById("connexionForm");
    const errorMessages = document.getElementById("errorMessages");

    connexionForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = connexionForm.email.value.trim();
        const password = connexionForm.password.value.trim();

        let errors = "";
        if (email === "") {
            errors += "Veuillez saisir votre email.\n";
        }
        if (password === "") {
            errors += "Veuillez saisir votre mot de passe.\n";
        }


        errorMessages.textContent = errors;

        if (errors === "") {

            alert("Connexion réussie ! (Note: Ce formulaire ne soumet pas réellement les données)");
        }
    });
});
