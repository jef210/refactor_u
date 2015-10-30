$(document).on('ready', function(){
  var count = 0;
  
  $('#ajax-button').on('click', function(){
  // Make an AJAX request
    var toSend = {
    message: 'Hello ' + count
    };
     $.post('/users', toSend, function(data){
    console.log( data );
    });
     // increment the count each time I click the button
     count++;
  });
});