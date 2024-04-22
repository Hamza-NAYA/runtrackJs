function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2, end=Math.sqrt(n); i <= end; i++)
        if (n % i == 0) {
            return false;
        }
    return true;
}

function sommeNombresPremiers (nb1, nb2) {
    if (isPrime(nb1) && isPrime(nb2)) {
        console.log(nb1 + nb2)
    } else {
        console.log(false)
    }
}

sommeNombresPremiers(13, 101383)