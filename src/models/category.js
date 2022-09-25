module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      background_color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dashboard_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: false,
    }
  );
};
