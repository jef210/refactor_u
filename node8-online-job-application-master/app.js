
var express = require('express');
var bodyParser = require('body-parser');
var Applicant = require('./models/applicant');

// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/node8');

// Seed the DB
require('./models/applicantSeeds.js');
//  instance of express
var app = express();
// says i'm using jade
app.set('view engine', 'jade');
// when i use res.render it looks for views in the views folder
app.set('views', __dirname + '/views');
// same but for static files
app.use(express.static(__dirname + '/public'));
// access to the req.bodt feature of body-parser
app.use(bodyParser());
// route handler for rendering index.jade file
app.get('/', function(req, res) {
  res.render('index');
});

// displays a list of applicants
app.get('/applicants', function(req, res){
  res.render('applicants');
});

// creates and applicant
app.post('/applicant', function(req, res){
  // Here is where you need to get the data
  // from the post body and store it in the database
  console.log(req.body);
  var applicants = req.body;
  // access the schema object
  var newApplicant = new Applicant({
    name: req.body.name,
    bio: req.body.bio,
    skills: req.body.skills,
    years: req.body.years,
    why: req.body.why
  })
  newApplicant.save();
  res.render('applicants', req.body);
});

var server = app.listen(8441, function() {
  console.log('Express server listening on port ' + server.address().port);
});