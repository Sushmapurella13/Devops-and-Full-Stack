// Import os module
const os = require('os');

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus().length);
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Home Directory:", os.homedir());
console.log("Uptime (seconds):", os.uptime());
