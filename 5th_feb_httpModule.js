// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Hello World! This is HTTP module in Node.js");
    res.end();
});

// Server listens on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
