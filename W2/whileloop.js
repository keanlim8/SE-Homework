// Week 2 Day 2 Morning Lab
// While loop
// 1. Using a while loop, print out all prime numbers between 0 - 20.
// 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end.
// 3. Use a while loop to print out the even number from 1 to 20.
//      (You'll need Modulus for this. And an IF Statement.)
// 4.While loops Fundamentals: https://csx.codesmith.io/units/precourse-part-2/challenge-while-loops-fundamentals


// 1. Using a while loop, print out all prime numbers between 0 - 20.
let prime = 1;
while (prime < 20) {
    let test = 2;
    while (prime >= test) {
        if (prime % test === 0 && prime != test) {
            break;
        } else if (prime === test) {
            console.log(prime);
            break;
        } else {
            test++;
        }
    }
    prime++;
}

// 2. Use a while loop to add up the numbers 1 to 20 into one variable. Print out the sum at the end.
let i = 1;
let accumulator = 0;
while (i <= 20) {
    accumulator += i; // if accum = 0 and i = 12 then accumulator += i would set accumulator to 12
    i++;
    console.log (accumulator);
}


// 3. Use a while loop to print out the even number from 1 to 20.
//      (You'll need Modulus for this. And an IF Statement.)
let e = 0
while (e < 20) {
    e++;
    if (e % 2 === 0) {
        console.log (e)
    }
}
