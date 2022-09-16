const { Sequelize, DataTypes } = require('sequelize');
const TaskModel = require('../models/task');
let tasks = require('./data');

const sequelize = new Sequelize('my-kanban', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true,
  },
  timezone: '+02:00',
  logging: false,
});

const connectDb = async () => {
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

const Task = TaskModel(sequelize, DataTypes);

const initDb = async () => {
  return sequelize.sync({ force: true }).then(() => {
    Task.bulkCreate(tasks).then(() =>
      console.log('The database was successfully synchronized')
    );
  });
};

module.exports = { connectDb, initDb, Task };
