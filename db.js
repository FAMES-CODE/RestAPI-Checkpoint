
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true }, (err) => {
	if (!err) {
		console.log('Connection faite akhi');
	} else {
		console.log('Akhi nous avons une erreur , la voici: ' + err);
	}
});
module.exports = mongoose;
