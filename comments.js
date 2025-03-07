// Create web server
// Create a server that listens on port 3000
// When the server receives a request, it responds with a JSON object that looks like this:
// {
//   "comments": [
//     {
//       "username": "Todd",
//       "comment": "this is a comment!"
//     },
//     {
//       "username": "John",
//       "comment": "this is a better comment!"
//     }
//   ]
// }
// Use the JSON object above to create a response to the user
// The server should respond to any request with the JSON object above
// Run the server and test it with curl

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(fs.readFileSync('comments.json'));
});

server.listen(3000, 'localhost', () => {
  console.log('Server listening on port 3000');
});