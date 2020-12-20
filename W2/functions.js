// Week 2 Day 3 Morning Lab
// 1. Write a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
// Do some googling to figure this out if you forget how conditionals work.
function maxOfTwoNumbers(num1,num2){
  if(num1>num2){
    return num1;
  }else if (num2>num1){
    return num2;
  }
}console.log(maxOfTwoNumbers(400,250));

//============================================================================================
// 2. Write a function maxOfThree that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1,num2,num3) {
  if (num1>num2 && num1>num3) {
    return num1;
  }else if(num2>num1 && num2>num3){
    return num2;
  }else if (num3>num1 && num3>num2) {
     return num3;
  }
}console.log(maxOfThree(100,500,250));

//============================================================================================
// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise
function isCharacterAVowel(x) {
  if (x == 'a' || x=='A' ||  x=='E'  || x =='e'
  ||  x=='O' || x =='o' ||x =='U' || x =='u') {
    return 'vowel';
  }else {
    return 'consonant';
  }
}console.log(isCharacterAVowel('O'));

//============================================================================================
// 4. Write a function charCount that takes a string and returns the length of the string.
function charCount(word){
  return word.length;
}console.log(charCount("Bostononian"));

//============================================================================================
// 5. Write a function vowelCount that takes a String and returns the number of vowels in the String. add a check for the string to be of 10 or less characters
function countVowel(str) {
  if (str.length<=10) {
    const count = str.match(/[aeiou]/gi).length;
    return count;
  }else {
    return "please input less than 10 character"
  }

}console.log(countVowel("perscholas"));
