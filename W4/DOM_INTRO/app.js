//console.log("Stranger things are coding");
// const addH2 = () => {
//   let $h2 = $('<h2>').text("Just getting Started");//the variable $h2 is assigned with <h2> tag with different text
//   $('body').append($h2); // appending this $h2 to the body
// }
//
// addH2();



const generateSquares = (numberOfSquares) => {
  for (let i = 1; i <= numberOfSquares; i++) {
    console.log(i);
    const $square = $('<div>').addClass('square');
    $square.css('background-color', randColorRGB());
    $square.text(i);
    $square.attr('id','square' + i);
    $('body').append($square);
  }
}


$(() =>{
generateSquares(1000);

});

const randColorRGB = () => {
const red = Math.floor(Math.random() * 256);
const green = Math.floor(Math.random() * 256);
const blue = Math.floor(Math.random() * 256);
return "rgb(" + red + "," + green + "," +blue + ")";
}
