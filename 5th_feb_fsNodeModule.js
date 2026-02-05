// Import fs module (modern Node.js style)
const fs = require('node:fs');

// Write data to a file
fs.writeFileSync("data.txt", "Hello! This file is created using node:fs module");

// Read data from the file
const content = fs.readFileSync("data.txt", "utf8");

// Display file content
console.log("File Content:");
console.log(content);
