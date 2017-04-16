
var app = require('./config/custom-express.js')();
app.set('view engine', 'ejs');




app.listen(3000,function(){
	console.log('v8 runs great');

});

