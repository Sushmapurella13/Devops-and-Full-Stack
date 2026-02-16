const express = require('express');
const app = express();
const PORT = 4000;

// Middleware to read JSON
app.use(express.json());

// In-memory data
let books = [];

// GET - Fetch all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST - Add new book
app.post('/books', (req, res) => {
    const { title, author, price } = req.body;

    if (!title || !author || !price) {
        return res.status(400).json({ message: "All fields required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        price
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT - Update book
app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    book.price = req.body.price || book.price;

    res.json(book);
});

// DELETE - Remove book
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(index, 1);
    res.json({ message: "Book deleted successfully" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
