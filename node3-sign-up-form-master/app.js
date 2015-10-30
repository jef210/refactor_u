var fs = require('fs');

var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
// this stores the module.exports object contents
var formsController = require('./controllers/forms.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
// call the formsRedirect function within the formsController object. 
app.post('/formsubmit', formsController.formRedirect);
// call the formRender function from formsController object.
app.get('/success', formsController.formRender)



// first way w/out forms.js


// app.post('/formsubmit', function(req, res){
//   res.redirect('/success');
// });
// route handler logic that happens when the route is requested. define the functions in the app.get
// app.get('/success', function(req, res){
//   res.send('Success!');
// });
// app.get('/data', function(req, res){
//   // this callback function grabs data.txt. if there's no error it goes ahead and displays the text if not I get the error
//   fs.readFile('data.txt', function(err, data){
//     if(!err){
//   res.header('Content-Type', 'text/html'); 
//   res.send(data);
// } else {
//   res.send('sorry bro, you got an error');
// }
// });
//   // res.header('Content-Type', 'text/html'); 
//   // res.send(fileContents);
// });

var server = app.listen(3320, function() {
	console.log('Express server listening on port ' + server.address().port);
});
