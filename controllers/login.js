//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	app.get('/login',function(req,res){
		
		var connection = app.infra.connectionFactory();
		var usuariosBanco = app.infra.usuariosBanco(connection);

		usuariosBanco.lista(connection,function(err,results){
			res.render('login',{lista:results});
			console.log(results);

		});
		res.render('login');
		connection.end();

		
	});


}