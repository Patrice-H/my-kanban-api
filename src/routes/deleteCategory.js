const { Category } = require('../db/sequelize');

/**
 * Function to delete a category
 *
 * @description It deletes a category from the database and returns a message and the deleted category.
 * @param {object} app - the express app
 */
const deleteCategory = (app) => {
  app.delete('/api/category/:id', (req, res) => {
    Category.findByPk(req.params.id)
      .then((category) => {
        const deletedCategory = category;
        if (category === null) {
          const message =
            "La catégorie demandée n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }

        return Category.destroy({
          where: { id: category.id },
        }).then(() => {
          const message = 'La catégorie a bien été supprimée';
          res.json({ message, data: deletedCategory });
        });
      })
      .catch((error) => {
        const message =
          "La catégorie n'a pas pu être supprimée. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = deleteCategory;
