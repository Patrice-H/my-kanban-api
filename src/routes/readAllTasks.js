const tasks = require('../db/data');

const readAlltasks = (app) => {
  app.get('/api/tasks', (req, res) => {
    const message = 'The tasks list has been successfully retrieved';
    res.json({ message, data: tasks });
  });
};

module.exports = readAlltasks;
