//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	app.get('/principal',function(req,res){
			res.render('principal');
		});





	app.get('/teste',function(req,res){
		res.render('teste');
	})


}
