const url = require('url');

const myUrl = 'https://www.example.com:8080/path/page.html?name=Sushma&age=20#section1';

const parsedUrl = url.parse(myUrl, true);

console.log("Protocol:", parsedUrl.protocol);
console.log("Host:", parsedUrl.host);
console.log("Hostname:", parsedUrl.hostname);
console.log("Port:", parsedUrl.port);
console.log("Pathname:", parsedUrl.pathname);
console.log("Query:", parsedUrl.query);
console.log("Hash:", parsedUrl.hash);
