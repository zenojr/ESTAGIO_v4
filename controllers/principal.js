module.exports = function(app){
	app.get('/principal',function(req,res){
		res.render('principal'); 	
	})
}