const { Category } = require('../db/sequelize');

const deleteCategory = (app) => {
  app.delete('/api/category/:id', (req, res) => {
    Category.findByPk(req.params.id).then((category) => {
      const deletedCategory = category;
      if (category === null) {
        const message =
          "La catégorie demandée n'existe pas. Réessayez avec un autre identifiant";

        return res.status(404).json({ message });
      }
      Category.destroy({
        where: { id: category.id },
      }).then(() => {
        const message = 'La catégorie a bien été supprimée';
        res.json({ message, data: deletedCategory });
      });
    });
  });
};

module.exports = deleteCategory;
