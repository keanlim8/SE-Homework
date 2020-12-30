// // Week 4 Day 3 Morning Lab
// const list = [];
//
// $('form').on('submit', (event) => {
//   console.log($("#input-box").val());
//
//   list.push($("#input-box").val());
//
//   event.preventDefault();
//   $(event.currentTarget).trigger('reset');
//
//   render();
// });
//
// // const render = () => {
// //   console.log('list: ', list);
// //   list.forEach((item) => {
// //     $('ul').append('<li>' + item + '</li>');
// //     $('li').on('click', (event) => {
// //       $(event.currentTarget).css('text-decoration', 'line-through');
// //       $(event.currentTarget).effect('shake');
// //     })
// //     console.log(item);
// //   })
// // }; 
// const render = () => {
//   $('ul').append("<li>" + list[list.length-1] + "</li>");
//   $('li').on('click', (event) => {
//     $(event.currentTarget).css('text-decoration', 'line-through');
//     $(event.currentTarget).effect('shake');
//   });
// }
const toDoList = [];


const completeButton = "<br> <button type = 'submit'> COMPLETE </button>";
const removeButton = "<br> <button type = 'submit'> REMOVE </button>";


$('form').on('submit', (event) => {
  console.log( $('#input-box').val() );

  toDoList.push( $('#input-box').val() );

  event.preventDefault();
  $(event.currentTarget).trigger('reset');

  render("#to-do-list",toDoList);
});



const render = (listID,arrList)=>{
	arrLength = arrList.length - 1;
	console.log(arrLength);
    $(listID).append(`<li id = ${arrLength}> ${arrList[arrLength]} ${completeButton} </li>`);
    $('li').on('click', (event) =>{
    	$(event.currentTarget).css('text-decoration', 'line-through');
    });
}
