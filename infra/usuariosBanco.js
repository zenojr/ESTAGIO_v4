module.exports = function(){
	this.lista = function(connection,callback){ //recebe a connection e retorna o callback
		connection.query('select * from usuario',callback);
	}
	return this;
}