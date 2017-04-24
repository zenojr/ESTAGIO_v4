

module.exports = function(app){
	app.get('/principal', function(req, res) {
			var connection = app.infra.connectionFactory();
			var produtosDAO = new app.infra.ProdutosDAO(connection);

			produtosDAO.lista(function(err,results){
				res.render('principal', {lista:results});
				//res.send(results)
			});

			connection.end();

		});

	app.get('/upload', function(req,res){
		res.render('upload');
	});

	app.post('/salva', function(req, res){
		var arquivos = req.body;
		console.log(arquivos)
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.salva(arquivos, function(err, results){
			res.redirect('/upload');
		});

		connection.end();

	});


	app.get('/cadastro', function(req,res){
		res.render('cadastraUsuarios');
	});

	app.post('/saveUser', function(req, res){
		var usuarios = req.body;
		console.log(usuarios);
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.saveUser(usuarios, function(err, results){
			res.redirect('/cadastro');
		});

		connection.end();

	});


}
