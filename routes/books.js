const { getAllBooks, getBookById, updateBookDetails, deleteBook, addBook } = require("../controller/books")

const express = require('express')
const router=express.Router()

router.get('/',getAllBooks)
router.get('/:id',getBookById)
router.post('/',addBook)

router.put('/:id',updateBookDetails)
router.delete('/:id',deleteBook)

module.exports=router;