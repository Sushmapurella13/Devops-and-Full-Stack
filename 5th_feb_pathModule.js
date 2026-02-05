// Import path module
const path = require('path');

// Sample file path
const filePath = "C:/Users/Sushma/Documents/node/index.js";

// Path operations
console.log("Directory Name:", path.dirname(filePath));
console.log("Base Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));
console.log("Parsed Path:", path.parse(filePath));
console.log("Joined Path:", path.join("C:", "Users", "Sushma", "node", "app.js"));
