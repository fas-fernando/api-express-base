module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    db: {
        host: process.env.MYSQL_HOST,
        db: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        pass: process.env.MYSQL_PASSWORD,
    },
};