const { Sequelize, DataTypes } = require('sequelize');
const TaskModel = require('../models/task');
const CategoryModel = require('../models/category');
const DashboardModel = require('../models/dashboard');
let tasks = require('./dataTasks');
let categories = require('./dataCategories');
let dashboards = require('./dataDashboards');

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

/**
 * Function to connect to the database
 *
 * @description It connects to the database and returns a promise.
 * @returns The connection to the database has been successfully established
 */
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

const Dashboard = DashboardModel(sequelize, DataTypes);
const Category = CategoryModel(sequelize, DataTypes);
const Task = TaskModel(sequelize, DataTypes);

/**
 * Function to init database
 *
 * @description It creates a new database, then creates the tables, then inserts the data into the tables.
 * @returns The return value is a promise.
 */
const initDb = async () => {
  return sequelize.sync({ force: true }).then(() => {
    Dashboard.bulkCreate(dashboards).then(() => {
      console.log('The dashboards was successfully synchronized');
    });
    Category.bulkCreate(categories).then(() => {
      console.log('The categories was successfully synchronized');
    });
    Task.bulkCreate(tasks).then(() =>
      console.log('The tasks was successfully synchronized')
    );
  });
};

module.exports = { connectDb, initDb, Task, Category, Dashboard };
