const router = require('express').Router();
const controllers = require('../controllers');
const authentication = require('../middlewares/authentication');

router.post('/users/register', controllers.UserController.register);
router.post('/users/login', controllers.UserController.login);
router.use(authentication);

module.exports = router;
