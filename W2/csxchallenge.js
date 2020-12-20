// Week 2 Day 2 Afternoon Lab
//Challenge: While Loops - Conditional Expression
//Initialize a variable addThis to 0 and a variable sum to 0. Use a while loop to repeat a code block as long as addThis is less than 10. In the code block, add the value of addThis to sum, then increment addThis by 1. After the while loop runs, the value of sum should be the sum of the numbers 0 through 9.
//While loops - Conditional Expression: https://csx.codesmith.io/units/precourse-part-2/challenge-while-loops-conditional-expression
let addThis = 0;
let sum = 0;
while (addThis < 10) {
    sum += addThis
    addThis++
}

console.log(sum);
//===============================================================================
//Control Flow: https://csx.codesmith.io/units/precourse-part-2/challenge-control-flow-if-statements
//Challenge: control flow
//Use an if statement to check if num is greater than 100. If num is greater than 100, reassign the value of final to null. Otherwise, set final to be two times the value of num.
const num = 40;
let final;
if(num>100){
  final=null;
  console.log(final)
}else{
  final=2*num;
  console.log(final)
}

//===============================================================================
//Fizzbuzz: https://csx.codesmith.io/units/precourse-part-2/challenge-fizzbuzz
//Challenge: fizzbuzz
//Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

//Log fb to the console to see the output.

//Hint: Check out the remainder/modulo operator: %.
const fb = [];
for(var i=1; i<17; i++){

  if(i%5===0 && i%3===0){
    fb.push("fizzbuzz");
  }
  else if(i%5===0){
    fb.push("buzz");
  }
  else if(i%3===0){
    fb.push("fizz");
  }else {
    fb.push(i);
  }
}console.log(fb);
// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
