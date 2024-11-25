const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks } = require('./book.controller');
const router = express.Router();


// post a book
router.post("/create-book", postABook)

//get all books

router.get("/",getAllBooks)

module.exports = router;