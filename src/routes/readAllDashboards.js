const { Dashboard } = require('../db/sequelize');

const readAllDashboards = (app) => {
  app.get('/api/dashboards', (req, res) => {
    Dashboard.findAll().then((dashboards) => {
      const message = 'La liste des tableaux de bord a bien été récupérée';
      res.json({ message, data: dashboards });
    });
  });
};

module.exports = readAllDashboards;
