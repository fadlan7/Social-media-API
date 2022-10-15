const router = require('express').Router();
const controllers = require('../controllers');

router.post('/users/register', controllers.UserController.register);
router.post('/users/login', controllers.UserController.login);

module.exports = router;
