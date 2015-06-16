var express = require('express');
var router = express.Router();

var studentController = require('../controllers/studentController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* students */
router.get('/students/new', studentController.new);
router.get('/students', studentController.index);
router.post('/students', studentController.create);
router.get('/students/:userId(\\d+)/edit', studentController.edit);
router.put('/students/:userId(\\d+)', studentController.update);
router.delete('/students/:userId(\\d+)', studentController.destroy);

module.exports = router;
