var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/:location?', function(req, res) {
	var destination = req.params.location || 'Seville';
	
	var allDest = ['Seville', 'Canary Island', 'Cape Verder', 'Strait-of-Magellan', 'Guam', 'Philippines'];

	var nextDest = allDest[allDest.indexOf(destination)+1]

	res.render('variable', {
		nextDest: nextDest,
		destination: destination
	});

});


// this is what we did first
// app.get('/canary', function(req, res) {
//   res.render('canary');
// });
// app.get('/cape-verde', function(req, res) {
//   res.render('cape-verde');
// });
// app.get('/strait-of-magellan', function(req, res) {
//   res.render('strait-of-magellan');
// });
// app.get('/guam', function(req, res) {
//   res.render('guam');
// });
// app.get('/phillipines', function(req, res) {
//   res.render('phillipines');
// });


var server = app.listen(9215, function() {
	console.log('Express server listening on port ' + server.address().port);
});
