const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required:true },
  confirmPassword: {
    type: String,
    required: true
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;