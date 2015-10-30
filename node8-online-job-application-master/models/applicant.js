var mongoose = require('mongoose');


var applicantSchema = mongoose.Schema({
  name: String,
  bio: String,
  skills: String,
  years: Number,
  why: String
});


  
// assigns the schema to a collection called applicant
var Applicant = mongoose.model('applicant', applicantSchema);
// exporting Applicant variable
module.exports = Applicant;