const { Task } = require('../db/sequelize');

const deleteTask = (app) => {
  app.delete('/api/task/:id', (req, res) => {
    Task.findByPk(req.params.id).then((task) => {
      const deletedTask = task;
      Task.destroy({
        where: { id: task.id },
      }).then(() => {
        const message = 'The task has been deleted';
        res.json({ message, data: deletedTask });
      });
    });
  });
};

module.exports = deleteTask;
