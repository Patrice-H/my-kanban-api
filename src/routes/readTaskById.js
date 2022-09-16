const { Task } = require('../db/sequelize');

const readTaskById = (app) => {
  app.get('/api/task/:id', (req, res) => {
    Task.findByPk(req.params.id).then((task) => {
      const message = 'The task has been found';
      res.json({ message, data: task });
    });
  });
};

module.exports = readTaskById;
