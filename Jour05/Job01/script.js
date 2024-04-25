$(document).ready(function () {
    $("#login").on("click", function(event) {
        event.preventDefault();
        validateLoginEmail($("#email").val(), $("#emailError"));
        validateLoginPassword($("#password").val(), $("#passwordError"));
    });

    $("#register").on("click", function(event) {
        event.preventDefault();
        validateNom($("#nom").val(), $("#nomError"));
        validatePrenom($("#prenom").val(), $("#prenomError"));
        validateRegistrationEmail($("#email").val(), $("#emailError"));
        validateRegistrationPassword($("#password").val(), $("#passwordError"));
        validateConfirmPassword($("#password").val(), $("#confirmPassword").val(), $("#confirmPasswordError"));
        validateAddress($("#adresse").val(), $("#adresseError"));
        validatePostalCode($("#codePostal").val(), $("#codePostalError"));
    });

    function validateNom(value, errorElement) {
        if (value === "" || !/^[a-zA-Z]+$/.test(value)) {
            errorElement.text("Veuillez renseigner votre nom avec uniquement des lettres");
        } else {
            errorElement.text("");
        }
    }

    function validatePrenom(value, errorElement) {
        if (value === "" || !/^[a-zA-Z]+$/.test(value)) {
            errorElement.text("Veuillez renseigner votre prenom avec uniquement des lettres");
        } else {
            errorElement.text("");
        }
    }

    function validateRegistrationPassword(password, errorElement) {
        if (password === "") {
            errorElement.text("Veuillez renseigner votre mot de passe");
        } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
            errorElement.text("Veuillez renseigner un mot de passe valide : au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial");
        } else {
            errorElement.text("");
        }
    }

    function validateAddress(value, errorElement) {
        if (value === "" || !/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
            errorElement.text("Veuillez renseigner une adresse valide");
        } else {
            errorElement.text("");
        }
    }

    function validatePostalCode(value, errorElement) {
        if (value === "" || !/^\d+$/.test(value)) {
            errorElement.text("Veuillez renseigner un code postal valide");
        } else {
            errorElement.text("");
        }
    }

    function validateLoginEmail(email, errorElement) {
        if (email === "") {
            errorElement.text("Veuillez renseigner votre email");
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/.test(email)) {
            errorElement.text("Veuillez renseigner un email valide");
        } else {
            errorElement.text("");
        }
    }

    function validateRegistrationEmail(email, errorElement) {
        if (email === "") {
            errorElement.text("Veuillez renseigner votre email");
        } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,4}$/.test(email)) {
            errorElement.text("Veuillez renseigner un email valide");
        } else {
            errorElement.text("");
        }
    }

    function validateLoginPassword(password, errorElement) {
        if (password === "") {
            errorElement.text("Veuillez renseigner votre mot de passe");
        } else {
            errorElement.text("");
        }
    }

    function validateConfirmPassword(password, confirmPassword, errorElement) {
        if (confirmPassword === "" || password !== confirmPassword) {
            errorElement.text("Le mot de passe ne correspond pas");
        } else {
            errorElement.text("");
        }
    }
});
