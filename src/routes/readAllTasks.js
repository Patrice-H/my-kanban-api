const { Task } = require('../db/sequelize');

const readAlltasks = (app) => {
  app.get('/api/tasks', (req, res) => {
    Task.findAll()
      .then((tasks) => {
        const message = 'La liste des tâches a bien été récupérée';
        res.json({ message, data: tasks });
      })
      .catch((error) => {
        const message = `La liste des tâches n'a pas pu être récupérée ! Veuillez réessayer ultérieurement`;
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = readAlltasks;
