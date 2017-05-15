function ProdutosDAO(connection){
	this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
	this._connection.query('select * from arquivos', callback);
}


ProdutosDAO.prototype.salva = function(arquivos,callback){
	this._connection.query('insert into arquivos set ?',arquivos, callback);
}

ProdutosDAO.prototype.saveUser = function(usuario,callback){
	this._connection.query('insert into usuarios set ?',usuario, callback);
}

ProdutosDAO.prototype.saveGroup = function(grupo,callback){
	this._connection.query('insert into grupos set ?',grupo, callback);
}


ProdutosDAO.prototype.saveDir = function(diretorio,callback){
	this._connection.query('insert into diretorios set ?',diretorio, callback);
}


module.exports = function(){
	return ProdutosDAO;
}
