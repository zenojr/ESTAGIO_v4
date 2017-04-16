var mysql = require('mysql');

function connectionFactory(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'pass@word1',
			database : 'GED'
		});
}


//wrapper
module.exports = function(){
	return connectionFactory();
}