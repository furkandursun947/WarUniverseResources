const mongoose = require('mongoose');
const autoIncrement = require("mongoose-auto-increment");

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    email: {
        type: String,
        unique: true
    },
    token: {
        type: String
    }
});


autoIncrement.initialize(mongoose.connection);
UserSchema.plugin(autoIncrement.plugin, {
    model: "User",
    field: "_id",
    startAt: 1,
    incrementBy: 1
});

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}