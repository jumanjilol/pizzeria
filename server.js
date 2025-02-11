// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const hostname = '192.168.1.49'; // Or 'localhost'
// const port = 3000;

// const server = http.createServer((req, res) => {
//   const url = req.url === '/' ? '/index.html' : req.url; // Default to index.html
//   const filePath = path.join(__dirname, url); // Construct the file path
//   const extname = path.extname(filePath);      // Get the file extension

//   const mimeTypes = {
//     '.html': 'text/html',
//     '.css': 'text/css',
//     '.js': 'text/javascript',
//     '.json': 'application/json',
//     '.png': 'image/png',
//     '.jpg': 'image/jpeg',
//     '.gif': 'image/gif',
//     '.ico': 'image/x-icon'
//   };

//   const contentType = mimeTypes[extname] || 'text/plain'; // Default to plain text

//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code === 'ENOENT') { // File not found
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h1>404 Not Found</h1>');
//       } else { // Some other error (e.g., permission denied)
//         res.writeHead(500, { 'Content-Type': 'text/html' });
//         res.end('<h1>500 Internal Server Error</h1>');
//         console.error(err); // Log the error for debugging
//       }
//     } else { // Success!
//       res.writeHead(200, { 'Content-Type': contentType });
//       res.end(content);
//     }
//   });
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });