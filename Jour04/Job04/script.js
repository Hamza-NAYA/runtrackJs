document.addEventListener("DOMContentLoaded", function() {
    const updateButton = document.getElementById("updateButton");
    const userTableBody = document.getElementById("userTableBody");

    function updateUserTable() {
        fetch('utilisateur.json')
            .then(response => response.json())
            .then(users => {

                userTableBody.innerHTML = '';

                users.forEach(user => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    `;
                    userTableBody.appendChild(row);
                });
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }

    updateButton.addEventListener("click", updateUserTable);

    updateUserTable();
});