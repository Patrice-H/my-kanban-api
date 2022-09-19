const { Task } = require('../db/sequelize');

const updateTask = (app) => {
  app.put('/api/task/:id', (req, res) => {
    const id = req.params.id;
    Task.update(req.body, {
      where: { id: id },
    }).then(() => {
      Task.findByPk(id).then((updatedTask) => {
        const message = 'La tâche a bien été mise à jour';
        res.json({ message, data: updatedTask });
      });
    });
  });
};

module.exports = updateTask;
