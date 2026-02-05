const fs = require('fs');

fs.writeFile("test.txt", "Hello FS Module", (err) => {
  if (err) throw err;

  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
