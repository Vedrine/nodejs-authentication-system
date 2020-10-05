const path = require('path');
const http = require('http');
const express = require('express');
const routes = require('./app/api/routes');
const bodyParser = require('body-parser');

// SERVER
const hostname = 'localhost';
const port = 3000;
const app = express();
const server = http.createServer(app);

// PARSE APPLICATION/X-WWW-FORM-URLENCODED
app.use(bodyParser.urlencoded({ extended: false }));

// PARSE APPLICATION/JSON
app.use(bodyParser.json());

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'app/public')));

// ROUTES
app.use('/', routes);

// VIEW ENGINE
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
