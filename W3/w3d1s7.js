// Week 3 Day 1 Slide 7
// Binary Search
var toFind = -11;
var arr = [1,2,3,4,5,6,7,8,9,10];
var firstIndex = 0;
var lastIndex = arr.length-1; // last index of an array = array length - 1
var midIndex = 0;
var found = false;
while (firstIndex <= lastIndex){
  midIndex = parseInt((firstIndex+lastIndex)/2);
  if(arr[midIndex] == toFind){
    found = true;
    console.log("Found");
    break;
  } else if(arr[midIndex] < toFind){
    firstIndex = ++midIndex;
    console.log("firstIndex" + firstIndex); //test
  } else {
    lastIndex = --midIndex;
    console.log("lastIndex"+lastIndex); //test
  }
}
if(found == false){
console.log("Not Found");
}
