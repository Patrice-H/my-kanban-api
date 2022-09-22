const { Category } = require('../db/sequelize');

const readAllCategories = (app) => {
  app.get('/api/categories', (req, res) => {
    Category.findAll().then((categories) => {
      const message = 'The categories list has been retrieved';
      res.json({ message, data: categories });
    });
  });
};

module.exports = readAllCategories;
