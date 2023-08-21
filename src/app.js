const express = require('express');
const app = express();

const routes = require('./routes');
const sendError = require('@helper/sendError');
const rateLimit = require('@middleware/rateLimit');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(sendError);
app.use(...rateLimit);

app.use('/api/v1', routes);

module.exports = app