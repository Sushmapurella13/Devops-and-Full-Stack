const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
  fs.readFile('menubar.html', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end("404 Not Found");
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
