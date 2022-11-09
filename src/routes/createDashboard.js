const { Dashboard } = require('../db/sequelize');

/**
 * Function to create a dashboard
 *
 * @description It creates a new dashboard in the database and returns a message and the new dashboard.
 * @param {object} app - the express app
 */
const createDashboard = (app) => {
  app.post('/api/dashboards', (req, res) => {
    Dashboard.create(req.body)
      .then((newDashboard) => {
        const message =
          'Le tableau de bord a bien été créé et ajouté à la liste';
        res.json({ message, data: newDashboard });
      })
      .catch((error) => {
        const message = `Le tableau de bord n'a pas pu être créé ! Veuillez réessayer ultérieurement`;
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = createDashboard;
