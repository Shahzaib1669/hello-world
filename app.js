//use taskkill -f -im node.exe to kill it if u do ctrl b in sublime

const hbs = require('hbs')
const express = require('express');
const fs = require('fs')

const port = process.env.PORT || 8080;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
})

hbs.registerHelper('message', (text) => {
	return text.toUpperCase();
})

//Middleware is used in this code:
/*app.use((request, response, next) => {
	response.render('maintenance.hbs')
	var log = 'The site is down for maintenance'
	// next();
});*/

app.get('/', (request, response) => {
	response.send({
		name: 'Your Name',
		school: [
			'BCIT',
			'SFU',
			'UBC'
		]
	})
});


app.get('/info', (request, response) => {
	response.render('about.hbs', {
		title: 'About page',
		year: new Date().getFullYear(),
		welcome: 'Hello!'
	});
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(port, () => {
	console.log('Server is up on the port ${port}');
});

