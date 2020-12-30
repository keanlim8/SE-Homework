
// $('#submit-btn').on('click', () => {
//   console.log($('input-box').val());
// });


$('form').on('submit', (event) => {
  console.log($('#input-box-fn').val());
  event.preventDefault();
  $(event.currentTarget).trigger('reset');
});
