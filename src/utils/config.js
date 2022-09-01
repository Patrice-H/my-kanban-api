const express = require('express');

const server = express();
const port = 3001;
const url = 'http://localhost';

module.exports = {
  server,
  port,
  url,
};
