const { Task } = require('../db/sequelize');

const createTask = (app) => {
  app.post('/api/tasks', (req, res) => {
    Task.create(req.body).then((newTask) => {
      const message = 'La tâche a bien créée et ajoutée à la liste';
      res.json({ message, data: newTask });
    });
  });
};

module.exports = createTask;
