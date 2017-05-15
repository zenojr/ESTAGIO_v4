

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


		//SCRIPT PARA UPLOAD DE ARQUIVOS COM MULTER

		app.post('/profile', uploadFile.single('avatar'), function (req, res, next) {
	  	// req.file is the `avatar` file
	  	// req.body will hold the text fields, if there were any
		})

		app.post('/photos/upload', uploadFile.array('photos', 12), function (req, res, next) {
	  	// req.files is array of `photos` files
	  	// req.body will contain the text fields, if there were any
		})

		var cpUpload = uploadFile.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
		app.post('/cool-profile', cpUpload, function (req, res, next) {
	  	// req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
		  //
		  // e.g.
		  //  req.files['avatar'][0] -> File
		  //  req.files['gallery'] -> Array
		  //
		  // req.body will contain the text fields, if there were any
		})




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
