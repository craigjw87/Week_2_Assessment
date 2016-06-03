// x-When the page loads, have a button on the DOM that says 'generate'.
// x-Upon clicking on that button, append a new container onto the DOM.
// x-That container should have two buttons, one that reads 'delete', the other that reads 'change'.
// x-Additionally, there should be text that provides a number. The number should be the number of times the 'generate row' button has been clicked.
// ?-The delete button should delete JUST the container that the button is in.
// TODO-The change button should change the background-color of the container to red.
// x-The default or 'normal' state of the background-color should be yellow.
// Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.

// EXTRA GOALS
// PUT TOTAL CLICKS IN SEPERATE DIV BY GENERATE BUTTON
// CHANGE BUTTONS WITH BOOTSTRAP

// Setting global variable for total clicks
var totalClicks = 0;

// Getting dat JQuery working
$(document).ready(function(){
  $('#generateButton').on("click", function(){
// Add 1 everytime button is clicked and show on DOM
    totalClicks += 1;
  $("body").append( totalClicks );
// Button works console.log("Hi mom");
// Create new variable
  var newContainer = document.createElement ( "div" );

// Set class
  newContainer.className = "container";
// Set id
  newContainer.id = totalClicks;
// Create change color Button
  var colorButton = document.createElement ( "button" );
  colorButton.textContent = "color";
  colorButton.className = "color";
  colorButton.id = "color";
  newContainer.appendChild ( colorButton );
// Create delete Button
  var deleteButton = document.createElement ( "button" );
  deleteButton.textContent = "delete";
  deleteButton.className = "delete";
  newContainer.appendChild ( deleteButton );
// Show in DOM
  $("body").append (newContainer);
  });
});
  // Change color button functionality *ORIGINALY HAD THIS BELOW THE DELETE BUTTON FUNCIONALITY AND REALIZED I COULDN'T ACTIVATE THIS BUTTON TILL I ACTIVATED THE DELETE BUTTON*

  $(document).on("click", ".color", function(){
  // console.log("hi");
  $("div").on("click", function() {
      $(this).toggleClass('back-red');
  });
});


//
// $("#color").on('click',function(){
//     $(this).toggleClass("div");
// });


  // Delete button functionality
  $(document).on("click", ".delete", function() {
  // Button works console.log("hi");
    $(this).parent().remove();

  });





//#=id  .=class
