const Book = require("../models/books");

const addBook = async (req, res) => {
  try {
    const { id, title, author, publicationYear } = req.body;
    const data = await Book.create({ id, title, author, publicationYear });

    res.status(200).json({ message: "Book added Sucessfully" });
  } catch (error) {
    res.status(4500).json({ message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const data = await Book.find();
    res.status(200).json({ Books: data });
  } catch (error) {
    res.status(4500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Book id required" });
    }
    const data = await Book.findById(id);

    if (!data) {
      return res.status(400).json({ message: "Book not found" });
    }
    res.status(200).json({ Books: data });
  } catch (error) {
    res.status(4500).json({ message: error.message });
  }
};

const updateBookDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const { updatedDetails } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Book ID required" });
    }

    const updatedBook = await Book.findByIdAndUpdate(id, updatedDetails, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ updatedBookDetails: updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "Book id required" });
    }

    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  updateBookDetails,
  deleteBook,
  addBook,
};
