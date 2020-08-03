const fs = require('fs');
const path = require('path');
const {check, validationResult, body} = require('express-validator');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	admin:function(req, res){
		res.render('admin');
	}
};

module.exports = controller
