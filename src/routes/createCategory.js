const { Category } = require('../db/sequelize');

const createCategory = (app) => {
  app.post('/api/categories', (req, res) => {
    Category.create(req.body).then((newCategory) => {
      const message = 'La catégorie a bien créée et ajoutée à la liste';
      res.json({ message, data: newCategory });
    });
  });
};

module.exports = createCategory;
