const { server, port, url } = require('./src/utils/config');
const cors = require('cors');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize');
const readAlltasks = require('./src/routes/readAllTasks');
const readTaskById = require('./src/routes/readTaskById');
const createTask = require('./src/routes/createTask');
const updateTask = require('./src/routes/updateTask');
const deleteTask = require('./src/routes/deleteTask');
const readAllCategories = require('./src/routes/readAllCategories');
const readCategoryById = require('./src/routes/readCategoryById');
const createCategory = require('./src/routes/createCategory');
const updateCategory = require('./src/routes/updateCategory');
const deleteCategory = require('./src/routes/deleteCategory');
const readAllDashboards = require('./src/routes/readAllDashboards');
const readDashboardById = require('./src/routes/readDashboardById');
const createDashboard = require('./src/routes/createDashboard');
const updateDashboard = require('./src/routes/updateDashboard');
const deleteDashboard = require('./src/routes/deleteDashboard');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocs = yaml.load('./swagger.yaml');

server.use(cors());

server
  .use(favicon(__dirname + '/favicon.ico'))
  .use(morgan('dev'))
  .use(bodyParser.json());

sequelize.connectDb();
sequelize.initDb();

server.get('/', (req, res) =>
  res.send('My Kanban API v1.0.0<br /><a href="./api">link to documentation<a>')
);
readAlltasks(server);
readTaskById(server);
createTask(server);
updateTask(server);
deleteTask(server);
readAllCategories(server);
readCategoryById(server);
createCategory(server);
updateCategory(server);
deleteCategory(server);
readAllDashboards(server);
readDashboardById(server);
createDashboard(server);
updateDashboard(server);
deleteDashboard(server);

server.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

server.use((req, res) => {
  const urlError =
    'Impossible de trouver la ressource demandée ! Veuillez essayer avec une autre URL';
  const dbError = `Impossible d'accéder à la base de données ! Veuillez réessayer ultérieurement`;
  if (req.url === '/tasks') {
    res.status(404).json({ message: dbError });
  } else {
    res.status(404).json({ message: urlError });
  }
});

server.listen(port, () => console.log(`Server listening on : ${url}:${port}`));
