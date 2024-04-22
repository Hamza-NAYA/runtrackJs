function jourTravaille(date) {

    const joursFeries2024 = [
        new Date(2024, 0, 1),  // Nouvel An
        new Date(2024, 3, 1),  // Lundi de Pâques
        new Date(2024, 4, 1),  // Fête du Travail
        new Date(2024, 4, 8),  // Victoire 1945
        new Date(2024, 5, 30), // Ascension
        new Date(2024, 6, 14), // Fête nationale
        new Date(2024, 7, 15), // Assomption
        new Date(2024, 10, 1), // Toussaint
        new Date(2024, 10, 11), // Armistice 1918
        new Date(2024, 11, 25) // Noël
    ];

    for (const jourFerie of joursFeries2024) {
        if (date.getTime() === jourFerie.getTime()) {
            console.log(`Le ${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} est un jour férié`);
            return;
        }
    }

    const jourSemaine = date.getDay();
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} est un week-end`);
    } else {
        console.log(`Oui, ${date.getDate()} ${date.getMonth()+1} ${date.getFullYear()} est un jour travaillé`);
    }
}

const maDate = new Date(2024, 0, 2); 
jourTravaille(maDate);