const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('my-kanban', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timeZone: 'Etc/GMT-2',
  },
  logging: false,
});

const connectDb = () => {
  return sequelize
    .authenticate()
    .then(() =>
      console.log(
        'The connection to the database has been successfully established'
      )
    )
    .catch((error) =>
      console.error(`Unable to connect to database : ${error}`)
    );
};

module.exports = { connectDb };
