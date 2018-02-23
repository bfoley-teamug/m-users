const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  name: String
});

//this creates a new model collection called user(1st arg)
//and it should come with a name and a string
const User = mongoose.model('user', UserSchema);

module.exports = User; 
