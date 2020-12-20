// Week 2 Day 1 Morning Lab

// 1. Write a JavaScript display the larger of two integers
const num = 100
const num2 = 99

if (num < num2) {
    console.log(num2 + " is larger")
} else if (num === num2) {
    console.log("both numbers are the same")
} else {
    console.log(num + " is larger")
}

// 2. Write an if/else statement for the following requirements:

// If student gets 90 or higher: console log  A
// If students get 80 or above: console log B
// If students get 70 or above: console log C
// If students get 55 or above: console log D
// Any grade lower than 55 is F

const grade = 50

if (grade >= 90) {
    console.log('A')
} else if (grade >= 80) {
    console.log('B')
} else if (grade >= 70) {
    console.log('C')
} else if (grade >= 55) {
    console.log('D')
} else {
    console.log('F')
}


// 3. Write a JavaScript program that displays
// "Good Morning" if time is between 5AM-11:59
// "Good Afternoon" if time is between 12 - 16
// otherwise "Hey there"

const time = new Date().getHours() + ":" + new Date().getMinutes();
//const time = "16:10"
console.log (time);
if (time >= "5:00" || time <= "11:59") {
    console.log('Good Morning');
} else if (time >= "12:00" && time <= "16:00") {
    console.log('Good Afternoon');
} else {
   console.log('Hey there');
}
