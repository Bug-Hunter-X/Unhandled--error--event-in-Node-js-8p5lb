const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.on('error', err => {
  console.error('Server error:', err);
  // Add appropriate error handling logic here, such as logging, retrying, or notifying.
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});