$(document).on('ready', function(){
  var resultsTemplatePath = $('#result-template').html();
  var resultsTemplate = Handlebars.compile(resultsTemplatePath);
  $('#search-form').on('submit', function(e){
    e.preventDefault();
    var searchData = {
      searchTerm: $('#search-text').val()
    };
    console.log(searchData);

  $('#results').empty();
  // ajax call
   $.post('/search', searchData, function(results){
      for(var i = 0; i < results.length; i++){
        $('#results').append(resultsTemplate(results[i]))
      }
      console.log(results);
   });

  });
});


// search method on indexController

// set up new route to /search that will hook up the serach route to the indexController.search