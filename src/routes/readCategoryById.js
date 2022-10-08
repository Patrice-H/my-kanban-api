const { Category } = require('../db/sequelize');

const readCategoryById = (app) => {
  app.get('/api/category/:id', (req, res) => {
    Category.findByPk(req.params.id).then((category) => {
      if (category === null) {
        const message =
          "La catégorie demandée n'existe pas. Réessayez avec un autre identifiant";

        return res.status(404).json({ message });
      }
      const message = 'La catégorie a bien été récupérée';
      res.json({ message, data: category });
    });
  });
};

module.exports = readCategoryById;
