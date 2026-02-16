const express = require('express');
const app = express();

const PORT = 3000;

// Sample Student Data
const students = [
    { id: 1, name: "Sushma", age: 20, course: "AIML" },
    { id: 2, name: "Arjun", age: 21, course: "CSE" },
    { id: 3, name: "Navya", age: 19, course: "ECE" }
];

// Middleware to log request method and URL
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Route: Home
app.get('/', (req, res) => {
    res.json({ message: "Welcome to Student Information Management System" });
});

// Route: Get All Students
app.get('/students', (req, res) => {
    res.json(students);
});

// Route: Get Student by ID
app.get('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);

    const student = students.find(s => s.id === studentId);

    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
