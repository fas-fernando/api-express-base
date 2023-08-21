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
    requests: {
        rateLimit: {
            window: 60 * 1000, // ms
            max: 5,
        },

        slowDown: {
            window: 15 * 60 * 1000, // ms
            dalayAfter: 100,
            dalayMs: 100,
        }
    }
};