var request = require("request")
var express = require('express');
var app = express();

var url = "http://random.cat/meow"

app.get('/', function(req,res){
	request.get(url, function(error,response,body){

	if(!error && response.statusCode ==200){
		var cat = JSON.parse(body);
		console.log(JSON.parse(body).file);
		res.send("<img src=" + cat.file + " />");
	}

});
});

app.listen(5000,function(){
	console.log('running app on 5000');
});