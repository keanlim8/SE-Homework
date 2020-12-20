// Week 2 Day 1 Afternoon Lab
/*For loops

1. Write a for loop for the given output:

 1, 3, 5, 7, 9
 2, 4, 6, 8, 10
2. write a for loop that iterates between 0 and 10 and prints all even numbers.

HINT: Read on Module/Remainder operator.

3. Write a for loop that iterates from 1 - 20. Prints “prime” for all prime numbers, “even” for all even numbers, and “odd” for all odd numbers.

Treat 2 as an even number and 1 & 3 as odd
4. Signup for codesmith:

For loops: https://csx.codesmith.io/units/precourse-part-2/challenge-for-loops-fundamentals*/

//1. Write a for loop for the given output:
//1, 3, 5, 7, 9
//2, 4, 6, 8, 10
var oddArray = [];

for (var x=1; x<=10; x += 2) {
  oddArray.push(x);
}
console.log(oddArray);

var evenArray = [];

for (var y=2; y<=10; y += 2) {
  evenArray.push(y);
}
console.log(evenArray);

//2. write a for loop that iterates between 0 and 10 and prints all even numbers.
for (var x=0; x<=10; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");
        }

}
