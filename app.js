const http = require('http');
const port = process.env.PORT || 3000
var os = require('os')

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('操作系统:'+os.type());
});

server.listen(port,() => {
  console.log(`start!`);
});
