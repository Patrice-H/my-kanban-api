const bodyParser = require('body-parser');
let tasks = require('../db/data');

const createTask = (app) => {
  app.use(bodyParser.json());
  app.post('/api/tasks', (req, res) => {
    const newTask = { ...req.body };
    tasks.push(newTask);
    const message = 'The task has been added to the list';
    res.json({ message, data: tasks });
  });
};

module.exports = createTask;
