
var multer = require('multer');
var upload = multer({dest : '../uploads/'})

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

	app.get('/detalhes', function(req, res){

			res.render('detalhes');
			//res.send(results)


		connection.end();
	});

	app.get('/gruposDir', function(req, res){

			res.render('gruposDir');
			//res.send(results)


		connection.end();
	});

	app.get('/upload', function(req,res){
		res.render('upload');

		res.sendFile(__dirname);
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
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.listaUser(function(err,results){

			res.render('cadastraUsuarios', {lista:results});
			//res.send(results)
		});

		connection.end();




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

	app.post('/excluiUser', function(req, res){
		var usuarios = req.body;
		console.log(usuarios);
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.excluiUser(usuarios, function(err, results){

		res.redirect('/cadastro');

		});

		connection.end();

	});

//cadastro de grupos

app.get('/cadastraGrupos', function(req,res){

	var connection = app.infra.connectionFactory();
	var produtosDAO = new app.infra.ProdutosDAO(connection);

	produtosDAO.listaGrupo(function(err,results){

	res.render('cadastraGrupos', {lista:results});
		//res.send(results)
	});

	connection.end();




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

	var connection = app.infra.connectionFactory();
	var produtosDAO = new app.infra.ProdutosDAO(connection);

	produtosDAO.listaDiretorios(function(err,results){

	res.render('cadastraDiretorios', {lista:results});
		//res.send(results)
	});

	connection.end();

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
