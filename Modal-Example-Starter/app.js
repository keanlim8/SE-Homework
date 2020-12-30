$(() => {

  /* Exercise Begin */
  // Grabbing About the Game button
  const $openBtn = $('#openModal');

  // Grabbing modal element
  const $modal = $('#modal');

  // Grabbing close button
  const $closeBtn = $('#close');


  // Event handler to open the modal
  const openModal = () => {
    $modal.css('display', 'block');
  }
  // Make a setTimeout for the modal to automatically pop-up after 5 seconds.
  setTimeout(openModal, 5000);

  // Event handler to close the modal
  const closeModal = () => {
    $modal.css('display', 'none');
  }

  //Add event listener to About the Game button
  $openBtn.on('click', openModal);

  //Add event listener to Close button
  $closeBtn.on('click', closeModal);

  /* Exercise End */

});
