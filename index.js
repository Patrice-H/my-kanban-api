const express = require('express');

const server = express();
const port = 3001;

server.get('/', (req, res) => res.send('Hello'));

server.listen(port, () =>
  console.log(`Server listening on : http://localhost:${port}`)
);
