const { Task } = require('../db/sequelize');

const createTask = (app) => {
  app.post('/api/tasks', (req, res) => {
    Task.create(req.body).then((newTask) => {
      const message = 'The task has been added to the list';
      res.json({ message, data: newTask });
    });
  });
};

module.exports = createTask;
