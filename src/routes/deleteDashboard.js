const { Dashboard } = require('../db/sequelize');

/**
 * Function to delete a dashboard
 *
 * @description It deletes a dashboard from the database and returns a message and the deleted dashboard.
 * @param {object} app - the express app
 */
const deleteDashboard = (app) => {
  app.delete('/api/dashboard/:id', (req, res) => {
    Dashboard.findByPk(req.params.id)
      .then((dashboard) => {
        const deletedDashboard = dashboard;
        if (dashboard === null) {
          const message =
            "Le tableau de bord demandé n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }

        return Dashboard.destroy({
          where: { id: dashboard.id },
        }).then(() => {
          const message = 'Le tableau de bord a bien été supprimé';
          res.json({ message, data: deletedDashboard });
        });
      })
      .catch((error) => {
        const message =
          "Le tableau de bord n'a pas pu être supprimé. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = deleteDashboard;
