// Sum All Primes
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const sumPrimes = (number) => {
    let sum = 0;
    for (let i = 0; i <= number; i++){
        if (isPrime(i)){
            sum += i;
        }
    }
    return sum;
}

console.log(sumPrimes(50));
