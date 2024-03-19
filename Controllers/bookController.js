const Book = require('../Models/Book');

const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        next(err);
    }
}

module.exports = { getAllBooks };