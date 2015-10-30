
// define the controller
var formRedirect = function(req, res){
	res.redirect('/success');
};

var formRender = function(req, res){
	res.render('success');
};
// makes the controller available if we require it app.js
module.exports = {
	formRedirect: formRedirect,
	formRender: formRender
};