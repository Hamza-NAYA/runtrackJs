const button = document.getElementById("button");
const compteurParagraphe = document.getElementById("compteur");

let compteur = 0;

button.addEventListener("click", function addOne() {
    compteur++;
    compteurParagraphe.textContent = compteur;
});