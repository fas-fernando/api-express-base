const router = require('express').Router();

const UserController = require('@controller/user');

router.get('/users', UserController.getAll);

module.exports = router;