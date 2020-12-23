// Way 1
// $('#submit-btn').on('click', () => {
//   console.log($('#input-box').val());
// });

// Way 2
// $('form').on('submit', (event) => {
//   console.log($('#input-box').val());
//   event.preventDefault();
// });

// Way 3
$('form').on('submit', (e) => {
  console.log($('#input-box-fn').val());
  e.preventDefault();
  $(e.currentTarget).trigger('reset');
});
