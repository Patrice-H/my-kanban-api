const { Category } = require('../db/sequelize');

const updateCategory = (app) => {
  app.put('/api/category/:id', (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id },
    }).then(() => {
      Category.findByPk(id).then((updatedCategory) => {
        const message = 'La catégorie a bien été mise à jour';
        res.json({ message, data: updatedCategory });
      });
    });
  });
};

module.exports = updateCategory;
