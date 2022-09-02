const readAlltasks = require('./src/routes/readAllTasks');
const readTaskById = require('./src/routes/readTaskById');
const { server, port, url } = require('./src/utils/config');

server.get('/', (req, res) => res.send('My Kanban API'));
readAlltasks(server);
readTaskById(server);

server.listen(port, () => console.log(`Server listening on : ${url}:${port}`));
