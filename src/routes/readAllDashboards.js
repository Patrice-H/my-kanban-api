const { Dashboard } = require('../db/sequelize');

const readAllDashboards = (app) => {
  app.get('/api/dashboards', (req, res) => {
    Dashboard.findAll().then((dashboards) => {
      const message = 'The dashboards list has been retrieved';
      res.json({ message, data: dashboards });
    });
  });
};

module.exports = readAllDashboards;
