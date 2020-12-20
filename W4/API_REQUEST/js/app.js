

$(() => {
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
  }).then(
    (data) => {
      console.log(data);
      $('#title').html(data.Title);
      $('#year').html(data.Year);
      $('#rated').html(data.Rated);
    },
    () => {
      console.log("bad request");
    }
  );
})
