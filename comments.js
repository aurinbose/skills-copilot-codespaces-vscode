// Create web server
// Start web server
// Listen for requests
// Process requests
// Return response
// End connection

// 1. Create web server
const http = require('http');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const port = 3000;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // console.log(req.url);
  // res.end('Hello World');
  // 2. Process requests
  // 3. Return response
  // 4. End connection
  // res.end('Hello World');
  const url = req.url;
  const method = req.method;
  const headers = req.headers;
  // console.log(url);
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Comments</title></head>');
    res.write('<body>');
    res.write('<h1>Comments</h1>');
    res.write('<form action="/create-comment" method="POST">');
    res.write('<input type="text" name="comment" />');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (url === '/create-comment' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const comment = parsedBody.split('=')[1];
      // console.log(comment);
      // console.log(parsedBody);
      // console.log(qs.parse(parsedBody));
      // console.log(comment);
      fs.writeFileSync('comments.txt', comment);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  } else if (url === '/comments') {
    const comments = fs.readFileSync('comments.txt', 'utf-8');
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Comments</title></head>');
    res.write('<body>');
    res.write('<h1>Comments</h1>');
    res
        .write(`<p>${comments}</p>`);
    res.write('</body>');
    res.write('</html>');
    return res.end();
    } else if (url === '/create-comment' && method === 'GET') {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        }
}