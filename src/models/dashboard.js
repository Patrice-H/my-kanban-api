/**
 * @description A module that define a dashboard
 * @module dashboard
 */
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'Dashboard',
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
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: false,
    }
  );
};
