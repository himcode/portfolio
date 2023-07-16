const http = require('http');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.write('index.html');
  console.log(req.url);  
  url = req.url;
// console.log("test3");
    const home = fs.readFileSync('./views/index.html');
    const experience = fs.readFileSync('./views/experience.html');
    const skills = fs.readFileSync('./views/skills.html');
    const contact = fs.readFileSync('./views/contact.html');
    
  //   if (url == '/') {
  //     res.end(home);
  //   }else if (url == '/skills') {

  //     res.end(skills);
  //   }
  //   else if (url == '/experience') {
  //     res.end(experience);
    
  //   }else if (url == '/contact') {
  //     res.end(contact);
  //   }

  });


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});