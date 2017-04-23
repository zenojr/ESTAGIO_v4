

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


}
