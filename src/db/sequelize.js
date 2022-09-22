const { Sequelize, DataTypes } = require('sequelize');
const TaskModel = require('../models/task');
const CategoryModel = require('../models/category');
let tasks = require('./data');
let categories = require('./dataCategories');

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
const Category = CategoryModel(sequelize, DataTypes);

const initDb = async () => {
  return sequelize.sync({ force: true }).then(() => {
    Task.bulkCreate(tasks).then(() =>
      console.log('The tasks was successfully synchronized')
    );
    Category.bulkCreate(categories).then(() => {
      console.log('The categories was successfully synchronized');
    });
  });
};

module.exports = { connectDb, initDb, Task };
