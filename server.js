require('dotenv').config();
require('module-alias/register');

const config = require('@config');
const server = require('@app');


server.listen(config.app.port, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server run or port 3000');
    }
});