Meteor.startup(function(){
	process.env.MAIL_URL = 
	'YOUR URL HERE';
});

Meteor.methods({
	sendEmail: function(emailBody){
		Email.send({
		  to: 'peergroup1@yahoo.com',
		  from: 'PeerGroup1@outlook.com',
		  subject: 'errorReport',
		  text: emailBody
		 }, function(err){
		 	console.log("We have an", err);
		 });
		console.log("Sent email");
	}
});