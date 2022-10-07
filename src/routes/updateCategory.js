const { Category } = require('../db/sequelize');

const updateCategory = (app) => {
  app.put('/api/category/:id', (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id },
    }).then(() => {
      Category.findByPk(id).then((updatedCategory) => {
        if (updatedTask === null) {
          const message =
            "La catégorie demandée n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }
        const message = 'La catégorie a bien été mise à jour';
        res.json({ message, data: updatedCategory });
      });
    });
  });
};

module.exports = updateCategory;
