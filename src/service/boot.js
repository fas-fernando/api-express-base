const server = require('@app');
const config = require('@config');

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