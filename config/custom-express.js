
var express = require('express');
var load = require('express-load');




module.exports = function(){
	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	app.use(express.static('./public'));//aponta para a pasta public utilizando o static do express

	load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

	return app
}
