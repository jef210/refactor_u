// require the express framework
var express = require('express');
// tells it the path to the folder for rendering or for a static file server
var path = require('path');
// access to the request to the body part of the request - req.body - w/out it everything gets sent as a url
var bodyParser = require('body-parser');
var indexController = require('./controllers/indexController.js');
// makes data available from the model
var searchModel = require('./models/search-data.js');


// use predefined methods of express like set get use post
var app = express();

// view engine setup to be in the right directory
app.set('views', path.join(__dirname, 'views'));
// sets the render engine to jade
app.set('view engine', 'jade');

// sending json in the body gets parsed correctly
app.use(bodyParser.json());
// make sure get requests don't encode body into the url
app.use(bodyParser.urlencoded({ extended: false }));
// static file server public folder (no security checks)
// static server contains all the images the client needs all the time
app.use(express.static(path.join(__dirname, 'public')));

// defines route to view, or routes to other functionality
app.get('/', indexController.index);
// envokes indexController view
app.post('/search', indexController.search);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});



app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
