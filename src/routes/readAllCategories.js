const { Category } = require('../db/sequelize');

/**
 * Function to get the categories list
 *
 * @description It gets all the categories from the database and returns them with a message.
 * @param {object} app - the express app
 */
const readAllCategories = (app) => {
  app.get('/api/categories', (req, res) => {
    Category.findAll()
      .then((categories) => {
        const message = 'La liste des catégories a bien été récupérée';
        res.json({ message, data: categories });
      })
      .catch((error) => {
        const message = `La liste des catégories n'a pas pu être récupérée ! Veuillez réessayer ultérieurement`;
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = readAllCategories;
