$(document).on('ready', function() {
  
  var toggleEdit = function(){
    var edit = $('#edit');
    edit.toggleClass('active');
    if(edit.hasClass('active')){
      $('#toggle-edit').text('Close Edit');
    } else {
      $('#toggle-edit').text('Edit');
    }
  };

  $('#toggle-edit').on('click', function(){
    toggleEdit();
  });




  $('#edit-form').on('submit', function(e){
    e.preventDefault();

    $('#name-entry').text( $('#user-name').val() );
    $('#bio-value').text( $('#bio-edit').val() );
    $('#books-value').text( $('#books-edit').val() );
    $('#js-value').text( $('#js-edit').val() );

    toggleEdit();
  });
});