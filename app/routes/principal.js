


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

	app.get('/busca', function(req, res){
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(err,results){
			res.render('busca', {lista:results});
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


		//SCRIPT PARA UPLOAD DE ARQUIVOS COM MULTER


		//FIM

		//SCRIPT BUSCA AVANCADA

		//FIM



	});

//cadastro de usuarios
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

//cadastro de grupos

app.get('/cadastraGrupos', function(req,res){
	res.render('cadastraGrupos');
});

app.post('/saveGroup', function(req, res){
	var grupo = req.body;
	console.log(grupo);
	var connection = app.infra.connectionFactory();
	var produtosDAO = new app.infra.ProdutosDAO(connection);

	produtosDAO.saveGroup(grupo, function(err, results){

		res.redirect('/cadastraGrupos');

	});

	connection.end();

});


//cadastro de diretorios

app.get('/cadastraDiretorios', function(req,res){
	res.render('cadastraDiretorios');
});

app.post('/saveDir', function(req, res){
	var diretorio = req.body;
	console.log(diretorio);
	var connection = app.infra.connectionFactory();
	var produtosDAO = new app.infra.ProdutosDAO(connection);

	produtosDAO.saveDir(diretorio, function(err, results){

		res.redirect('/cadastraDiretorios');

	});

	connection.end();

});


}
