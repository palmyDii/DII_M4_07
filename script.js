let n=15;
//display all prime number from 2-n

console.log(`The prime numbers between 0 and ${n} are:`);

for (let i = 0; i <= n; i++) {
    let isPrime = 1;
    for (let j = 2; j*j < i; j++) {
        if (i % j == 0) {
            isPrime = 0;
            break;
        }
    }

    if (i > 1 && isPrime == 1) {
        console.log(i);
    }
}