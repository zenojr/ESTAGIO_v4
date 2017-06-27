var multer = require('multer');
var upload = multer();
var fs = require('fs');
var storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, 'uploads/')
	},
	filename: function(req, file, cb){
		var cont = 1;
		cb(null, file.originalname);
	}
});
var upload = multer({storage: storage});

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

		//res.sendFile(__dirname);
	});


app.get('/upload2', function(req,res){
		res.render('upload2');

		//res.sendFile(__dirname);
	});


app.post('/fazUpload', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any
  

  var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})


 
var upload = multer({ storage: storage });

  console.log(req.file);
  fs.readdir('uploads/', function(err, files){

  		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		
  	
  	var arquivos = files;
  	
  	for(var i = 0; i<arquivos.length;i++){
  		var arquivoBanco = [arquivos[i]];
  		
  	}
  	
  	console.log('arquivos BANCO ' + arquivoBanco);


  	produtosDAO.salvaCaminho(arquivoBanco, function(err, results){
			console.log('VAI PRO BANCO' + arquivoBanco);
			res.redirect('/upload2');
	});

	connection.end();

  	//console.log(arquivos);

  	
  });
  

  

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
