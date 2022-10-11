const { Dashboard } = require('../db/sequelize');

const readDashboardById = (app) => {
  app.get('/api/dashboard/:id', (req, res) => {
    Dashboard.findByPk(req.params.id)
      .then((dashboard) => {
        if (dashboard === null) {
          const message =
            "Le tableau de bord demandé n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }
        const message = 'Le tableau de bord a bien été récupéré';
        res.json({ message, data: dashboard });
      })
      .catch((error) => {
        const message =
          "Le tableau de bord n'a pas pu être récupéré. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = readDashboardById;
