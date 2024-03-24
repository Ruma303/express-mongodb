const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    online: {
        type: Boolean,
        default: false
    },
    profile: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        dateOfBirth: {
            type: Date,
            required: true
        }
    },
    hobbies: [{
        type: String
    }],
    posts: [{
        post_id: {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        },
        title: String,
        body: String
    }]
}, { timestamps: true });


const User = mongoose.model('User', UserSchema);

module.exports = User;