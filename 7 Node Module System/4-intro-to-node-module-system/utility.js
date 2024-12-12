function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    let n = 3;
    const limit = Math.sqrt(num);
    while (n <= limit) {
        if (num % n === 0) return false;
        n += 2; // only want to consider odd numbers
    }
    return true;
}

module.exports = isPrime;