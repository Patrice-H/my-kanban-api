const { Category } = require('../db/sequelize');

/**
 * Function to create a category
 *
 * @description It creates a new category in the database and returns a message and the new category.
 * @param {object} app - the express app
 */
const createCategory = (app) => {
  app.post('/api/categories', (req, res) => {
    Category.create(req.body)
      .then((newCategory) => {
        const message = 'La catégorie a bien créée et ajoutée à la liste';
        res.json({ message, data: newCategory });
      })
      .catch((error) => {
        const message = `La catégorie n'a pas pu être créée ! Veuillez réessayer ultérieurement`;
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = createCategory;
