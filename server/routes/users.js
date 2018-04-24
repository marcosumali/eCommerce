var express = require('express');
var ControllerUser = require('../controllers/c_users');

var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
// });

router
  .get('/', ControllerUser.get)
  .post('/save', ControllerUser.save)
  .put('/update', ControllerUser.update)
  .delete('/delete', ControllerUser.delete)


module.exports = router;
