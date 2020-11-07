//Load Libraries
const express = require('express');
const app = express();
const path = require('path');

// Static folders and files: 
app.use('/assets', express.static(path.resolve('./') + '/assets'));
app.use('/dist', express.static(path.resolve('./') + '/dist'));

//Index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/html/home.html'));
});

app.listen(80, () => {
	console.log('Example app listening on port 80!');
});
