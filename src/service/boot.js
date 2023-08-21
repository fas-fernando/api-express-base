const server = require('@app');
const config = require('@config');
const connection = require('@db');

connection.authenticate().then(() => {
    console.log('Conexão com o banco de dados, ok');
}).catch((err) => {
    console.log(err);
});

module.exports = (error) => {
    if(error) {
        return console.log('Erro ao conectar com o banco de dados');
    }

    server.listen(config.app.port, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log('Server run or port 3000');
        }
    });
};