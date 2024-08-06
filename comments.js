// Create web server

const http = require('http');
const url = require('url');

// Define the request handler function
const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
};

// Create the server
const server = http.createServer(requestHandler);

// Start the server and listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});