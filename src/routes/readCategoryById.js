const { Category } = require('../db/sequelize');

/**
 * Function to get a category
 *
 * @description It returns a category by its id from the database and a message.
 * @param {object} app - the express app
 */
const readCategoryById = (app) => {
  app.get('/api/category/:id', (req, res) => {
    Category.findByPk(req.params.id)
      .then((category) => {
        if (category === null) {
          const message =
            "La catégorie demandée n'existe pas. Réessayez avec un autre identifiant";

          return res.status(404).json({ message });
        }
        const message = 'La catégorie a bien été récupérée';
        res.json({ message, data: category });
      })
      .catch((error) => {
        const message =
          "La catégorie n'a pas pu être récupérée. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = readCategoryById;
