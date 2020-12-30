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
$(() => {
  const list = [];

  $('form').on('submit', (event) => {
    console.log($("#input-box").val());

    list.push($("#input-box").val());

    event.preventDefault();
    $(event.currentTarget).trigger('reset');

    render();
  });

  const render = () => {
    console.log('list: ', list);
    // list.forEach((item) => {
      $('#a').append('<li>' + list[list.length-1] + '</li>');
      $('li').on('click', (event) => {
        $(event.currentTarget).css('text-decoration');
        $(event.currentTarget).effect('shake');
        buttonnode.setAttribute('click', function(){.show('COMPLETED')})
      })
      console.log(list[list.length-1]);
    // })
  }
})
