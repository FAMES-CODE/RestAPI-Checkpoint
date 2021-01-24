const mongoose = require('../db');
const { Schema } = mongoose;

const usersSchema = new Schema({
	name: String,
});

const User = mongoose.model('User', usersSchema);


module.exports = User