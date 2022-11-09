const { Dashboard } = require('../db/sequelize');

/**
 * Function to update a dashboard
 *
 * @description It updates a dashboard in the database and returns a message and the updated dashboard.
 * @param {object} app - the express app
 */
const updateDashboard = (app) => {
  app.put('/api/dashboard/:id', (req, res) => {
    const id = req.params.id;
    Dashboard.update(req.body, {
      where: { id: id },
    })
      .then(() => {
        return Dashboard.findByPk(id).then((updatedDashboard) => {
          if (updatedDashboard === null) {
            const message =
              "Le tableau de bord demandé n'existe pas. Réessayez avec un autre identifiant";

            return res.status(404).json({ message });
          }
          const message = 'Le tableau de bord a bien été mis à jour';
          res.json({ message, data: updatedDashboard });
        });
      })
      .catch((error) => {
        const message =
          "Le tableau de bord n'a pas pu être mis à jour. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = updateDashboard;
