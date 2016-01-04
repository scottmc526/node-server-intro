var http = require('http');
var fs = require('fs');

function indexPg (req,res) {
    fs.readFile('./index.html', function (err, data){
      if (err) {
        console.log('no');
      } else {
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200;
        res.write(data);
        res.end()
      }
    })
}

function handleRequest (req, res) {
  if (req.url === '/about.html') {
    fs.readFile('./about.html', function (err, data){
      if (err) {
        console.log('no');
      } else {
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200;
        res.write(data);
        res.end()
      }
    })
  } else if (req.url === '/faq.html') {
    fs.readFile('./faq.html', function (err, data){
      if (err) {
        console.log('no');
      } else {
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200;
        res.write(data);
        res.end()
      }
    })
  }
  else {
    res.setHeader('Content-Type','text/html')
    res.statusCode = 200;
    res.write("<img src='https://http.cat/404'>")
    res.end()
  }
}

var server = http.createServer(handleRequest);
var indexServer = http.createServer(indexPg);

server.listen(8000, function() {
  console.log("I'm listening on port 8000...")
});

indexServer.listen(1337, function (){
  console.log("I'm listening on port 1337");
})
