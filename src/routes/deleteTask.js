const { Task } = require('../db/sequelize');

const deleteTask = (app) => {
  app.delete('/api/task/:id', (req, res) => {
    Task.findByPk(req.params.id).then((task) => {
      const deletedTask = task;
      Task.destroy({
        where: { id: task.id },
      }).then(() => {
        const message = 'La tâche a bien été supprimée';
        res.json({ message, data: deletedTask });
      });
    });
  });
};

module.exports = deleteTask;
