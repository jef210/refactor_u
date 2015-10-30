var searchModel = require('../models/search-data.js');


var findMatch = function(searchTerm, searchPool){
  var fixedSearchTerm = searchTerm.toLowerCase();
  var fixedSearchPool = searchPool.toLowerCase();
  

  if(fixedSearchPool.indexOf(fixedSearchTerm) > -1){
    return true;
  } else {
    return false;
  }
};

var indexController = {
	index: function(req, res){
		console.log('heyo');
		res.render('index');
	},
	search: function(req, res){
		var results = [];
    var searchRequest = req.body.searchTerm;
    // console.log(searchRequest);
    for(var category in searchModel){
      for(var item in searchModel[category]){
        console.log(item);
        if(findMatch(searchRequest, item)) {
        // if(findMatch(searchRequest, item) || findMatch(searchRequest, searchModel[category][item].desc)) {
          results.push({
            title: item,
            desc: searchModel[category][item].desc
          });
        }
      };
    };
    // console.log(results); 
		res.send(results);
	}
};




module.exports = indexController;

// use toLowercase on searchTerm and searchPool
// inside of search functionality store a var req.body.term 
// create results set which is the results array

