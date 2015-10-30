 var Applicant = require('./applicant.js');

 Applicant.find({}, function(err, documents){
   if(documents.length === 0){
    // Prefill the empty database with some Beer

    var joe = new Applicant({
        name: 'Joe',
        bio: 'yo',
        skills: 'none',
        years: 1,
        why: 'yeah'
     });
    joe.save();
    }
});


