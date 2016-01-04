var http = require('http');
var fs = require('fs');
var fileName = './about.html'
var fileNameTwo = './faq.html'
var reader = fs.readFileSync(fileName, 'utf8')
var readerTwo = fs.readFileSync(fileNameTwo, 'utf8')


function handleRequest (req, res) {
  if (req.url === '/about') {
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
    res.write(reader);
    res.end()
  } else if (req.url === '/faq') {
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
    res.write(readerTwo);
    res.end()
  }
  else {
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
    res.write("<img src='https://http.cat/404'>")
    res.end()
  }
}

var server = http.createServer(handleRequest);

server.listen(8000, function() {
  console.log("I'm listening on port 8000...")
});
