const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model("User", UserSchema);