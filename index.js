const { server, port, url } = require('./src/utils/config');
const bodyParser = require('body-parser');
const readAlltasks = require('./src/routes/readAllTasks');
const readTaskById = require('./src/routes/readTaskById');
const createTask = require('./src/routes/createTask');
const updateTask = require('./src/routes/updateTask');
const deleteTask = require('./src/routes/deleteTask');

server.use(bodyParser.json());

server.get('/', (req, res) => res.send('My Kanban API'));
readAlltasks(server);
readTaskById(server);
createTask(server);
updateTask(server);
deleteTask(server);

server.listen(port, () => console.log(`Server listening on : ${url}:${port}`));
