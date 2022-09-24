const { Dashboard } = require('../db/sequelize');

const createDashboard = (app) => {
  app.post('/api/dashboards', (req, res) => {
    Dashboard.create(req.body).then((newDashboard) => {
      const message =
        'Le tableau de bord a bien été créé et ajoutée à la liste';
      res.json({ message, data: newDashboard });
    });
  });
};

module.exports = createDashboard;
