const { Dashboard } = require('../db/sequelize');

const updateDashboard = (app) => {
  app.put('/api/dashboard/:id', (req, res) => {
    const id = req.params.id;
    Dashboard.update(req.body, {
      where: { id: id },
    }).then(() => {
      Dashboard.findByPk(id).then((updatedDashboard) => {
        if (updatedDashboard === null) {
          const message =
            "Le tableau de bord demandé n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }
        const message = 'Le tableau de bord a bien été mis à jour';
        res.json({ message, data: updatedDashboard });
      });
    });
  });
};

module.exports = updateDashboard;
