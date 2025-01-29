//create web server
//=====================

//import module

const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  let url = req.url;
  if (url === '/comments') {
    fs.readFile('comments.html', 'utf8', (err, data) => {
      if (err) {
        res.write('Error');
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write('Hello World');
    res.end();
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});