const { Task } = require('../db/sequelize');

const readTaskById = (app) => {
  app.get('/api/task/:id', (req, res) => {
    Task.findByPk(req.params.id).then((task) => {
      if (task === null) {
        const message =
          "La tâche demandée n'existe pas. Réessayez avec un autre identifiant";

        return res.status(404).json({ message });
      }
      const message = 'The task has been found';
      res.json({ message, data: task });
    });
  });
};

module.exports = readTaskById;
