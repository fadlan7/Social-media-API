const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', (req, res) => {
  res.send('hahah');
});

module.exports = router;
