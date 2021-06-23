const http = require("http");

const PORT = 4040;

const server = http.createServer((request, response) => {
  // our server logic will go here
});

server.listen(PORT);
console.log(`Listening on port ${PORT}`);
