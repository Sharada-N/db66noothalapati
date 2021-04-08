var express= require('express');
const parking_controlers= require('../controllers/parking');
var router= express.Router();

/* GET parkings */
router.get('/',parking_controlers.parking_view_all_Page);
module.exports= router;