const Sequelize = require('sequelize');
const config = require('@config');

const connection = new Sequelize(config.db.db, config.db.user, config.db.pass, {
    host: config.db.host,
    dialect: 'mysql',
    port: config.db.port,
    timezone: '-03:00'
});

module.exports = connection;