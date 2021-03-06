const express = require('express');
const path = require('path');
// const router = require('./routes.js');

const PORT = process.env.PORT || 7000;

const bodyParser = require('body-parser');

const app = express();
module.exports.app = app;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
// app.use('/', router);

app.listen(PORT);
