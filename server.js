var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());


app.post('/', function(req, res) {
	res.send('accueilllllll');
});


// Créer un article et ensuite mettre à jour le fichier menu.json suite à création article 

app.post('/newPost', function(req, res) {
	console.log('/newPost');

	response = {
		title: req.body.title,
		content: req.body.content
	};

	console.log(response);
	res.send('response');
});


// Editer un article existant

app.post('/editPost', function(req, res) {
	console.log('/editPost');

	response = {
		title: req.body.title,
		content: req.body.content
	};
	// console.log(response);
		res.send('editionnnnn');
});


app.listen(3002, function() {
	console.log('J\'écoute');
});
