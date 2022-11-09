const { Dashboard } = require('../db/sequelize');

/**
 * Function to get the dashboards list
 *
 * @description It gets all the dashboards from the database and returns them with a message.
 * @param {object} app - the express app
 */
const readAllDashboards = (app) => {
  app.get('/api/dashboards', (req, res) => {
    Dashboard.findAll()
      .then((dashboards) => {
        const message = 'La liste des tableaux de bord a bien été récupérée';
        res.json({ message, data: dashboards });
      })
      .catch((error) => {
        const message = `La liste des tableaux de bord n'a pas pu être récupérée ! Veuillez réessayer ultérieurement`;
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = readAllDashboards;
