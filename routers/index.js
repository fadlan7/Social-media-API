const router = require('express').Router();
const controllers = require('../controllers');

router.post('/users/register', controllers.UserController.register);

module.exports = router;
