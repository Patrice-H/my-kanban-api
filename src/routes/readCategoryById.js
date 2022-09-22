const { Category } = require('../db/sequelize');

const readCategoryById = (app) => {
  app.get('/api/category/:id', (req, res) => {
    Category.findByPk(req.params.id).then((category) => {
      const message = 'The category has been found';
      res.json({ message, data: category });
    });
  });
};

module.exports = readCategoryById;
