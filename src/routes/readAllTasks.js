const { Task } = require('../db/sequelize');

const readAlltasks = (app) => {
  app.get('/api/tasks', (req, res) => {
    Task.findAll().then((tasks) => {
      const message = 'The tasks list has been successfully retrieved';
      res.json({ message, data: tasks });
    });
  });
};

module.exports = readAlltasks;
