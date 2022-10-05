const { Task } = require('../db/sequelize');

const readTaskById = (app) => {
  app.get('/api/task/:id', (req, res) => {
    Task.findByPk(req.params.id)
      .then((task) => {
        if (task === null) {
          const message =
            "La tâche demandée n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }
        const message = 'La tâche a bien été récupérée';
        res.json({ message, data: task });
      })
      .catch((error) => {
        const message =
          "La tâche n'a pas pu être récupérée. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = readTaskById;
