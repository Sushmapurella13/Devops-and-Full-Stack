const http = require("http");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

  // GET request → show form
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <form method="POST">
        Name: <input name="name"><br><br>
        Email: <input name="email"><br><br>
        <button type="submit">Submit</button>
      </form>
    `);
  }

  // POST request → read form data
  else if (req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk;
    });

    req.on("end", () => {
      const data = querystring.parse(body);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Form submitted\nName: ${data.name}\nEmail: ${data.email}`);
    });
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
