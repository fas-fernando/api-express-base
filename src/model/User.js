const Sequelize = require('sequelize');
const connection = require('@db/index');

const User = connection.define('users', {
    fullName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

User.sync({ force: false }).then(() => {});

module.exports = User;