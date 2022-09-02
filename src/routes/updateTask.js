let tasks = require('../db/data');

const updateTask = (app) => {
  app.put('/api/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTask = { ...req.body };
    tasks = tasks.map((task) => {
      return task.id === id ? updatedTask : task;
    });
    const message = 'The task has been updated';
    res.json({ message, data: updatedTask });
  });
};

module.exports = updateTask;
