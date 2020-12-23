$(() => {
  const list = [];

  $('form').on('submit', (event) => {
    console.log($('#input-box').val());
    list.push($('#input-box').val());
    event.preventDefault();
    $(event.currentTarget).trigger('reset');
    render();
  });

  // const render = () => {
  //   console.log('list:', list);
  //   $('ul').empty();
  //   list.forEach((item) => {
  //     $('ul').append('<li>' + item + '</li>');
  //   });
  const render = () => {
    $('ul').append("<li>" + list[list.length-1] + "</li>");
    $('li').on('click', (event) => {
      $(event.currentTarget).css('text-decoration', 'line-through');
      $(event.currentTarget).effect('shake');
    });
  }
})
