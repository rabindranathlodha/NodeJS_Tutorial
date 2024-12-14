const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstName: {
    type:String,
    reuired: true,
  },
  lastName: {
    type:String,
    reuired: false,
  },
  email: {
    type:String,
    reuired: true,
    unique: true,
  },
  gender: {
    type:String,
  },
  jobTitle: {
    type:String,
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;