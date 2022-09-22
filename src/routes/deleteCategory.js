const { Category } = require('../db/sequelize');

const deleteCategory = (app) => {
  app.delete('/api/category/:id', (req, res) => {
    Category.findByPk(req.params.id).then((category) => {
      const deletedCategory = category;
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
