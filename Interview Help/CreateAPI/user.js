// User.js
var user mongoose = require('mongoose');
var UserSchema = new mongoose.Schema{{
	name: String,
	email: String,
	password: String
}};