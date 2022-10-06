const { Task } = require('../db/sequelize');

const createTask = (app) => {
  app.post('/api/tasks', (req, res) => {
    Task.create(req.body)
      .then((newTask) => {
        const message = 'La tâche a bien créée et ajoutée à la liste';
        res.json({ message, data: newTask });
      })
      .catch((error) => {
        const message = `La tâche n'a pas pu être créée ! Veuillez réessayer ultérieurement`;
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = createTask;
