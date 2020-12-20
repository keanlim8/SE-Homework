console.log("for loop ==========================");
//for loop
for(i=1; i<=10; i++){
  console.log(i);
  if(i==5)
    break;
}

console.log("while loop ==========================");
//while loop
var i =1;
while(i<=10){
  console.log(i);
  if(i==5)
    break;
  i++;
}

console.log("do..while loop ==========================");
//do..while loop
var i =1;
do{
  console.log(i);
  if(i==5)
    break;
  i++;
}while(i<=10);

console.log("foreach loop ==========================");
//foreach OR forin
var sub = [1,2,3,4,5,6,7,8,9,10];
for(i in sub){
  console.log(sub[i]);
  if(sub[i]==5)
    break;
}
