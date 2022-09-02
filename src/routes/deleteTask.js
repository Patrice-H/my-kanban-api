let tasks = require('../db/data');

const deleteTask = (app) => {
  app.delete('/api/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const deletedTask = tasks.find((task) => task.id === id);
    tasks = tasks.filter((task) => task.id !== id);
    const message = 'The task has been deleted';
    res.json({ message, data: deletedTask });
  });
};

module.exports = deleteTask;
