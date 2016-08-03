var express = require('express'),
	app 	= express(),
	morgan	= require('morgan'),
	fs 		= require('fs');


app.use(express.static('client'));
app.use(morgan('dev'))

app.get('/api/photos/projects', function(req, res) {
	res.sendFile(__dirname + "/data/projects.json")
})

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
}).listen( process.env.PORT ||8000 );