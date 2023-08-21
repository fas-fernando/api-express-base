const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log('Server run or port 3000');
    }
});