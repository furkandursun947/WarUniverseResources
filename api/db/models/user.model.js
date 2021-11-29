const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Types.ObjectId,
        required: true,
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        unique: true,
    }
});


const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}