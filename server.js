//Load Libraries
const express = require('express');
const app = express();
const path = require('path');

//Index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/html/home.html'));
});

//home.js
app.get('/dist/main.js', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/home.js'));
});

app.listen(80, () => {
	console.log('Example app listening on port 80!');
});
