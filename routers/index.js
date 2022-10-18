const router = require('express').Router();
const { UserController, PhotoController } = require('../controllers');
const authentication = require('../middlewares/authentication');
const {
  authorizationUser,
  authorizationPhoto,
} = require('../middlewares/authorization');

router.post('/users/register', UserController.register);
router.post('/users/login', UserController.login);

router.use(authentication);

router.use('/users/:userId', authorizationUser);
router.put('/users/:userId', UserController.updateUser);
router.delete('/users/:userId', UserController.deleteUser);

router.post('/photos', PhotoController.createPhoto);
router.get('/photos', PhotoController.getAllPhotos);

router.use('/photos/:photoId', authorizationPhoto);
router.put('/photos/:photoId', PhotoController.updatePhoto);
router.delete('/photos/:photoId', PhotoController.deletePhoto);

module.exports = router;
