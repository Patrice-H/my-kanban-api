const { Dashboard } = require('../db/sequelize');

const deleteDashboard = (app) => {
  app.delete('/api/dashboard/:id', (req, res) => {
    Dashboard.findByPk(req.params.id).then((dashboard) => {
      const deletedDashboard = dashboard;
      if (dashboard === null) {
        const message =
          "Le tableau de bord demandé n'existe pas. Réessayez avec un autre identifiant";

        return res.status(404).json({ message });
      }
      Dashboard.destroy({
        where: { id: dashboard.id },
      }).then(() => {
        const message = 'Le tableau de bord a bien été supprimé';
        res.json({ message, data: deletedDashboard });
      });
    });
  });
};

module.exports = deleteDashboard;
