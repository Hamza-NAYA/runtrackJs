function jsonValueKey(jsonString, key) {
    try {
        const data = JSON.parse(jsonString);
        return data[key];
    } catch (error) {
        console.error("Erreur :", error);
        return null;
    }
}

const jsonString = `{
    "name": "La Plateforme",
    "address": "8 rue d'Hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

const key = 'city';
const value = jsonValueKey(jsonString, key);
console.log(value);