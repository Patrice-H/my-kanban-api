const { Category } = require('../db/sequelize');

const updateCategory = (app) => {
  app.put('/api/category/:id', (req, res) => {
    const id = req.params.id;
    Category.update(req.body, {
      where: { id: id },
    })
      .then(() => {
        return Category.findByPk(id).then((updatedCategory) => {
          if (updatedCategory === null) {
            const message =
              "La catégorie demandée n'existe pas. Réessayez avec un autre identifiant";

            return res.status(404).json({ message });
          }
          const message = 'La catégorie a bien été mise à jour';
          res.json({ message, data: updatedCategory });
        });
      })
      .catch((error) => {
        const message =
          "La catégorie n'a pas pu être mise à jour. Veuillez réessayer ultérieurement";
        res.status(500).json({ message, data: error });
      });
  });
};

module.exports = updateCategory;
