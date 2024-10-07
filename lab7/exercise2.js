
//if the input is prime number, the promise resolves with { prime: true }.
//if the input is not a prime number, it rejects with { prime: false }.
const isPrime = async (n) => new Promise(function (resolve, reject) {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return reject({ prime: false });
    return resolve({ prime: n > 1 });
});


console.log('start');

isPrime(7).then(console.log)
    .catch(console.error);

try {
    const result = await isPrime(7);
    console.log(result);
} catch (e) {
    console.log(e);

}

console.log('end');
// start
// end
// { prime: true }
// Make changes to provided test and use async/await instead of .then() and .catch()