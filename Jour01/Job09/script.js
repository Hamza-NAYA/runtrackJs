function tri (tableau, order) {
    if (order === "asc") {
        tableau.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        tableau.sort(function(a, b ){
            return b - a;
        });
    } else {
        throw new Error("L'ordre doit être 'asc' (ascendant) ou 'desc' (descendant).");
    }
    return tableau
}

const numbers = [3, 20, 24 ,26, 28, 4, 5, 1, 6]

console.log(tri(numbers, "asc"))