document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", function() {
        fetch("expression.txt")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur de chargement du fichier.");
                }
                return response.text();
            })
            .then(data => {
                const paragraph = document.createElement("p");
                paragraph.textContent = data;
                resultDiv.innerHTML = "";
                resultDiv.appendChild(paragraph);
            })
            .catch(error => {
                console.error("Erreur :", error);
                resultDiv.textContent = "Une erreur s'est produite lors du chargement du fichier.";
            });
    });
});
