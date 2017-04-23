var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'pass@word1',
			database : 'estagio'
		});
}



module.exports = function() {
	return createDBConnection;
}
