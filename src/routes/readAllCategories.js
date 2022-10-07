const { Category } = require('../db/sequelize');

const readAllCategories = (app) => {
  app.get('/api/categories', (req, res) => {
    Category.findAll().then((categories) => {
      const message = 'La liste des catégories a bien été récupérée';
      res.json({ message, data: categories });
    });
  });
};

module.exports = readAllCategories;
