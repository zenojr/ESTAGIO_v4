function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	this._connection.query('select * from arquivos', callback);
}


ProdutosDAO.prototype.salva = function(arquivos,callback){
	this._connection.query('insert into arquivos set ?',arquivos, callback);
}

module.exports = function(){
	return ProdutosDAO;
}
