const path = require('path');
const http = require('http');
const express = require('express');
const routes = require('./routes');

// SERVER
const hostname = 'localhost';
const port = 3000;
const app = express();
const server = http.createServer(app);

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/', routes);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
