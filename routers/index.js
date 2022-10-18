const router = require('express').Router();
const { UserController, PhotoController } = require('../controllers');
const authentication = require('../middlewares/authentication');
const authorizationUser = require('../middlewares/authorization');
const authorization = require('../middlewares/authorization');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication);

router.use('/users/:userId', authorizationUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

// router.use('/photos/:')
router.post('/photos', PhotoController.createPhoto);
router.get('/photos', PhotoController.getAllPhotos);

module.exports = router;
