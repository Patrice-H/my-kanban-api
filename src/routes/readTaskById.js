const tasks = require('../db/data');

const readTaskById = (app) => {
  app.get('/api/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === id);
    const message = 'The task has been found';
    res.json({ message, data: task });
  });
};

module.exports = readTaskById;
