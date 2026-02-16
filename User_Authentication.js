const express = require('express');
const app = express();

const PORT = 5000;

// Built-in middleware to parse JSON
app.use(express.json());

// In-memory user storage
let users = [];

// Simulated login session
let loggedInUser = null;

/* ---------------- REGISTER ---------------- */
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }

    // Check if user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    // Conceptual password hashing (simple simulation)
    const hashedPassword = password + "_hashed";

    const newUser = {
        username,
        password: hashedPassword
    };

    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
});

/* ---------------- LOGIN ---------------- */
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
        return res.status(401).json({ message: "Invalid username" });
    }

    if (user.password !== password + "_hashed") {
        return res.status(401).json({ message: "Invalid password" });
    }

    loggedInUser = user.username;

    res.json({ message: "Login successful" });
});

/* ---------------- AUTH MIDDLEWARE ---------------- */
function authMiddleware(req, res, next) {
    if (!loggedInUser) {
        return res.status(403).json({ message: "Access denied. Please login first." });
    }
    next();
}

/* ---------------- PROTECTED ROUTE ---------------- */
app.get('/dashboard', authMiddleware, (req, res) => {
    res.json({ message: `Welcome ${loggedInUser} to the dashboard` });
});

/* ---------------- START SERVER ---------------- */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
