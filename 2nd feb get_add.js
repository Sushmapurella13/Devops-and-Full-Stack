const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/add")) {
    const q = url.parse(req.url, true).query;

    const a = Number(q.a);
    const b = Number(q.b);

    const sum = a + b;

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Sum is ${sum}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid URL");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
