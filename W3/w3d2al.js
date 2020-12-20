// Week 3 Day 2 Afternoon Lab

/*1. Mr. Bonner (aka the Red Rocket, the Red Mamba) doesn't belong in this class of Hall Of Famers.
Remove this imposter immediately and assign it to a new variable named `notHof`
Console.log this new variable as well as the original list.*/

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];
console.log(hof);

var notHof = hof.pop();
console.log(hof);
console.log(notHof);
//===================================================================================================
/*2. As head of McDonald's New Product Division, your job is to test and approve all new menu items.
In the testMenu array below, all the items are approved except for "McLinguine" and "McChar-Siu Bau".
Remove these items from the list and console.log the updated testMenu.*/

var testMenu = [
"McPizza Burger",
"McFly Burger",
"McLinguine",
"McChar-Siu Bau",
"McChop-Chae",
"McPancit"
];

testMenu.splice(2,2);
console.log(testMenu);
//===================================================================================================
/*3. Increase the peace! Your job is quash the bitter rivalry and unite both the westSide and eastSide rappers into a new array called `oneLove`.
Console.log this new array.*/

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

var oneLove = [...westSide,...eastSide];

console.log(oneLove);

//===================================================================================================
/* 4. Some drama between you and the Kardashian's went down during last Saturday's potluck party.
You are no longer on speaking terms and need to unfriend the following from your facebook: "Yeezy", "Kimmy K" and "Lamar Odom".
Unfriend these ungrateful people and assign them to a new variable named `unFriend`.
Console.log this new variable.*/

var fbFriends = [
"Khalid",
"Yeezy",
"Kimmy K",
"Lamar Odom",
"Lebron",
"Warren Buffet"
];

var unFriend = fbFriends.slice(1,4);
console.log(unFriend);
//===================================================================================================
// 5.  create a user profile using map where following keys.

user1 = {

first_name: "Kean",

last_name: "Lim",

company: "PerScholas",

department: "SE"

};

console.log(user1);
