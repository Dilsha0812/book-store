const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, singleBook, updateBook, deleteABook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();


// post a book
router.post("/create-book", verifyAdminToken, postABook)

//get all books

router.get("/",getAllBooks);

//single book
router.get("/:id",singleBook);

//update a book endpoint
router.put("/edit/:id",verifyAdminToken, updateBook);

//delete date a book 
router.delete("/:id",verifyAdminToken,deleteABook);



module.exports = router;