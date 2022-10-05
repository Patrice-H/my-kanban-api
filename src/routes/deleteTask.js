const { Task } = require('../db/sequelize');

const deleteTask = (app) => {
  app.delete('/api/task/:id', (req, res) => {
    Task.findByPk(req.params.id)
      .then((task) => {
        const deletedTask = task;
        if (task === null) {
          const message =
            "La tâche demandée n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }

        return Task.destroy({
          where: { id: task.id },
        }).then(() => {
          const message = 'La tâche a bien été supprimée';
          res.json({ message, data: deletedTask });
        });
      })
      .catch((error) => {
        const message =
          "La tâche n'a pas pu être supprimée. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = deleteTask;
