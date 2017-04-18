
var express = require('express');
var consign = require('consign');
var ejs = require('ejs');



module.exports = function(){


	var app = express();
	app.set('view engine', 'ejs');
	app.use(express.static('./public'));//aponta para a pasta public utilizando o static do express

	consign()
		.include('controllers')
		.then('views')
		.then('infra')
		.into(app);

	return app
}
