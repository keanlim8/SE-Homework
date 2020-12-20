// Week 2 Homework 2 Functions
// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1;
  }else if (num2>num1){
    return num2;
  }
}console.log(maxOfTwoNumbers(20,50));


//============================================================================
// 2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1,num2,num3) {
  if (num1>num2 && num1>num3) {
    return num1;
  }else if(num2>num1 && num2>num3){
    return num2;
  }else if (num3>num1 && num3>num2) {
     return num3;
  }
}console.log(maxOfThree(50,51,49));

//============================================================================
// 3. Write a function  isCharacterAVowel  that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isCharacterAVowel(x) {
  if (x == 'a' || x=='A' ||  x=='E'  || x =='e'
  ||  x=='O' || x =='o' ||x =='U' || x =='u') {
    return 'vowel';
  }else {
    return 'consonant';
  }
}console.log(isCharacterAVowel('A'));

 //============================================================================
 // 4. Define a function  sumArray  and a function  multiplyArray  that sums and multiplies (respectively) all the numbers in an array of numbers. For example,  sumArray([1,2,3,4])  should return 10, and  multiplyArray([1,2,3,4])  should return 24.
 function sumArray(x) {
	var sum = 0;
	for (var i = 0; i < x.length; i++) {
  		sum += x[i];
	}
   	return sum;
  }
console.log(sumArray([1,2,3,4]));

function multiplyArray(v){
   var multiplies=1;
   for (var i = 0; i <v.length; i++) {
   multiplies*=v[i];
}return multiplies;
}console.log(multiplyArray([1,2,3,4]));

//====================================================================
// 5. Write a function that returns the number of arguments passed to the function when called.
function x(a){

  var sum=0;
  for (var i=0; i<a.length; i++){
    sum+=a[i];
  }return sum;
}console.log(x(1,2,3,4));

//===========================================================
// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
function reverseString(input){
  var word="";
  for(var i=input.length-1; i>=0; i--)
  word+=input[i];
  return word;
}console.log(reverseString("jag testar"));

//===========================================================
// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
function findLongestWord(word){
  var longestWord=word.split(' ').sort(function (a, b)
  {
    return b.length-a.length; });
    return longestWord[0].length;
}console.log(findLongestWord("This is question Seven"));

//===========================================================
// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
function filterLongWords (array,num){
  newWord = [];
  for (var i = 0; i < array.length; i++){
    if(array[i].length > num){
      newWord.push(array[i]);
    }
  }
  return newWord;
}console.log(filterLongWords(["MASSACHUSETTS", "NEWYORK", "MAINE", "DC"],3));
//=============================================================================
//Bonus
// 1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().
function reverseString(input){
  var word="";
  for(var i=input.length-1; i>=0; i--)
  word+=input[i];
  return word;
}console.log(reverseString("salohcS reP"));
