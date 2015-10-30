// Part 1

// $(document).on('ready', function() {
//   $('#btn1').click(function() {
//   	console.log('message');
//   	$('body').append('<p>sometext</p>');
//   });
//   $('#btn2').click(function(){
//   	console.log('message2');
//   	$('body').append('<h1>someothertext</h1>');
//   });
//   $('#btn3').click(function(){
//   	console.log('message3');
//   	// $('body').append('<ul><li>someAtext</li><li>someAtext</li><li>someAtext</li></ul>');
//   	var ul = $('<ul>');
//   	ul.append('<li>test</li>');
//   	ul.append('<li>test</li>');
//   	ul.append('<li>test</li>');
//   	$('body').append(ul);
//   });
// });

// Part 2
// $(document).on('ready', function() {

// 	$('p').on('mouseover', function() {
// 		$(this).css({'color': 'pink'});
// 		console.log('mouseover');
// 	});
// 	$('h1').append(' !');
// 	$('a').on('click', function(){
		
// 		if(confirm('are you sure?') === false){
// 			$(this).remove();
// 			return false;
// 		}


// 	});

// });

// Part 3
$(document).on('ready', function() {
	$('.btn').on('click', function() {
		$('.btn').after('<div class="popup">sometext<div class="x">X</div></div>');
			$('.x').on('click', function(){
				$('.popup').remove('.popup');
			});

	});
	

});









































