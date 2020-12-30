//implemented code from Seetha
$(() => {
   const list = [];
   $('form').on('submit', (e) => { //event listener to submit button
     console.log($('#input-box').val());
     list.push($('#input-box').val()); //getting values from text box and adding to list
     e.preventDefault();
     $(e.currentTarget).trigger('reset');
     render();
   });

   const render = () => {
     //IDs are unique so generating ids dynamically for two buttons and two table datas.

     var buttonNum = "button" + (list.length - 1); //button id generated for completed button
     var buttonRem = "buttonRem" + (list.length - 1); //button id generated for remove button
     var tableDataId = "tdId" + (list.length - 1); // <td> ids are generated for hiding the data in column 1
     var tableDataId2 = "tdId2" + (list.length - 1); // <td> ids are generated for hiding the data in column 2

     //appending list to column 1 and add "completed" button to each list item
     $('div#column1').append(
       '<tr><td id=' + tableDataId + '>' +
       list[list.length - 1] +
       '</td></tr><tr><td><input type="submit" value="Completed" id=' + buttonNum + '>' + '</td></tr>')
       //add CSS style to  "completed" button
       $('#'+buttonNum).css('background-color','#6093F0');


     //now add event listener/handler to "completed" button
     $('#' + buttonNum).on('click', (event) => {
       //since buttonNum ids that we generate has string and number, just extracting the number which is same as array index of the item
       var num = buttonNum.substring(6);

       //when "completed" button is clicked move the item to column 2 and create button  "Remove"
       $('div#column2').append(
         '<tr><td id=' + tableDataId2 + '>' + list[num] + '</td></tr><tr><td><input type="submit" value="REMOVE" id=' + buttonRem + '>' + '</td></tr>')
         //add CSS style to  "Remove" button
         $('#'+buttonRem).css('background-color','#EE6394');

       //now hide the "completed" button
       $('#' + buttonNum).hide();
       //now hide the array list item from column 1
       $('#' + tableDataId).hide();

       //now add event listener/handler to "Remove" button
       $('#' + buttonRem).on('click', (event) => {
         //now hide the "remove" button
         $('#' + buttonRem).hide();
         //now hide the array list item from column 2
         $('#' + tableDataId2).hide();
       })
     })
   } //render end
 }) //document end
