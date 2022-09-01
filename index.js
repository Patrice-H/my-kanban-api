const { server, port, url } = require('./src/utils/config');

server.get('/', (req, res) => res.send('My Kanban API'));

server.listen(port, () => console.log(`Server listening on : ${url}:${port}`));
