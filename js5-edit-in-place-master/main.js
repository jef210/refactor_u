$(document).on('ready', function() {
  $('.input-box').hide();
  
  	// event handler for on click
  $('.entry-box').click(function (){
  	// variable created to capture text from entry box
  	var entryBoxText = $('.entry-box').text();
		// console test to console
  	console.log(entryBoxText);
  	// hiding the entry box
  	$('.entry-box').hide();
  	// show input box
  	$('.input-box').show();
  	// adding value of entrybox to inputbox
  	// $('.input-box').val(entryBoxText);
    $('.input-box').val('');
  	// focusing the cursor on the input box
  	$('.input-box').focus();
  });
		// event handler for outro sequence
	// $('.input-box').click(function() {
		// 2nd event handler on the blur
		$('.input-box').blur(function() {
		// when i click outside the entry input-box
    var inputBoxText = $('.input-box').val();
    // console test to console
    console.log(inputBoxText);
		// show entry-box
    $('.entry-box').show();
		// hide input-box
    $('.input-box').hide();
		// grab text from input-box and add to entry-box
    // if statement returns empty string when user clicks outside the box
    // !== means does not equal the empty string
      if(inputBoxText !== '') {
         $('.entry-box').text(inputBoxText);
      }
    // console.log(inputBoxText);
   });
	// });
});




// 3 people 
// current self
// future self
// other people

// text talks to html elements
// val talks to inputs
