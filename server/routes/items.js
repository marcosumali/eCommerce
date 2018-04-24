var express = require('express');
var images = require('../helpers/image');
var ControllerItem = require('../controllers/c_items');

var router = express.Router();

router
  .get('/', ControllerItem.get)
  .post('/save', images.multer.single('image'), images.sendUploadToGCS, ControllerItem.save)
  .put('/update', ControllerItem.update)
  .delete('/delete', ControllerItem.delete)

//TEST UPLOAD
router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })

module.exports = router;