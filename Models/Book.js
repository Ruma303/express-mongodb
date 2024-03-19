const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    publicationDate: {
        type: Date,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    coverImage: {
        type: String,
        required: false
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true // automatically add createdAt and updatedAt fields
});

module.exports = model("Book", BookSchema);