const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');
  // res.write('index.html');
  
    fs.readFile('./views/index.html', null, function(error, data) {
        if (error) {
            // res.writeHead(404);
            res.write('File not found!');
            
        } else {
          res.writeHeader(200, {'Content-Type': 'text/html'});
            res.write(data);
           
        }
        res.end();
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});