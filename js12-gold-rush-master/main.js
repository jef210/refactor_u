$(document).on('ready', function() {
	// function defines click event functionality for the marker
  $(document).on("click", function(event) {

  	// store the coordinates in a variable
  	// how does this trck the cursor?
  	var x = event.pageX;
  	var y = event.pageY;

  	// creates a variable called marker and defines the position parameters for the marker
  	var marker = $("<div class='mapclass'>you are here</div>");
  	marker.css({position: "absolute", top: y, left: x});

    // Bonus 1, part 1
    // on click this will show the prompt text entry box
    var promptNotes = prompt("Enter a note to be saved with your marker");
    // adds the notes class and stores the notes typed in the prompt
    var textarea = $("<div class='notes'></div>").append(promptNotes);
    // defines the position of the textarea when the click event occurs
    textarea.css({position: "absolute", top: y, left: x+40});
    // adds the marker and displays the marker text
  	$(".container").append(marker);

     // Bonus 1, part 2
    // var showNotes = $(".container").append(textarea);

    // displays the textarea on hover over the marker point 
    $(marker).hover(
        function () {
          $(".container").append(textarea);
        },
    // not entirely sure how this works yet. looks like it removes the last div from the container...maybe on hover leave?
        function () {
          $(".container").find("div:last").remove();
        }
      );

    // when the user clicks on another spot on the page this clears out the old click event and gets ready for another click event  
  	$(document).on("click", function() {
  		$(marker).remove();
      $(textarea).remove();

  	});
	});
});