var fs = require('fs');
// read data.txt
// part1
// specify the content type being sent to the browser
// var fileContents = fs.readFileSync('data.txt');




var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

// part 3
// hit the data in-point it route you to this view function
app.get('/data', function(req, res){
  // this callback function grabs data.txt. if there's no error it goes ahead and displays the text if not I get the error
  fs.readFile('data.txt', function(err, data){
    if(!err){
  res.header('Content-Type', 'text/html'); 
  res.send(data);
} else {
  res.send('sorry bro, you got an error');
}
});
  // res.header('Content-Type', 'text/html'); 
  // res.send(fileContents);
});

var server = app.listen(7848, function() {
	console.log('Express server listening on port ' + server.address().port);

 
});
