function filterData() {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;

    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(pokemon => {
                return (id === '' || pokemon.id.toString() === id) &&
                       (name === '' || pokemon.name.english.toLowerCase().includes(name.toLowerCase())) &&
                       (type === '' || pokemon.type.includes(type));
            });

            displayData(filteredData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = '';

    if (data.length === 0) {
        outputDiv.textContent = "Aucun résultat trouvé.";
        return;
    }

    const ul = document.createElement('ul');
    data.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.english}, Type: ${pokemon.type.join(', ')}`;
        ul.appendChild(li);
    });

    outputDiv.appendChild(ul);
}
