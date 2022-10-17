const router = require('express').Router();
const { UserController, PhotoController } = require('../controllers');
const authentication = require('../middlewares/authentication');
const authorizationUser = require('../middlewares/authorization');
const authorization = require('../middlewares/authorization');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication);
router.use('/users/:id', authorizationUser);
router.put('/users/:id', UserController.updateUser);

module.exports = router;
