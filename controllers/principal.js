//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	app.get('/principal',function(req,res){
		var connection = app.infra.connectionFactory;
		var usuariosBanco = app.infra.usuariosBanco;
		var diretoriosBanco = app.infra.diretoriosBanco;

		//usuariosBanco.lista(connection,function(err,results){
		//	res.send(results);
			//res.render('principal',{lista:results}); 		
		//});

		diretoriosBanco.lista(connection,function(err,results){
			//res.send(results);
			res.render('principal',{lista:results}); 		
		});

		
	})

	app.get('/teste',function(req,res){
		res.render('teste'); 	
	})

	
}

