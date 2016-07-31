'use strict';

require('dotenv').config();
var express = require('express');
var app = express();
var path = require('path');
///Config 
var port = Number(process.env.PORT || 5000);
/*
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/store';
var mongoOptions = {db: {safe: true}};
var Query = require('./model/query');

var request = require('request');

var Search = require('bing.search');

var mongoose = require('mongoose');
mongoose.connect(mongoUri, mongoOptions);
mongoose.connection.on('error', function(err){
	console.error('MongoDB connection error: '+err);
	process.exit(1);
});

app.use(express.static('views'));
////Routes
*/
app.get('/', function(req,res){
	res.sendFile(path.join(__dirname+'/views/look.html'));
});
/*
app.get('/api/imagesearch/:s',function(req,res){
var url = req.params.s
var size = req.query.offset || 6;
var date = new Date();
///enter into db
Query.create({
	query: url,
	date: date
}), function(err){if (err){return res.status(500).status(err);}}
var search = new Search(process.env.BINGKEY);
search.web(url,
  {top: size},
  function(err, results) {
    res.json(results);
  }
);
});

app.route('/api/latest/imagesearch').get(function(req,res){
	Query.find({})
		.sort({field:'asc',_id:-1})
		.limit(10)
		.exec(function(err,results){
			if(err) return res.status(500).send(err);
			res.json(results);
		});
});
*/
app.listen(port, function(){
	console.log('app running');
});
